import { Button, Form, Input, Result } from "antd";
import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signin, SigninPayload } from "../../store/actions/auth_actions";
import { Jwt } from "../../store/models/auth";
import { AppState } from "../../store/reducers";
import { AuthState } from "../../store/reducers/auth_reducer";
import { isAuth } from "../helpers/auth";
import Layout from './Layout';
// interface Props {
//     children: React.ReactNode
// }
const Signin = () => {
    // 获取dispatch
    const dispath = useDispatch();


    const onFinish = (val: SigninPayload) => {
        console.log(val)
        dispath(signin(val));

    }
    // 获取登录结果
    const auth =  useSelector<AppState, AuthState>(state => state.auth);
    // 登录失败 显示错误信息
    const showError = () => {
        if (auth.signin.loaded && !auth.signin.success) {
            return  <Result
            status="warning"
            title="登录失败"
            subTitle={auth.signup.message}/>
        }
    }
    // 登录失败 显示错误信息
    const redirectToDashboard = () => {
        const auth = isAuth();
        if (auth) {
            // 断言他就是一个jwt interface 防止报错
            const { user: { role} } = auth as Jwt;
            if (role == 0) {
                // 注册用户
                return <Redirect to="/user/dashboard" />
            } else {
                // 管理员
                return <Redirect to="/admin/dashboard" />
            }
        }
    }

    return (
        <Layout title="登录" subTitle="">
            { showError() }
            { redirectToDashboard() }
             <Form  onFinish={onFinish}>
                <Form.Item name="email" label="邮箱">
                    <Input></Input>
                </Form.Item>
                <Form.Item name="password" label="密码">
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">登录</Button>
                </Form.Item>
                </Form>
        </Layout>
    )
}
export default Signin;