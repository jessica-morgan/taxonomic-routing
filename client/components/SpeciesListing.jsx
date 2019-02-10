import React from 'react'
import speciesData from '../../data/species'
import { Link } from 'react-router-dom'

const Species = (props) => {
 
   const name = props.match.params.name
   
   const chosenSpecies = speciesData.filter(theSpecies => Object.values(theSpecies).includes(name))
  
  return (
    <div>
      <ul>
          {chosenSpecies.map(item => (
            <li key={item.id}>
              <Link to={`/species/${item.id}`}>
              {item.name}
              </Link>
            </li>
            ))}
      </ul>
    </div>
  )
}
  
  export default Species 
  