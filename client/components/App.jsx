import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'

const App = () => {
  return (
    <div>
      <h1>Navigating the taxonomic ranks</h1>
      <section>
        <nav>
          <Nav />
        </nav>
        <article>
          <Home />
        </article>
      </section>
    </div>
  )
}

export default App
