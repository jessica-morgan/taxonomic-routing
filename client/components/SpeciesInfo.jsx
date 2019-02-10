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
            Kingdom: <Link to=''>{selectedSpecies[0].kingdom}</Link>
            <br/>
            Phylum: <Link to=''>{selectedSpecies[0].phylum}</Link>
            <br/>
            Class: <Link to=''>{selectedSpecies[0].class}</Link>
            <br/>
            Order: <Link to=''>{selectedSpecies[0].order}</Link>
            <br/>
            Family: <Link to=''>{selectedSpecies[0].family}</Link>
            <br/>
            Genus: <Link to=''>{selectedSpecies[0].genus}</Link>
            </ul>
            </div>
        </div>
    )
}

export default SpeciesInfo