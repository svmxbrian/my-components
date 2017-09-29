import React from 'react'
import { shallow, mount } from 'enzyme'
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
    const sidebar = mount(
      <RegionSidebar>
        <div />
      </RegionSidebar>
    )
    expect(sidebar.find(`.${closedClass}`).length).toEqual(1)
    expect(sidebar.find(`.${openClass}`).length).toEqual(0)
  })

  it(`should have ${closedClass} class appended at closed state`, () => {
    const sidebar = mount(
      <RegionSidebar isOpen={false}>
        <div />
      </RegionSidebar>
    )
    expect(sidebar.find(`.${closedClass}`).length).toEqual(1)
    expect(sidebar.find(`.${openClass}`).length).toEqual(0)
  })

  it(`should have ${openClass} class appended at open state`, () => {
    const sidebar = mount(
      <RegionSidebar isOpen={true}>
        <div />
      </RegionSidebar>
    )
    expect(sidebar.find(`.${closedClass}`).length).toEqual(0)
    expect(sidebar.find(`.${openClass}`).length).toEqual(1)
  })

  it(`should change classes at state change for isOpen`, () => {
    const sidebar = mount(
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
})
