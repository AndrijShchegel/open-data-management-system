const { Router } = require("express");
const mysql = require('mysql2/promise');
const { extend } = require('lodash');


const sql = {
    createEditForm: `INSERT INTO EDITFORM(ID, EDITORUSERNAME, OLDFILE_CSV, NEWFILE_CSV, EDITDATE, DATAFILE_ID, DATAFILE_CATEGORY_ID) VALUES (:id, :editorusername, :oldfile_csv, :newfile_csv, :editdate, :datafile_id, :datafile_category_id)`,
    readEditFormByID: `SELECT * FROM EDITFORM WHERE ID = :id`,
    readAllEditForm: `SELECT * FROM EDITFORM`,
    updateEditFormByID: `UPDATE EDITFORM SET EDITORUSERNAME= :editorusername, OLDFILE_CSV= :oldfile_csv, NEWFILE_CSV= :newfile_csv, EDITDATE= :editdate, DATAFILE_ID= datafile_id, DATAFILE_CATEGORY_ID= :datafile_category_id WHERE ID= :id`,
    deleteEditFormByID: `DELETE FROM EDITFORM WHERE ID = :id`,
  };
  
  const executeSQL = async (query, values) => {
    let connection;
    let sqlStatement;
    try {
      connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Socket$2406',
        database: 'imbaza',
        namedPlaceholders: true
      });
      sqlStatement = connection.format(query, values);

    const [ results, fields ] = await connection.execute(sqlStatement);
    return results;
  } catch (err) {
    throw new Error(`SQL: ${sqlStatement} - ${err.toString()}`);
  } finally {
    if (connection) connection.end();
  }
};

const router = Router();

router.post('/:id', async (req, res) => {
  try {
    const values = extend({}, req.body, req.params);
    let result = await executeSQL(sql.createEditForm, values);
    result = await executeSQL(sql.readEditFormByID, req.params);
    res.status(200).send(result);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: `${err.toString()}`
    });
  }
});

router.get('/', async (req, res) => {
  try {
    let result = await executeSQL(sql.readAllEditForm);
    res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err.toString());
  }
});

router.get('/:id', async (req, res) => {
  try {
    let result = await executeSQL(sql.readEditFormByID, req.params);
    res.status(200).send(result);
  } catch (err) {
    return res.status(500).send({
        status: 500,
        error: `${err.toString()}`
      });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const values = extend({}, req.body, req.params);
    let result = await executeSQL(sql.updateEditFormByID, values);
    result = await executeSQL(sql.readEditFormByID, req.params);
    res.status(200).send(result);
  } catch (err) {
    return res.status(500).send({
        status: 500,
        error: `${err.toString()}`
      });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    let result = await executeSQL(sql.readEditFormByID, req.params);
    await executeSQL(sql.deleteEditFormByID, req.params);
    res.status(200).send(result);
  } catch (err) {
    return res.status(500).send({
        status: 500,
        error: `${err.toString()}`
    });
  }
});

module.exports = router;
