const con = require("../utils/db");
const modelExports = (module.exports = {});
const controllers = require("../controllers/controllers");
require("express");

// Contents_Article_List READ
modelExports.contents_Article_List = () => {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM article;";
    con.getConnection((err, connection) => {
      try {
        if (err) throw err;
        console.log("Connect Success");

        connection.query(sql, (err, result, fields) => {
          if (err) {
            console.log("Error: ", err);
          } else {
            if (result.length === 0) {
              console.error("DB response NOT Found");
            } else {
              resolve(result);
              console.log("READ Article List Success");
            }
          }
        });
        connection.release();
      } catch (err) {
        console.error("pool Error: Article_List", err);
      }
    });
  });
};

// Article_Comment READ
modelExports.contents_Article_ReadComment = () => {
  return new Promise((resolve, reject) => {
    let no = controllers.no;
    let sql = `SELECT * FROM comments WHERE page_no='${no}';`;
    con.getConnection((err, connection) => {
      try {
        if (err) throw err;
        console.log("Connect Success");

        connection.query(sql, (err, result, fields) => {
          if (err) {
            console.log("Error: ", err);
          } else {
            if (result.length === 0) {
              console.error("DB response NOT Found");
            } else {
              resolve(result);
              console.log("INSERT Comment in table Success");
            }
          }
        });
        connection.release();
      } catch (err) {
        console.error("pool Error: Add Comment");
      }
    });
  });
};

// Article_Comment INSERT
modelExports.contents_Article_AddComment = () => {
  return new Promise((resolve, reject) => {
    let comment = controllers.comment;
    let page_no = controllers.page_no;
    let userid = controllers.userid;
    let sql = `INSERT INTO comments (id, text, page, page_no) VALUES ('${userid}', '${comment}', 'Contents', '${page_no}');`;
    con.getConnection((err, connection) => {
      try {
        if (err) throw err;
        console.log("Connect Success");

        connection.query(sql, (err, result, fields) => {
          if (err) {
            console.log("Error: ", err);
          } else {
            if (result.length === 0) {
              console.error("DB response NOT Found");
            } else {
              resolve(result);
              console.log("INSERT Comment in table Success");
            }
          }
        });
        connection.release();
      } catch (err) {
        console.error("pool Error: Add Comment");
      }
    });
  });
};

// Article_Comment DELETE
modelExports.contents_Article_DeleteComment = () => {
  return new Promise((resolve, reject) => {
    let text = controllers.delText;
    let no = controllers.delNo;
    let sql = `UPDATE comments SET text='${text}' WHERE no=${no};`;
    con.getConnection((err, connection) => {
      try {
        if (err) throw err;
        console.log("Connect Success");

        connection.query(sql, (err, result, fields) => {
          if (err) {
            console.log("Error: ", err);
          } else {
            if (result.length === 0) {
              console.error("DB response NOT Found");
            } else {
              resolve(result);
              console.log("DELETE Comment in table Success");
            }
          }
        });
        connection.release();
      } catch (err) {
        console.error("pool Error: Delete Comment");
      }
    });
  });
};


