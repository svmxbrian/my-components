import React from 'react'
import './AppLayout.scss'
import RegionSidebar from 'components/RegionSidebar'
import RegionContent from 'components/RegionContent'
import Layout from 'components/Layout'

export default class AppLayout extends React.PureComponent {
  render() {
    return (
      <div className="column-layout">
        <div className="top-border" />
        <div className="header" />
        <div className="line" />
        <Layout>
          <RegionSidebar isOpen={false}>
            <input type="text" defaultValue="hello" />
          </RegionSidebar>
          <RegionContent>This is some content</RegionContent>
        </Layout>
      </div>
    )
  }
}
