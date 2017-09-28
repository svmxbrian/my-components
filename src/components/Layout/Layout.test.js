import React from 'react'
import Layout, {
  contentError,
  sidebarError,
  contentBeforeSidebarError,
  notEnoughChildrenError
} from './Layout'
import { shallow } from 'enzyme'

import RegionSidebar from 'components/RegionSidebar'
import RegionContent from 'components/RegionContent'

it('renders without crashing', () => {
  const wrapper = shallow(
    <Layout>
      <div />
      <div />
    </Layout>
  )
  expect(wrapper).toBeDefined()
})

it('should throw error if more than 1 RegionSidebar child', () => {
  try {
    var layout = shallow(
      <Layout>
        <RegionSidebar />
        <RegionSidebar />
      </Layout>
    )
  } catch (e) {
    var error = e
  }
  expect(error.message).toEqual(sidebarError)
})

it('should throw error if more than 1 RegionContent child', () => {
  try {
    var layout = shallow(
      <Layout>
        <RegionSidebar />
        <RegionContent />
        <RegionContent />
      </Layout>
    )
  } catch (e) {
    var error = e
  }
  expect(error.message).toEqual(contentError)
})

it(`should throw error if RegionContent is earlier child than RegionSidebar, if both exist`, () => {
  try {
    var layout = shallow(
      <Layout>
        <RegionContent />
        <RegionSidebar />
      </Layout>
    )
  } catch (e) {
    var error = e
  }
  expect(error.message).toEqual(contentBeforeSidebarError)
})

it(`should throw error if layout does not have at least 2 children`, () => {
  try {
    var layout = shallow(<Layout />)
  } catch (e) {
    var error = e
  }
  expect(error.message).toEqual(notEnoughChildrenError)

  try {
    var layout = shallow(
      <Layout>
        <div />
      </Layout>
    )
  } catch (e) {
    var error = e
  }
  expect(error.message).toEqual(notEnoughChildrenError)
})
