import React from 'react'
import { shallow } from 'enzyme'
import RegionSidebar, { openClass, closedClass } from './RegionSidebar'

describe('RegionSidebar', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <RegionSidebar>
        <div />
      </RegionSidebar>
    )
    expect(wrapper).toBeDefined()
  })

  it(`should default to having closed sidebar`, () => {
    const sidebar = shallow(
      <RegionSidebar>
        <div />
      </RegionSidebar>
    )
    expect(sidebar.find(`.${closedClass}`).length).toEqual(1)
    expect(sidebar.find(`.${openClass}`).length).toEqual(0)
  })

  it(`should have ${closedClass} class appended at closed state`, () => {
    const sidebar = shallow(
      <RegionSidebar isOpen={false}>
        <div />
      </RegionSidebar>
    )
    expect(sidebar.find(`.${closedClass}`).length).toEqual(1)
    expect(sidebar.find(`.${openClass}`).length).toEqual(0)
  })

  it(`should have ${openClass} class appended at open state`, () => {
    const sidebar = shallow(
      <RegionSidebar isOpen={true}>
        <div />
      </RegionSidebar>
    )
    expect(sidebar.find(`.${closedClass}`).length).toEqual(0)
    expect(sidebar.find(`.${openClass}`).length).toEqual(1)
  })

  it(`should change classes at state change for isOpen`, () => {
    const sidebar = shallow(
      <RegionSidebar isOpen={false}>
        <div />
      </RegionSidebar>
    )
    expect(sidebar.find(`.${closedClass}`).length).toEqual(1)
    expect(sidebar.find(`.${openClass}`).length).toEqual(0)

    sidebar.setState({
      isOpen: true
    })

    expect(sidebar.find(`.${closedClass}`).length).toEqual(0)
    expect(sidebar.find(`.${openClass}`).length).toEqual(1)

    sidebar.setState({
      isOpen: false
    })

    expect(sidebar.find(`.${closedClass}`).length).toEqual(1)
    expect(sidebar.find(`.${openClass}`).length).toEqual(0)
  })

  it('should render its children inside itself', () => {
    const html = '<div><div>This is a test</div></div>'
    const sidebar = shallow(
      <RegionSidebar isOpen={false}>
        <div>
          <div>This is a test</div>
        </div>
      </RegionSidebar>
    )
    expect(sidebar.html()).toContain(html)
  })
})
