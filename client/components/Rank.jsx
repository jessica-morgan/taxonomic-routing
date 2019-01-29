import React from 'react'
import ranksData from '../../data/ranks'

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
            <li key={obj.name}>{obj.name}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Rank
