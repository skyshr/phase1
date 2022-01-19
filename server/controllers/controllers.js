const session = require("express-session");
const models = require("../models/models");

// Contents_Article List READ
exports.contents_Article_List = (req, res) => {
  models.contents.contents_Article_List().then((result) => {
    res.send({
      result: result,
    });
  });
};

// Contents_Article 댓글 READ
exports.contents_Article_ReadComment = (req, res) => {
  exports.no = req.body.no;
  models.contents.contents_Article_ReadComment().then((result) => {
    res.send({
      result: result
    })}).catch(err => console.log("컨트롤러 err", err));
};

// Contents_Article 댓글 INSERT
exports.contents_Article_AddComment = (req, res) => {
  exports.comment = req.body.text;
  exports.page_no = req.body.no;
  exports.userid = req.body.userid;
  models.contents.contents_Article_AddComment().then((result) => {
    console.log("Insert Comment Success")
  });
};

// Contents_Article 댓글 DELETE
exports.contents_Article_DeleteComment = (req, res) => {
  exports.delText = req.body.text;
  exports.delNo = req.body.no;
  models.contents.contents_Article_DeleteComment().then((result) => {
    res.send({
      result: result
    });
    console.log("Delete Comment Success")
  });
};


//=========================================

// Todo
exports.getTodo_Controllers = (req ,res) => {
    models.mypage.getTodo().then((result) => {
        console.log("결과값은?: ", result);
        console.log("타입은?: ", typeof(result));
        res.send(result);
    });
};

exports.postTodo_Controllers = (req, res) => {

    exports.title = req.body.title;
    exports.contents = req.body.contents;

    models.mypage.postTodo().then((result) => {
        res.send(result);
    });
};

exports.deleteTodo_Controllers = (req, res) => {
    exports.title = req.params.title;

    models.mypage.deleteTodo().then((result) => {
        res.send(result);
    });
};

// Profile
exports.getProfile_Controllers = (req, res) => {
    models.mypage.getProfile().then( (result) => {
        console.log("Profile : ", result);
        console.log("Type : ", typeof(result));
        res.send(result);
    });
};

exports.getLogin_Controllers = (req, res) => {
    models.mypage.getLogin().then( (result) => {
        console.log("Profile : ", result);
        console.log("Type : ", typeof(result));
        res.send(result);
    });
};

exports.putProfile_Controllers = (req, res) => {

    exports.name = req.body.name;
    exports.profile = req.body.profile;
    exports.favorite = req.body.favorite;

    models.mypage.putProfile().then( (result) => {
        console.log("Profile put : ", result);
        console.log("Profile put type: ", typeof(result));
        res.send(result);
    });
};


//========================================= 로그인, 회원가입

// 로그인 GET
exports.getLogin = (req, res) => {
    models.logreg.getLoginDB()
    // 임시로 값을 넣어 주었다.
    res.send({data: 'login get 성공'})
}

// 로그인 POST
exports.postLogin = (req, res) => {
    // 입력받은 id,pw를 Login_models에서 사용가능
    exports.userId = req.query.user_id
    exports.userPw = req.query.user_pw

    models.logreg.postLoginDB().then((result) => {
        res.send(result);
    })
}

// 회원가입 GET
exports.getRegister = (req, res) => {
    models.logreg.getRegisterDB()
    // 임시로 값을 넣어 주었다.
    res.send({data: 'register get 성공'})
}

// 회언가입 POST
exports.postRegister = (req, res) => {
    // 입력받은 id,pw를 Login_models에서 사용가능
    exports.userId = req.query.user_id
    exports.userPw = req.query.user_pw
    exports.userName = req.query.user_name
    exports.userEmail = req.query.user_email

    models.logreg.postRegisterDB().then((result) => {
        res.send(result)
    })
}

//=========================================

// Board List
exports.board_List_Controllers = (req, res) => {
  models.board.board_List_Models().then((result) => {
      res.send(result);
  });
};

// Board Detail
exports.board_Detail_Controllers = (req, res) => {

  // exports.id = req.body.id;
  exports.id = req.params.id;
  console.log("Controllers req.params.id = " + req.params.id)

  models.board.board_Detail_Models().then((result) => {
      res.send(result);
  });
};

// Board Insert
exports.board_Insert_Controllers = (req, res) => {

  exports.name = req.body.name;
  exports.title = req.body.title;
  exports.content = req.body.content;
  exports.image = req.file.filename;;

  models.board.board_Insert_Models().then((result) => {
    // res.redirect('/board');
    res.send(result);
  });
};

// Board Upload
exports.board_Upload_Controllers = (req, res) => {
  models.board.board_Upload_Models().then((result) => {
    res.send(result);
  });
};

// Borad Delete
exports.board_Delete_Controllers = (req, res) => {
  
  exports.id = req.params.id;

  models.board.board_Delete_Models().then((result) => {
    res.send(result);
  });
};
