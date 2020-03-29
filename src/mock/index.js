import Mock from 'mockjs'
import QS from 'qs'
// const data={
//     token:'123',
//     role:'A',
// }
Mock.mock('/login', 'post', (data) => {
    const { username, password } = QS.parse(data.body)
    console.log(username, password)
    if (username == "123" && password == "123") {
        return {
            status: 1,
            user: {
                token: 123456,
                role: 'B'
            },
            msg: '登录成功'
        }
    } else if (username == "1" && password == "1") {
        return {
            status: 1,
            user: {
                token: 123456,
                role: 'A'
            },
            msg: '登录成功'
        }
    } 
    else if (username == "12" && password == "12") {
        return {
            status: 1,
            user: {
                token: 123456,
                role: 'C'
            },
            msg: '登录成功'
        }
    } 
    else {
        return {
            status: 0,
            msg: '账号密码错误'
        }
    }
})