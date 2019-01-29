import React from 'react'
import ranks from '../../data/ranks'

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
          return <li key={rank} style={style}>{rank}</li>
        })}
      </ul>
    </div>
  )
}

export default Nav
