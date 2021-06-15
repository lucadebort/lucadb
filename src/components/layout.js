import * as React from 'react'
import { container } from './layout.module.scss'

const Layout = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <h1>{pageTitle}</h1>
      {children}
    </main>
  )
}

export default Layout