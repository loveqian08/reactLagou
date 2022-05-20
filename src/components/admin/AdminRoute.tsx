// 受保护的路由 登录了才能看
import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { Jwt } from '../../store/models/auth';
import { isAuth } from '../helpers/auth';
interface PrivateRouteProps extends RouteProps {
    component: React.ComponentType<any>
}   
const AdminRoute: FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => {
            let auth = isAuth();
            // 测试数据
            auth = {
                token: 'string',
                user: {
                    role: 1,
                    _id: 'ww',
                    name: 'www',
                    email: ''
                }
            }
           
            if (auth) {
                let {user : {role}} = auth as Jwt;
                if (role === 1) {
                    return <Component {...props}/>
                }
            }
            return <Redirect to="/signin"/>
        }}>

        </Route>
    )
}

export default AdminRoute;