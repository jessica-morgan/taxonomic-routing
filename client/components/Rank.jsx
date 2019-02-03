import React from 'react'
import ranksData from '../../data/ranks'
// import species from '../../data/species'
import SpeciesListing from './SpeciesListing'
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
        <div>
        <ul>
          <SpeciesListing />
          {/* <li key={object.name}> */}
          <Link to={`/rank/${selectedRank}/${obj.name}/species`}>Show species</Link>
          {/* </li> */}
      </ul>
      </div>
    </div>
  )
}

export default Rank
