import React from 'react'
import Button from './Button'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('Button', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Button onClick={() => {}} />)
    expect(wrapper).toBeDefined()
  })

  it('renders correctly', () => {
    const tree = renderer.create(<Button onClick={() => {}} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  const mockFn = jest.fn()
  const text = 'text here'
  const wrapper = shallow(<Button text={text} onClick={mockFn} />)

  it('should call onClick function when it is clicked', () => {
    wrapper.find('button').simulate('click')
    expect(mockFn.mock.calls.length).toBe(1)
  })

  it('renders its children inside itself', () => {
    const child1 = '<div>Child 1</div>'
    const child2 = '<div>Child 2</div>'

    const children = [child1, child2]
    const button = shallow(
      <Button onClick={() => {}}>
        <div>Child 1</div>
        <div>Child 2</div>
      </Button>
    )

    expect(button.children().length).toBe(2)

    button.children().forEach((child, index) => {
      // This checks that the child's type is a list item
      expect(child.type()).toEqual('div')
      // This checks the html inside the list item
      expect(child.html()).toEqual(children[index])
    })
  })
})
