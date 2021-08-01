import * as React from 'react'
import { container } from './layout.module.scss'
import { Seo } from '../components/seo'

const Layout = ({ pageTitle, children, title, description }) => {
  return (
    <div>
      <Seo title={title} description={description}/>
    <main className={container}>
      <h1>{pageTitle}</h1>
      {children}
    </main>
    </div>
  )
}

export default Layout