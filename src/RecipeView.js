import React from "react";
import "./App.css"

function RecipeView({ recipe, index, deleteRecipe}) {
    const {name, cuisine, photo, ingredients, preparation} = recipe;
    return (
        <tr key={index}>
            <td><p>{name}</p></td>
            <td><p>{cuisine}</p></td>
            <td><img src={photo}/></td>
            <td className="content_td"><p>{ingredients}</p></td>
            <td className="content_td"><p>{preparation}</p></td>
            <td><button name="delete" onClick={() => deleteRecipe(index)}>Delete</button></td>
        </tr>
        
    )
}

export default RecipeView;