import React from 'react'
import Layout from './Layout'
import { shallow } from 'enzyme'

describe('Layout', () => {
  let layout
  it('renders without crashing', () => {
    const wrapper = shallow(<Layout />)
    expect(wrapper).toBeDefined()
  })

  it(`should render its children inside itself`, () => {
    let html = '<div><div>This is a test</div></div>'
    layout = shallow(
      <Layout>
        <div>
          <div>This is a test</div>
        </div>
      </Layout>
    )
    expect(layout.html()).toContain(html)
  })
})
