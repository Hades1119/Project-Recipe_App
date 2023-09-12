import React from "react";

function RecipeView({ recipe, index, deleteRecipe}) {
    const {name, cuisine, photo, ingredients, preparation} = recipe;
    return (
        <tr key={index}>
            <td><p>{name}</p></td>
            <td><p>{cuisine}</p></td>
            <td><img src={photo}/></td>
            <td><p>{ingredients}</p></td>
            <td><p>{preparation}</p></td>
        </tr>
        
    )
}

export default RecipeView;