import React from 'react'
import speciesData from '../../data/species'
import { Link } from 'react-router-dom'

const Species = (props) => {
    const selectedRank = props.match.params.rank
    const name = props.match.params.name
  const selectedObject = speciesData[selectedRank].find(function (object) {
    return name === object.name
  })
  return (
    <div>
      <h1>Species</h1>
      <p>
        {selectedObject}
      </p>
    </div>
  )
}
    // const selectedSpecies = props.match.params.species
    // const name = props.match.params.name
    // const style = {
    //   textTransform: 'capitalize'
    // }
    // return (
    //   <div>
    //     <h1 style={style}>{selectedSpecies}</h1>
    //     <ul>
    //       {speciesData[selectedSpecies].map((obj) => {
    //         return (
    //           <li key={obj.name}><Link to={`/species/${selectedSpecies}/${obj.name}`}>Show species</Link></li>
    //         )
    //       })}
    //     </ul>
    //   </div>
//     )
//   }
  
  export default Species 
  