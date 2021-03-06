import { Col, Menu, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../core/Layout';
import {
    ShoppingCartOutlined,
    UserOutlined,
    OrderedListOutlined
} from "@ant-design/icons";
import { Typography, Descriptions  } from 'antd';
import { isAuth } from '../helpers/auth';
import { Jwt } from '../../store/models/auth';
const { Title } = Typography;

const adminLinks = ():React.ReactNode => {
    
    return <>
        <Title level={5}>管理员链接</Title>
        <Menu>
            <Menu.Item>
                <ShoppingCartOutlined/>
                <Link to="/create/category">添加分类</Link>
            </Menu.Item>
            <Menu.Item>
                <UserOutlined/>    
                <Link to="/create/addProduct">添加产品</Link>
            </Menu.Item>
            <Menu.Item>
                <OrderedListOutlined/> 
                <Link to="">订单列表</Link>
            </Menu.Item>
        </Menu>
        </>
}
const {
    user: { name, role, email }
} = isAuth() as Jwt;
const adminInfo = () => (
   <Descriptions title="管理员信息" bordered>
        <Descriptions.Item label="昵称">{name}</Descriptions.Item>
        <Descriptions.Item label="邮箱">{email}</Descriptions.Item>
        <Descriptions.Item label="角色">{role === 1 ? "超级管理员" : "管理员"}</Descriptions.Item>
    </Descriptions>
)

const Dashboard = () => {
    
    return (
        <Layout title="管理员Dashboard" subTitle="">
            {/* 第一个水平间距 第二个垂直间距 */}
            <Row gutter={[20, 20]}>
                <Col span="4"> 
                    {adminLinks()}
                 </Col>
                <Col span="20"> { adminInfo() } </Col>
            </Row>
        </Layout>
    )
}

export default Dashboard;