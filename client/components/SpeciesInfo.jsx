import React from 'react'
import speciesData from '../../data/species'
import { Link } from 'react-router-dom'

const SpeciesInfo = (props) => {
    const speciesId = Number(props.match.params.id)
    const selectedSpecies = speciesData.filter(item =>
         item.id === speciesId
    )
    return (  
        <div>
            <div style={{marginBottom: '20px'}}>
            {selectedSpecies[0].name}
            </div>
            <div style={{marginBottom: '20px'}}>
            {selectedSpecies[0].description}
            </div>
            <div style={{marginBottom: '20px'}}>
            <img src={selectedSpecies[0].photo}></img>
            </div>
            <div>
            <ul>
            Kingdom: <Link to={`/rank/kingdoms/${selectedSpecies[0].kingdom}`}>{selectedSpecies[0].kingdom}</Link>
            <br/>
            Phylum: <Link to={`/rank/phyla/${selectedSpecies[0].phylum}`}>{selectedSpecies[0].phylum}</Link>
            <br/>
            Class: <Link to={`/rank/classes/${selectedSpecies[0].class}`}>{selectedSpecies[0].class}</Link>
            <br/>
            Order: <Link to={`/rank/orders/${selectedSpecies[0].order}`}>{selectedSpecies[0].order}</Link>
            <br/>
            Family: <Link to={`/rank/families/${selectedSpecies[0].family}`}>{selectedSpecies[0].family}</Link>
            <br/>
            Genus: <Link to={`/rank/genera/${selectedSpecies[0].genus}`}>{selectedSpecies[0].genus}</Link>
            </ul>
            </div>
        </div>
    )
}

export default SpeciesInfo