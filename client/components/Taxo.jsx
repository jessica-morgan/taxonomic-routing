import React from 'react'
import ranksData from '../../data/ranks'
import SpeciesListing from './SpeciesListing'
import { Link } from 'react-router-dom'

const Taxo = (props) => {
  const selectedRank = props.match.params.rank
  const name = props.match.params.name
  const selectedObj = ranksData[selectedRank].find(function (obj) {
    return name === obj.name
  })
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {selectedObj.description}
      </p>
      <br/>
      <Link to={`/rank/${selectedRank}/${name}/species`}>Show Species</Link>
    </div>
  )
}

export default Taxo
