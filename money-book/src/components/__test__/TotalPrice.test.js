import React from 'react'
import {shallow} from 'enzyme'
import TotalPrice from '../TotalPrice'

const props = {
    income: 1000,
    outcome: 2000
}

describe('test TotalPrice component', ()=>{
    it('component should render correct income&&outcome number',()=>{
        //将props传入react 再依次判断对应节点对应的值
        const wrapper = shallow(<TotalPrice {...props}/>)
        expect(wrapper.find(".income span").text()*1).toEqual(1000);
        expect(wrapper.find('.outcome span').text()*1).toEqual(2000)
    })
})