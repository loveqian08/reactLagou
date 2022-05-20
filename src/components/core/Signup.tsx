import { Button, Form, Input, Result } from "antd";
import React, { useEffect, useState }  from "react";
import { useDispatch , useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { resetSignup, signup, SignupPayload } from "../../store/actions/auth_actions";
import { AppState } from "../../store/reducers";
import { AuthState } from "../../store/reducers/auth_reducer";
import Layout from './Layout';
// interface Props {
//     children: React.ReactNode
// }
const Signup = () => {
    const [ showAble, setShow ] = useState(true);
    const dispath = useDispatch();
    const stateNew = useSelector<AppState, AuthState>(state => state.auth);
    console.error("打印", stateNew)
    // 注册表单提交
    const onFinish = (value: SignupPayload) => {
        
        dispath(signup(value))
    }

    // antd 拿到的form实例对象
    const [form] = Form.useForm();

    // 注册成功 清空表单
    useEffect(() => {
        if (stateNew.signup.loaded && stateNew.signup.success) {
            setShow(false)
            // 注册成功 清空表单
            form.resetFields();
            // showSuccess();
        } else if (stateNew.signup.loaded && !stateNew.signup.success) {
            setShow(false)
        }
    }, [stateNew]);
    // 注册成功 显示成功信息
    const showSuccess = () => {
        // console.log("你来到了成功")
        if (stateNew.signup.loaded && stateNew.signup.success) {
            return <Result
                status="success"
                title="注册成功"
                extra={[
                <Button type="primary" key="console">
                    <Link to="/signin">去登录</Link>
                </Button>
                ]}
            />
        }
    }
    // 注册失败 显示失败信息
    const showError = () => {
        if (stateNew.signup.loaded && !stateNew.signup.success) {
            return  <Result
                status="warning"
                title="注册失败"
                subTitle={stateNew.signup.message}/>
        }
    }
    // 离开页面之前 重置状态
    useEffect(() => {
        return () => {
            dispath(resetSignup())
        }
    }, [])

    return (
        <Layout title="注册" subTitle="还没有账户？注册一个吧">
            {showError()}
            {showSuccess()}
            {showAble ?   <Form  form={form} onFinish={onFinish}>
                <Form.Item name="name" label="昵称">
                    <Input></Input>
                </Form.Item>
                <Form.Item name="password" label="密码">
                    <Input></Input>
                </Form.Item>
                <Form.Item name="email" label="邮箱">
                    <Input></Input>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">注册</Button>
                </Form.Item>
            </Form>
            : ''}
            
        </Layout>
    )
}
export default Signup;