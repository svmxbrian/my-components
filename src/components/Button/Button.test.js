import React from 'react'
import Button from './Button'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('Button', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Button text="" onClick={() => {}} />)
    expect(wrapper).toBeDefined()
  })

  it('renders correctly', () => {
    const tree = renderer.create(<Button text="" onClick={() => {}} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  const mockFn = jest.fn()
  const text = 'text here'
  const wrapper = shallow(<Button text={text} onClick={mockFn} />)

  it('should call onClick function when it is clicked', () => {
    wrapper.find('input').simulate('click')
    expect(mockFn.mock.calls.length).toBe(1)
  })

  it('should show text on button', () => {
    // Get value by using wrapper props value
    expect(wrapper.find('input').props().value).toEqual(text)
  })
})
