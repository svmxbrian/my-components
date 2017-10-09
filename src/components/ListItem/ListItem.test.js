import ListItem from './ListItem'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('ListItem', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ListItem />)
    expect(wrapper).toBeDefined()
  })

  it('renders correctly', () => {
    const tree = renderer.create(<ListItem />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders its children inside itself', () => {
    const child1 = '<div>Child 1</div>'
    const child2 = '<div>Child 2</div>'

    const children = [child1, child2]
    const list = shallow(
      <ListItem>
        <div>Child 1</div>
        <div>Child 2</div>
      </ListItem>
    )

    expect(list.children().length).toBe(2)

    list.children().forEach((child, index) => {
      // This checks that the child's type is a list item
      expect(child.type()).toEqual('div')
      // This checks the html inside the list item
      expect(child.html()).toEqual(children[index])
    })
  })

  it('only renders 1 list item', () => {
    const list = shallow(
      <ListItem>
        <div>Child 1</div>
        <div>Child 2</div>
      </ListItem>
    )

    expect(list.length).toBe(1)
    expect(list.type()).toEqual('li')
  })
})
