const con = require("../utils/db");
const modelExports = (module.exports = {});
const controllers = require("../controllers/controllers");
// require("express");

const mysql = require('mysql');

// const con = mysql.createPool({ // 커넥트풀 밖으로 이동필요. = 0
//     host: "localhost",
//     user: "root",
//     password: "root", // 비번 변경필요. = 0
//     database: "project3_react",
//     connectionLimit : 100,
//     port: "3306"
// });

// 게시판 최초 로딩 = 1
// board_List
// app.get "/board/get"
modelExports.board_List_Models = () => {
    return new Promise((resolve, reject) => {

        const sql = "SELECT * FROM board;";

        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("board_List Load Success");

                connection.query(sql, (err, result)=>{
                    if(err) {
                        throw err
                    } else {
                        resolve(result);
                        console.log('board_List result = ' + result);
                    }    
                });
                connection.release();

            } catch (err) {
                console.error("board_List error", err);
            }
        })
    })      
};

// 게시판 디테일 페이지 = 0 (Link 사용.콘솔로그 안찍힘)
// board_Dtail
//app.get "/board/detail/:id"
modelExports.board_Detail_Models = () => {
    return new Promise((resolve, reject) => {

        const id = controllers.id;
        console.log("디테일 접속 ID = " + id);
        const sql = `SELECT * FROM board where id = ?`;

        con.getConnection((err, connection)=>{
            try {
                if(err) throw err;
                console.log("board_Dtail Load Success");

                connection.query(sql, [id], (err, result)=>{
                    if(err) {
                        throw err
                    } else {
                        resolve(result);
                        console.log('board_Detail result = ' + result);
                    }    
                });
                connection.release();

            } catch (err) {
                console.error("board_Dtail error", err);
            }
        });
    });
};

// 게시판 작성내용과 이미지 동시 업로드 = 0
// (이미지 업로드 문제로 화면 리랜더링시 게시물 표출 안될걸로 예상)
// app.post "/board/Insert"
modelExports.board_Insert_Models = () => {
    return new Promise((resolve, reject) => {

        const name = controllers.name; 
        const title = controllers.title; 
        const content = controllers.content; 
        const image = 'http://localhost:3000/upload/' + controllers.image;

        const sql = "INSERT INTO board (name, title, content, image) VALUES (?,?,?,?)";

        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("board_Insert Load Success");

                connection.query(sql, [name, title, content, image], (err, result) => {
                    if (err){
                        throw err;
                    } else {
                        resolve(result);
                        console.log('board_Insert result = ' + result);
                    }
            
                });
            } catch (err) {
                console.error("board_Insert error", err);
            }
        });
    });
};

// // 제출 버튼 사용하여 express 서버에 이미지 업로드
// // 사용 안할듯 - 게시판 추가 버튼으로 같이 돌리기. = 1
// app.post('/board/ImageUpload', upload.single('image'), (req, res) => {
//     console.log(req.file.filename);
//     res.send('ok');
// });

// app.post '/board/ImageUpload'
modelExports.board_Upload_Models = () => {
    return new Promise ((resolve, reject) => {
        
        con.getConnection ((err, connection) => {
            try {
                if (err) throw err;
                console.log("board_Upload Load Success")

                connection.query((err, result) => {
                    if (err){
                        throw err;
                    } else {
                        resolve(result);
                        console.log("board_Upload result = " + result);
                    }
                });
            } catch (err) {
                console.error("board_Upload error", err);
            }
        });
    });
};

// app.post('/board/ImageUpload', upload.single('image'), (req, res) => {
//     console.log(req.file.filename);
//     res.send('ok');
// });

modelExports.board_Delete_Models = () => {
    
    const id = controllers.id;

    return new Promise ((resolve, reject) => {

        const sql = "DELETE FROM board WHERE id = ?";

        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("board_Delete Success")
                
                    connection.query(sql, [id], (err, result) => {
                        if (err){
                            throw err;
                        } else {
                            resolve(result);
                            console.log("board_Delete result = " + result);
                        }
                    });
            } catch (err) {
                console.error("board_Delete error", err);
            }
        });
    });
};