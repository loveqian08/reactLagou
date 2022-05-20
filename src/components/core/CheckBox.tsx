import React, { useEffect, useState, FC } from 'react';
import { List, Typography, Checkbox as AntdCheckbox, } from 'antd';
import { useDispatch } from 'react-redux';
import { getCategory } from '../../store/actions/category.actions';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/reducers';
import { Category } from '../../store/models/category';
import { CategoryState } from '../../store/reducers/category.reducer';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import "./common.scss"
const { Title } = Typography;
const categories = [{name: 'Node'}, {name: 'Angular'}];

interface Props {
    handleFilter: (arg: string[]) => void

}
const CheckBox:FC<Props> = (Props) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getCategory())
    }, [])
    const category = useSelector<AppState, CategoryState>(state => state.category);
    const onchange = (checkedValue: CheckboxValueType[]) => {
        console.log(checkedValue)
        const handleFilter = Props.handleFilter;
        handleFilter(checkedValue as string[])
    }

    return <>
        <Title level={4} className='checkboxFilter'>按照分类筛选</Title>
        <AntdCheckbox.Group 
            className='checkboxFilter'
            options={category.category.result.map(item => ({label: item.name, value: item._id}))}
            onChange={onchange}>

        </AntdCheckbox.Group>
        {/* <List dataSource={categories} renderItem={item => (
            <List.Item>
                <AntdCheckbox>{item.name}</AntdCheckbox>
            </List.Item>
        )}></List> */}
    </>
}
export default CheckBox;