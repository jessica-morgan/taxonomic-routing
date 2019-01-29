import React from 'react'
import ranks from '../../data/ranks'
import { Link } from 'react-router-dom'

const Nav = () => {
  const rankDescriptions = Object.keys(ranks)
  const style = {
    textTransform: 'capitalize'
  }
  return (
    <div>
      <h1>Nav</h1>
      <ul>
        {rankDescriptions.map((rank) => {
          return (
            <li key={rank} style={style}>
              <Link to={`/list/${rank}`}>{rank}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Nav
