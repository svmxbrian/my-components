import React from 'react'
import List from 'components/List'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('List', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<List />)
    expect(wrapper).toBeDefined()
  })

  it('renders correctly', () => {
    const tree = renderer.create(<List />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders its children inside itself', () => {
    const child1 = '<div>Child 1</div>'
    const child2 = '<div>Child 2</div>'

    const children = [child1, child2]
    const list = shallow(
      <List>
        <div>Child 1</div>
        <div>Child 2</div>
      </List>
    )
    list.children().forEach((child, index) => {
      // This checks that the child's type is a list item
      expect(child.type()).toEqual('div')
      // This checks the html inside the list item
      expect(child.html()).toEqual(children[index])
    })
  })
})
