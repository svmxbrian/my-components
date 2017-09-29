import React from 'react'
import { shallow } from 'enzyme'
import RegionContent from './RegionContent'

describe('RegionContent', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<RegionContent />)
    expect(wrapper).toBeDefined()
  })

  it('renders its children inside itself', () => {
    let html = `<div><div>This is a test</div></div>`
    const content = shallow(
      <RegionContent>
        <div>
          <div>This is a test</div>
        </div>
      </RegionContent>
    )
    expect(content.html()).toContain(html)
  })
})
