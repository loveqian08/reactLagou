import {  Button, Col, Row, Space } from "antd";
import Checkbox from "./CheckBox";
import React, { ReactNode, useEffect, useState }  from "react";
import Layout from './Layout';
import RadioBox from "./RadioBox";
import { useDispatch } from "react-redux";
import { filterProduct } from "../../store/actions/product_actions";
import { useSelector } from "react-redux";
import { ProductState } from "../../store/reducers/product_reducer";
import { AppState } from "../../store/reducers";
// interface Props {
//     children: React.ReactNode
// }
const Shop = () => {
    // const filtState = useSelector(state => state.)
    const [skip, setSkip] = useState(0);
    const dispatch = useDispatch();
    const [myFilters, setMyFilter] = useState<{category: string[], price: number[]}>({category: [], price: []});
    // 当筛选条件发生变化的时候 重新设置skip
    useEffect(() => {
        setSkip(0)
    }, [myFilters])

    useEffect(() => {
        dispatch(filterProduct({filter: myFilters, skip}))
        // 当skip 发生变化的时候也要加载数据
    }, [myFilters, skip])
    const product = useSelector<AppState, ProductState>(state => state.product);
    console.error("打印商品", product)
    const filterDom = () =>( <>
        <Checkbox 
            handleFilter={(filters: string[]) => {
            setMyFilter({...myFilters, category: filters})
        }}></Checkbox>
            <Space size="middle">
            
                <RadioBox handleFilter={(filters: number[]) => {
            setMyFilter({...myFilters, price: filters})
        }}></RadioBox>
            </Space>
    </>)
    const productDom = ():React.ReactNode => (
        <Row gutter={[16, 16]}>
               {
                   product.filter.result.data.map(item => (
                    <Col span="6" key={item._id}>
                        <div>{item.name}</div>
                        <div>{item.desc}</div>
                        <div>{item.price}</div>
                        <div>{item.quantity}</div>
                    </Col>
                   ))
               }
            </Row>
        )
    const loadMoreButton = () => {
        return (
            <Row>
                <Button onClick={loadMore}>加载更多</Button>
            </Row>
        )
    }
   
    const loadMore = () => {
        setSkip(skip + 4);
    }
    return (
        <Layout title="拉勾商城" subTitle="挑选你喜欢的水平吧">
            <Row>
                <Col span="4">
                    {filterDom()}
                </Col>
                <Col span="20">
                    {productDom()}
                    {loadMoreButton()}
                </Col>
            </Row>
        </Layout>
    )
}
export default Shop;