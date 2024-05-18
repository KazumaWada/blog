import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
       <ul>
      {
        //map: 配列内の要素に提供された関数をそれぞれに実行して新しい配列を生成する。
        //つまり、allFile内の配列要素のnameのみを出力する新しい配列を呼び出している
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
  `

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage