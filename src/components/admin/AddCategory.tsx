import { Button, Form, Input } from 'antd';
import Layout from '../core/Layout';

const AddCategory = () => {
    const onFinish = (value: string) => {
        
    }
    return (                  
        <Layout title="添加分类" subTitle="">
            <Form  onFinish={onFinish}>
                <Form.Item name="name" label="分类名">
                    <Input></Input>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">添加分类</Button>
                </Form.Item>
            </Form>
        </Layout>
    )
}
export default AddCategory;