import React from 'react'
import Input from './Input'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('Input', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Input />)
    expect(wrapper).toBeDefined()
  })

  it('renders correctly', () => {
    const tree = renderer.create(<Input />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should have value inside if passed in', () => {
    const value = 'TESTING VALUE'
    const input = shallow(<Input value={value} />)

    expect(input.find('input').props().value).toEqual(value)
  })

  it('should change value when the <value> key in state is changed', () => {
    const value = 'TESTING VALUE'
    const input = shallow(<Input value="" />)

    input.setState({
      value
    })

    expect(input.find('input').props().value).toEqual(value)
  })

  it('should change value when onchange on textfield', () => {
    const input = shallow(<Input value="" />)
    const value = 'TESTING VALUE'

    const event = {
      target: {
        value: value
      }
    }
    // Simulate onChange event
    input.simulate('change', event)

    expect(input.find('input').props().value).toEqual(value)
  })
})
