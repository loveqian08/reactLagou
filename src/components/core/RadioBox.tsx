import React , { FC } from 'react';
import { List, Typography, Radio} from 'antd';
const { Title } = Typography;
const categories = [{price: '50-100', id: 1, array: [50, 100]}, {price: '101-150', id: 2, array: [100, 150]}, {price: '151-200', id: 3, array: [151, 200]}];

interface Props {
    handleFilter: (arg: number[]) => void
}
const RadioBox:FC<Props> = ({ handleFilter }) => {
    const onChange = (event: any) => {
        handleFilter(event.target.value as number[])
    }
    return <>
        <Title level={4}>按照价格筛选</Title>
        <Radio.Group>
            <List dataSource={categories} renderItem={item => (
                <List.Item>
                    <Radio value={item.array} onChange={onChange}>{item.price}</Radio>
                </List.Item>
            )}></List>
        </Radio.Group>
    </>
}
export default RadioBox;