import { all } from "../db-connection";

const controllers = {
  //ceate feedback

  //http://localhost:5000/api/comment/
  create: (req, res) => {
    const comment = req.body;
    const time = Date();
    const sql = `INSERT INTO feedback(name,message,type,time)VALUES('${comment.name}','${comment.message}','${comment.type}','${time}')`;
    console.log(comment);
    all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json(rows);
    });
  },
  get: (req, res) => {
    const sql = `SELECT * from feedback`;

    all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }

      res.json(rows);
    });
  },
  getOne: (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM feedback WHERE feedbackId = "${id}"`;
    all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }

      res.json(rows);
    });
  },

  update: (req, res) => {
    // read row data from body
    const id = req.params.id;
    const newComment = req.body;
    const sql = `UPDATE feedback SET title ='${newComment.title}',detail =${newComment.detail} WHERE feedbackId = ${id}`;
    all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json("feedback updated.....");
    });
  },
  delete: (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM feedback where feedbackId = ${id}`;
    all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }

      res.json("feedback Successfully Deleted");
    });
  },
};

export default controllers;
