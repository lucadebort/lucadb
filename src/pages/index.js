import * as React from 'react'
import "../styles/styles.scss"
import Layout from '../components/layout'
import ReactFullpage from '@fullpage/react-fullpage';

const IndexPage = () => {
  return (
    <Layout pageTitle="hello i'm Luca" title="Hi!" description="hi! i am a ux designer and semiotician">
      
      <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {400} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <h2>i'm a ux analyst and semiotician</h2>
            <p>i help your users understand and enjoy your service. <br/>i apply semiotic theories and models to analyze, identify and solve UX pain points.</p>
            <button onClick={() => fullpageApi.moveSectionDown()}> Click me to move down </button>
          </div>
          <div className="section">
            <p>Progetti</p>
          </div>
          <div className="section">
            <p>Section 3</p>
          </div>
          <div className="section">
            <p>Section 4</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />


    </Layout>
  )
}

export default IndexPage