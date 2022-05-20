import { applyMiddleware, createStore, compose } from 'redux';
 // routerMiddleware 监听路由状态 发生变化就dispatch
import { routerMiddleware } from 'connected-react-router';

// import rootReducer  from './reducers';
// const store = createStore(rootReducer);



// 引入createSagaMiddleware
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './reducers';
import { createHashHistory } from 'history';
import rootSage from './sagas';
// 浏览器调试工具
import { composeWithDevTools } from 'redux-devtools-extension';
export const history = createHashHistory();

const sageMiddleWare = createSagaMiddleware();
const store = createStore(
    createRootReducer(history), 
    composeWithDevTools(
        compose(
            applyMiddleware(routerMiddleware(history), sageMiddleWare)
        )
    )
)
sageMiddleWare.run(rootSage);
export default store;