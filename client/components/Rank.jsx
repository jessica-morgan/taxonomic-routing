import React from 'react'
import ranksData from '../../data/ranks'
// import species from '../../data/species'
import { Link } from 'react-router-dom'

const Rank = (props) => {
  const selectedRank = props.match.params.rank
  const style = {
    textTransform: 'capitalize'
  }
  return (
    <div>
      <h1 style={style}>{selectedRank}</h1>
      <ul>
        {ranksData[selectedRank].map((obj) => {
          return (
            <li key={obj.name}><Link to={`/rank/${selectedRank}/${obj.name}`}>{obj.name}</Link></li>
            
          )
        })}
        </ul>
    </div>
  )
}

export default Rank
