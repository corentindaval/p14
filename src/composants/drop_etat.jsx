import React from 'react'
import states from"../assets/list_etats"


function Etat() {
  
    return (
        <select>
            {
                states.map((val, key) => {
                    return (
                        <option key={key} value={val.abbreviation}>{val.name }</option>
                        )
                })
            }
        </select>

        )

}

export default Etat
