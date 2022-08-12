import React from "react"
import '../styles/components/Layout.scss'

export const Layout: React.FC<any> = ({ children }) => {
  return(
    <main className="layout">
      {children}
    </main>
  )
  
}