import { Menu,MenuProps  } from 'antd';
import { RouterState } from 'connected-react-router';
// import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from '../../store/reducers';
import { useLocation } from 'react-router'
import { useState } from 'react';
import { isAuth } from '../helpers/auth';
import { Jwt } from '../../store/models/auth';




const Navigation = () => {

  // function setActive (currentPath:string, path:string):string {
  //   console.log("打印路由2", currentPath, path) 
  //   return currentPath == path ? 'ant-menu-item-selected' : ''
  // }
  
  const location = useLocation()
  let [activeKey, setKey] = useState([location.pathname]);
  // console.log(location.pathname)

  const onClick: MenuProps['onClick'] = e => {
    // console.log('click ', e);
    activeKey[0] = e.key;
    // console.log("打印路由", activeKey) 
    setKey(activeKey);
  };
  
  function getDashboarUrl () {
    let url = "/user/dashboard";
    if ( isAuth() ) {
      const {
        user: { role }
      } = isAuth() as  Jwt;
      if (role === 1) {
        url = '/admin/dashboard'
      }
      return url;
    }
  }

    // const router = useSelector<AppState, RouterState>(state => {
    //   console.error("打印store" ,state)
    //   return  state.router
    // });
    // const pathName = router.location.pathname;
    // const isHome = setActive(activeKey, '/');
    // const isShop = setActive(activeKey, '/shop');
    
      return (
        <Menu mode='horizontal' selectable={false} defaultSelectedKeys={activeKey}>
          <Menu.Item key={"/"}  onClick={(e) =>onClick(e)}>
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item key={"/shop"}   onClick={(e) =>onClick(e)}>
            <Link to="/shop">商城</Link>
          </Menu.Item>
          <Menu.Item key={"/signin"}  onClick={(e) =>onClick(e)}>
            <Link to="/signin">登录</Link>
          </Menu.Item>
          <Menu.Item key={"/signup"}   onClick={(e) =>onClick(e)}>
            <Link to="/signup">注册</Link>
          </Menu.Item>
          { isAuth() && (<Menu.Item key={"/admin/dashboard" || "/admin/dashboard"}   onClick={(e) =>onClick(e)}>
            <Link to="/admin/dashboard">dashboard</Link>
          </Menu.Item>) }
        </Menu>
      );
      // return <Menu items={arr} key="1" />;
}

export default Navigation;