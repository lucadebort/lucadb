import * as React from 'react'
import "../styles/styles.scss"
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="hello i'm Luca" title="Hi!" description="hi! i am a ux designer and semiotician">
      <h2>i'm a ux designer and semiotician</h2>
      <p>i help your users understand and enjoy your service. <br/>i apply semiotic theories and models to analyze, identify and solve UX pain points.</p>
    </Layout>
  )
}

export default IndexPage