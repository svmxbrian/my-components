import React from 'react'
import { shallow } from 'enzyme'
import AppLayout from './AppLayout'

it('renders without crashing', () => {
  const wrapper = shallow(<AppLayout />)
  expect(wrapper).toBeDefined()
})
