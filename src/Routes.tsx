// import React from "react";
import Home from '../src/components/core/Home';
import Shop from '../src/components/core/Shop';
// import { HashRouter, Switch , Route } from 'react-router-dom';
import { HashRouter, Switch , Route, withRouter } from 'react-router-dom';
import Signin from './components/core/Signin';
import Signup from './components/core/Signup';
import Dashboard from './components/admin/Dashborad';
import AdminDashboard from './components/admin/AdminDashboard';
import PrivateRoute from './components/admin/PrivateRoute';
import AdminRoute from './components/admin/AdminRoute';
import AddCategory from './components/admin/AddCategory';
import AddProduct from './components/admin/addProduct';
import ProductDetail from './components/core/ProductDetail';
const Routes = () => {
    return <HashRouter>
        <Switch >
           <Route path="/shop" component={Shop} exact></Route>
           <Route path="/"     component={Home} exact></Route>
           <Route path="/signin" component={Signin} exact></Route>
           <Route path="/signup"     component={Signup} exact></Route>
           {/* 普通用户 */}
           <PrivateRoute path="/user/dashboard"     component={Dashboard} exact></PrivateRoute>
            {/* 管理员用户 */}
           <AdminRoute  path="/admin/dashboard"     component={AdminDashboard} exact></AdminRoute>
           <AdminRoute  path="/create/category"     component={AddCategory} exact></AdminRoute>
           <AdminRoute  path="/create/addProduct"     component={AddProduct} exact></AdminRoute>
           {/* 商品详情 */}
           <Route path="/product/:productId" component={ProductDetail}></Route>
        </Switch >
    </HashRouter>
    
}

export default Routes;