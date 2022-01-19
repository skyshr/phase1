const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");
const util = require("util")
const con = require("../utils/db");

// Use Board 미들웨어 구분 Start
const multer = require('multer');
const { v4: uuid } = require('uuid'); // upload 파일명 고유 아이디. = 1
const mime = require('mime-types'); // upload 파일 타입 가져오기.  = 1
const fs = require('fs');
// Use Board  미들웨어 구분 End

// Contents
router.get('/contents', controllers.contents_Article_List);
router.post('/contents/articles/comments', controllers.contents_Article_ReadComment);
router.post('/contents/articles/addcomments', controllers.contents_Article_AddComment);
router.delete('/contents/articles/comments/delete', controllers.contents_Article_DeleteComment);

// 로그인 라우터
router.get('/login', controllers.getLogin)
router.post('/onLogin', controllers.postLogin)

// 회원가입 라우터
router.get('/register', controllers.getRegister)
router.post('/onRegister', controllers.postRegister)

// 재원 mypage router
router.get("/api/get", controllers.getTodo_Controllers);
router.post("/api/insert", controllers.postTodo_Controllers);
router.delete("/api/delete/:title", controllers.deleteTodo_Controllers);

router.get("/api/login", controllers.getLogin_Controllers);
router.get("/api/test/get", controllers.getProfile_Controllers);
router.put("/api/test/update", controllers.putProfile_Controllers);


// Use Board 이미지 업로드용 폴더 체크 없으면 생성 Start
try {
    fs.readdirSync('public/upload');
} catch (error) {
    console.error('upload 폴더 생성.');
    fs.mkdirSync('public/upload');
}
// Use Board 이미지 업로드용 폴더 체크 없으면 생성 End

// Use Board 이미지 업로드 변수 생성 (경로.형식.네이밍) Start
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
        done(null, 'public/upload');
        },
        filename(req, file, done) {
        done(null, `${uuid()}.${mime.extension(file.mimetype)}`);
        },
    })
});
// Use Board 이미지 업로드 변수 생성 (경로.형식.네이밍) End

// Board
router.get('/board/get', controllers.board_List_Controllers);
router.get('/board/detail/:id', controllers.board_Detail_Controllers);
router.post('/board/Insert', upload.single('image'), controllers.board_Insert_Controllers);
router.post('/board/ImageUpload', upload.single('image'), controllers.board_Upload_Controllers);
router.delete('/board/delete/:id', controllers.board_Delete_Controllers);

module.exports = router;