import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const WorkPage = () => {
    return (
    // LayoutのpageTitle部分のみ取得している
      <Layout pageTitle="Work">
        <p>portofolio here</p>
      </Layout>
    )
  }

export const Head = () => <Seo title="About Me" />

export default WorkPage