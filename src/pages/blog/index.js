import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              {/* <Link style={{ textDecoration: 'none' } to={`/blog/${node.frontmatter.slug}`}> */}
              <Link style={{ textDecoration: 'none' }} to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
              <p style={{ fontSize: '12px', color: "gray" }}>{node.frontmatter.date}</p>
            </h2>
            {/* <p>{node.excerpt}</p> */}
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage
