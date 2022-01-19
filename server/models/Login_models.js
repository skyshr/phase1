// Test용 models.js => 나중에 각자 models.js 따로 관리 할 예정
// 밑에 sql은 권원현 server/db 세팅 test용으로 작성한 것임 -> sql 구문은 작성하기 나름이기 때문에 본인이 원하는 구문 쓰면 됨

const con = require("../utils/db");
const modelExports = (module.exports = {});
const controllers = require("../controllers/controllers");

modelExports.ReactTest = () => {
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM users where no='1';"; // 참고) test용이기 때문에 mysql에 dummy data 입력했고 그걸 호출하는 raw한 sql문임
        con.getConnection((err, connection) => {
            try {
                if(err) throw err;
                console.log("Connection Success");

                connection.query(sql, (err, result, fields) => {
                    if(err) {
                        console.log("SELECT Error");
                    } else {
                        if(result.length === 0) {
                            console.error("DB response NOT Found");
                        } else {
                            resolve(result);
                            console.log("Read data OK");
                        }
                    }
                });
                connection.release();
            } catch(err) {
                console.error("pool Test Error");
            };
        });
    });
};

// 로그인 GET
modelExports.getLoginDB = () => {
    console.log("login get 시도")
}

// 로그인 POST
modelExports.postLoginDB = () => {
    return new Promise ((resolve, reject) => {
        // controllers로부터 req.query.user_id, req.query.user_pw를 받아옴.
        const user_id = controllers.userId
        const user_pw = controllers.userPw
        // 입력된 id 와 동일한 id 가 mysql 에 있는 지 확인
        const sql1 = 'SELECT COUNT(*) AS result FROM user_inform WHERE user_id = ?'
        con.query(sql1, user_id, (err, data) => {
            if(!err) {
                // 결과값이 1보다 작다면(동일한 id 가 없다면)
                if(data[0].result < 1) {
                    resolve({ 'msg': '입력하신 id 가 일치하지 않습니다.'})
                } else { // 동일한 id 가 있으면 비밀번호 일치 확인
                    const sql2 = `SELECT 
                                    CASE (SELECT COUNT(*) FROM user_inform WHERE user_id = ? AND user_pw = ?)
                                        WHEN '0' THEN NULL
                                        ELSE (SELECT user_id FROM user_inform WHERE user_id = ? AND user_pw = ?)
                                    END AS userId
                                    , CASE (SELECT COUNT(*) FROM user_inform WHERE user_id = ? AND user_pw = ?)
                                        WHEN '0' THEN NULL
                                        ELSE (SELECT user_pw FROM user_inform WHERE user_id = ? AND user_pw = ?)
                                    END AS userPw`;
                    // sql 란에 필요한 parameter 값을 순서대로 기재
                    const params = [user_id, user_pw, user_id, user_pw, user_id, user_pw, user_id, user_pw]
                    con.query(sql2, params, (err, data) => {
                        if(!err) {
                            resolve(data[0])
                        } else {
                            resolve(err)
                        }
                    })
                }
            } else {
                resolve('에러 : ', err)
            }
        })

    });
}

// 회원가입 GET
modelExports.getRegisterDB = () => {
    console.log("register get 시도")
}

// 회언가입 POST
modelExports.postRegisterDB = () => {
    return new Promise ((resolve, reject) => {
        // controllers로부터 req.query.user_id, req.query.user_pw를 받아옴.
        const user_id = controllers.userId
        const user_pw = controllers.userPw
        const user_name = controllers.userName
        const user_email = controllers.userEmail

        console.log('유저 아이디', user_id)
        console.log('유저 네임', user_name)
        console.log('유저 이메일', user_email)
        console.log('유저 비밀번호', user_pw)

        // 테이블에 데이터 삽입하는 로직
        // 데이터 삽입 sql문
        const registerSql = "INSERT INTO user_inform (user_id, user_name, user_email, user_pw) values(?, ?, ?, ?)"
        // 넣어야 할 데이터 묶음
        const dataParams = [user_id, user_name, user_email, user_pw]
        // 테이블에 삽입
        con.query(registerSql, dataParams,
            function (err, rows, fields) {
                if(err) {
                    resolve(console.log("DB 저장 실패 : ", err))
                } else {
                    resolve(console.log("DB 저장 성공"))
                }
            }
        )
    })
}








