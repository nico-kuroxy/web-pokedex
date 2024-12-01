/**********************************************************************************************************************/
//   author: ne@solarcleano.com
//   brief: This file defines the TypeCard react component.
//          It is used to render the types of the pokemon.
//   copyright: © 2024 Solarcleano. All rights reserved.
/**********************************************************************************************************************/

import { pokemonTypeColors } from "../utils"

export default function TypeCard(props) {
    const { type } = props
    return (
        <div className="type-tile" style={{ color: pokemonTypeColors?.[type]?.color, background: pokemonTypeColors?.[type]?.background }}>
            <p>{type}</p>
        </div>
    )
}
