import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const WorkPage = () => {
    return (
      <Layout pageTitle="Work">
    <div>

        
        <div>
          <h3>text snippet service (<a href="https://github.com/KazumaWada/text_snippet_sharing" target="_blank">github</a>) </h3>
          <p>This is an online code and text snippet sharing service where users can share  code snippets. This platform requires no user account, making it easy to share your code. after upload your snippets, this reurn unique URL to share with your friend.</p>
        </div>

        <div>
          <h3>file directory system (<a href="https://github.com/KazumaWada/fileDirectorySystem" target="_blank">github</a>) </h3>
          <p>basic file and directory operations on the command line.</p>
        </div>

        <div>
          <h3>ベルリンなう (<a href="https://github.com/KazumaWada/myapp" target="_blank">github</a>) </h3>
          <p>basic CRUD app written by Ruby on Rails</p>
        </div>

    </div>
      </Layout>
    )
  }
  
  export const Head = () => <Seo title="Work" />
  
  export default WorkPage