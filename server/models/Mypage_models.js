const con = require("../utils/db");
const modelExports = module.exports = {};
const controllers = require("../controllers/controllers");
require("express");

//======================Todo

modelExports.getTodo = () => {
    return new Promise((resolve, reject) => {
        const sqlSelect = `SELECT * FROM mypage_todo;`;
        try {
            con.getConnection((err, connection) => {
            connection.query(sqlSelect, (err, result, fields) => {
               resolve(result);
               console.log("DB READ OK");
            });
            connection.release();
            }); 
        } catch(err) {
            console.log("err 내용은", err);
        }
})};

modelExports.postTodo = () => {
    let title = controllers.title;
    let contents = controllers.contents;

    return new Promise((resolve, reject) => {
        const sqlInsert = "INSERT INTO mypage_todo (title, contents) VALUES (?, ?);";
        try{
            con.getConnection((err, connection) => {
                connection.query(sqlInsert, [title, contents], (err, result, fileds) => {
                    resolve(result);
                    console.log("Todo insert ok");
                });
                connection.release();
            });
        } catch(err){
            console.log("err 내용은", err)
        }
    })
}

modelExports.deleteTodo = () => {
    let title = controllers.title;

    return new Promise((resolve, reject) => {
        const sqlDelete = "DELETE FROM mypage_todo WHERE title = ?;";
        try{
            con.getConnection((err, connection) => {
                connection.query(sqlDelete, [title] , (err, result, fileds) => {
                    resolve(result);
                    console.log("Todo insert ok");
                });
                connection.release();
            });
        } catch(err){
            console.log("err내용은", err)
        }
    })
}


//====== Profile

modelExports.getProfile = () => {
    return new Promise((resolve, reject) => {
        const sqlSelect = "SELECT * FROM mypage_profile;";
        try {
            con.getConnection((err,connection) => {
                connection.query(sqlSelect, (err, result, fields) => {
                    resolve(result);
                    console.log("Profile DB READ OK!")
                });
                connection.release();
            });
        } catch(err) {
            console.log("err 내용은", err)
        }
    })
}

modelExports.getLogin = () => {
    return new Promise((resolve, reject) => {
        const sqlSelect = "SELECT * FROM user_inform;";
        try {
            con.getConnection((err,connection) => {
                connection.query(sqlSelect, (err, result, fields) => {
                    resolve(result);
                    console.log("Profile DB READ OK!")
                });
                connection.release();
            });
        } catch(err) {
            console.log("err 내용은", err)
        }
    })
}

modelExports.putProfile = () => {
    return new Promise((resolve, reject) => {
        let name = controllers.name;
        let profile = controllers.profile;
        let favorite = controllers.favorite;

        const sqlUpdate = "UPDATE mypage_profile SET profile = ?, favorite = ? WHERE name = ?;";
        try{
            con.getConnection((err,connection) => {
                connection.query(sqlUpdate, [profile, favorite ,name], (err, result, fields) => {
                    resolve(result);
                    console.log("Profile DB READ OK!")
                });
                connection.release();
            })
        } catch(err) {
            console.log("err 내용은", err)
        }
    })
}
