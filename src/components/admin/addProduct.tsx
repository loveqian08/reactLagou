import { Button, Form, Input, Select, Upload } from "antd";
import Layout from "../core/Layout";
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCategory } from "../../store/actions/category.actions";
import { useSelector } from "react-redux";
import { AppState } from "../../store/reducers";
import { CategoryState } from "../../store/reducers/category.reducer";
const AddProduct = () => {
    // 获取分类列表只有一上来才会获取一次
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategory())
    }, [])
    const category = useSelector<AppState, CategoryState>(state => state.category);


    return <Layout title="添加商品" subTitle="">
        <Form initialValues={{ category2:'string' }}>
            <Form.Item>
                <Upload>
                    <Button icon={<UploadOutlined/>}>上传</Button>
                </Upload>
            </Form.Item>
            <Form.Item name="name" label="商品名称">
                <Input />
            </Form.Item>
            <Form.Item name="description" label="商品描述">
                <Input />
            </Form.Item>
            <Form.Item name="price" label="商品价格">
                <Input />
            </Form.Item>
            <Form.Item name="category2" label="所属分类">
                <Select>
                     <Select.Option value="">请选择分类</Select.Option>
                     {/* <Select.Option value="1">测试分类</Select.Option> */}
                     {
                         category.category.result.map(item => (
                            <Select.Option value={item._id} key={item._id}>{item.name}</Select.Option>
                         ))
                     }
                </Select>
            </Form.Item>
            <Form.Item name="quantity" label="商品数量">
                <Input />
            </Form.Item>
            <Form.Item name="shipping" label="是否需要运输">
                <Input />
            </Form.Item>
            <Form.Item name="" label="">
                <Button type="primary" htmlType="submit">添加商品</Button>
            </Form.Item>
        </Form>
    </Layout>
}
export default AddProduct;