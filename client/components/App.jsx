import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import Rank from './Rank'

const App = () => {
  return (
    <div>
      <h1>Navigating the taxonomic ranks</h1>
      <section>
        <nav>
          <Nav />
        </nav>
        <article>
          <Route exact path="/" component={Home} />
          <Route path="/list/:rank" component={Rank} />
        </article>
      </section>
    </div>
  )
}

export default App
