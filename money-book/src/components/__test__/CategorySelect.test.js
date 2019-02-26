import React from 'react'
import { mount } from 'enzyme'
import CategorySelect from '../CategorySelect'
import Ionicon from 'react-ionicons'

export const categories = [
   {
    "id": "1",
    "name": "旅行",
    "type": "outcome",
    "iconName": "ios-plane",    
  },
   {
    "id": "2",
    "name": "理财",
    "type": "income",
    "iconName": "logo-yen", 
  },
  {
    "id": "3",
    "name": "理财",
    "type": "income",
    "iconName": "logo-yen", 
  }
]

let props = {
  categories,
  onSelectCategory: jest.fn()
}

let props_with_category = {
  categories,
  onSelectCategory: jest.fn(),
  selectedCategory: categories[0],
}

describe('test CategorySelect component', () => {
  it('renders with categories should render the corrent items', ()=> {
      const wrapper = mount(<CategorySelect {...props}/>)

      expect(wrapper.find('.category-item').length).toEqual(categories.length)
      expect(wrapper.find('.category-item.active').length).toEqual(0)
      const firstIcon = wrapper.find(".category-item").first().find(Ionicon)
      expect(firstIcon.length).toEqual(1)
      expect(firstIcon.props().icon).toEqual(categories[0].iconName)

  })

    


})


