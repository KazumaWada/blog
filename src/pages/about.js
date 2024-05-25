import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div>
      <p><a href="https://github.com/KazumaWada" target="_blank">GitHub</a></p>
      <p><a href="https://instagram.com/imnotkatsuma" target="_blank">Instagram</a></p>
      <p>kazumawada.aus@gmail.com</p>
      
      </div>
      
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage
