import React from 'react'
import { mount } from 'enzyme'
import MonthPicker from '../MonthPicker'


let props = {
    year: 2018,
    month: 8,
    onChange: jest.fn() //mock一个方法
}

let wrapper

describe("test MonthPicker component",() => {
    beforeEach(() => {
        wrapper = mount(<MonthPicker {...props}/>)
    })
    it('should render the component to match the snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
    it("render the correct year and month, show corrent dropdown status", () => {
        const text = wrapper.find('.dropdown-toggle').first().text()
        expect(text).toEqual('2018年 08月')
        expect(wrapper.find("dropdown-menu").length).toEqual(0);
        // 测试state状态isOpen是否等于false
        expect(wrapper.state('isOpen')).toEqual(false)
        expect(wrapper.state('selectedYear')).toEqual(props.year)
    });
    it('after click the button, dropdown should show, year list&month list should have the correct items', () => {
        wrapper.find('.dropdown-toggle').simulate('click')
        expect(wrapper.state('isOpen')).toEqual(true)
        expect(wrapper.find('.dropdown-menu').length).toEqual(1)
        expect(wrapper.find('.years-range .dropdown-item').length).toEqual(9)
        expect(wrapper.find('.months-range .dropdown-item').length).toEqual(12)
        expect(wrapper.find('.years-range .dropdown-item.active').text())
            .toEqual('2018 年')
        expect(wrapper.find('.months-range .dropdown-item.active').text())
            .toEqual('08 月')
        // the first year should be the current year minus 4
        expect(wrapper.find('.years-range .dropdown-item').first().text())
            .toEqual(`${props.year - 4} 年`)
        expect(wrapper.find('.months-range .dropdown-item').first().text())
            .toEqual('01 月')
    
    });
    it('click the year&month item, should trigger the right status change', () => {
        // 模拟点击 .dropdown-toggle节点
        // 再点击 .years-range .dropdown-item节点下标为0的节点
        // 期望 .years-range .dropdown-item节点下标为0的节点被添加上active类名
        // 期望 wrapper节点的 state的selectedYear值为2014

        //  模拟点击 .months-range .dropdown-item
        //  期望 state的isOpen状态为false
        //  期望 传入的props的onChange带上参数(2014,1)是否被正确调用
        wrapper.find('.dropdown-toggle').simulate('click')
        wrapper.find('.years-range .dropdown-item').first().simulate('click')
        expect(wrapper.find('.years-range .dropdown-item').first().hasClass('active'))
            .toEqual(true)
        expect(wrapper.state('selectedYear')).toEqual(2014)
        wrapper.find('.months-range .dropdown-item').first().simulate('click')
        expect(wrapper.state('isOpen')).toEqual(false)
        expect(props.onChange).toHaveBeenCalledWith(2014, 1)
    })

});
