import React from 'react'
import Layout, { sidebarNotFirstError, wrongChildren } from './Layout'
import { shallow } from 'enzyme'

import RegionSidebar from 'components/RegionSidebar'
import RegionContent from 'components/RegionContent'

describe('Layout', () => {
  let layout
  it('renders without crashing', () => {
    const wrapper = shallow(
      <Layout>
        <RegionSidebar />
        <RegionContent />
      </Layout>
    )
    expect(wrapper).toBeDefined()
  })

  it('should throw error if more than 1 RegionSidebar child', () => {
    try {
      layout = shallow(
        <Layout>
          <RegionSidebar />
          <RegionSidebar />
        </Layout>
      )
    } catch (e) {
      var error = e
    }
    expect(error.message).toEqual(wrongChildren)

    try {
      layout = shallow(
        <Layout>
          <RegionSidebar />
          <RegionContent />
          <RegionSidebar />
        </Layout>
      )
    } catch (e) {
      error = e
    }
    expect(error.message).toEqual(wrongChildren)
  })

  it('should throw error if more than 1 RegionContent child', () => {
    try {
      layout = shallow(
        <Layout>
          <RegionSidebar />
          <RegionContent />
          <RegionContent />
        </Layout>
      )
    } catch (e) {
      var error = e
    }
    expect(error.message).toEqual(wrongChildren)

    try {
      layout = shallow(
        <Layout>
          <RegionContent />
          <RegionContent />
        </Layout>
      )
    } catch (e) {
      error = e
    }
    expect(error.message).toEqual(wrongChildren)
  })

  it(`should throw error if RegionSidebar not first child`, () => {
    try {
      layout = shallow(
        <Layout>
          <RegionContent />
          <RegionSidebar />
        </Layout>
      )
    } catch (e) {
      var error = e
    }
    expect(error.message).toEqual(sidebarNotFirstError)

    try {
      layout = shallow(
        <Layout>
          <div />
          <RegionSidebar />
        </Layout>
      )
    } catch (e) {
      error = e
    }
    expect(error.message).toEqual(wrongChildren)
  })

  it(`should throw error if layout does not have 2 children`, () => {
    try {
      layout = shallow(<Layout />)
    } catch (e) {
      var error = e
    }
    expect(error.message).toEqual(wrongChildren)

    try {
      layout = shallow(
        <Layout>
          <div />
        </Layout>
      )
    } catch (e) {
      error = e
    }
    expect(error.message).toEqual(wrongChildren)
  })

  it(`should render its children inside itself`, () => {
    let sidebar = shallow(<RegionSidebar />)
    let content = shallow(<RegionContent />)
    layout = shallow(
      <Layout>
        <RegionSidebar />
        <RegionContent />
      </Layout>
    )
    expect(layout.html()).toContain(sidebar.html() + content.html())
  })
})
