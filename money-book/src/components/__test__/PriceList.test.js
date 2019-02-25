import React from 'react'
import {shallow} from 'enzyme'
import Ionicon from "react-ionicons";
import PriceList from '../PriceList'
import { testItems, testCategories } from "../../testData";
import { flatternArr } from '../../utility'

const itemsWithCategory = testItems.map(item => {
    item.category = flatternArr(testCategories)[item.cid]
    return item
})

const props = {
	items: itemsWithCategory,
    onModifyItem: jest.fn(),//mock一个函数
    onDeleteItem: jest.fn(),
};

let wrapper;
describe("test PriceList component", ()=>{
    // 在每次执行测试用例的时候都会执行这一步
    beforeEach(() => {
        wrapper = shallow(<PriceList {...props} />)
    })
    it('should render the component to match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
    it('should render correct price items length', () => {
        //查看节点长度是否和数据长度相等
        expect(wrapper.find('.list-group-item').length).toEqual(itemsWithCategory.length)
    })
    // icon 逻辑渲染是否正确
    it('should render correct icon and price for each item', () => {
        const iconList = wrapper.find('.list-group-item').first().find(Ionicon)
        expect(iconList.length).toEqual(2)// 第一项的iconList是否等于3
        expect(iconList.first().props().icon)// 传入属性是否对应
            .toEqual(itemsWithCategory[0].category.iconName)
    })
    it('should trigger the correct function callbacks', () => {
        const firstItem = wrapper.find('.list-group-item').first()
        // simulate 模拟点击事件触发对应的方法 
        // toHaveBeenCalledWith 函数对应的参数
        firstItem.find('a').first().simulate('click', { preventDefault: () => { } })
        expect(props.onModifyItem).toHaveBeenCalledWith(itemsWithCategory[0])
        firstItem.find('a').last().simulate('click', { preventDefault: () => { } })
        expect(props.onDeleteItem).toHaveBeenCalledWith(itemsWithCategory[0])
    })



});