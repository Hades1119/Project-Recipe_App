import React, { useState } from "react";

function RecipeCreate({ createRecipe, recipes }) {
  const initialState = {
    name: "",
    cuisine: "",
    url: "",
    ingredients: "",
    preparation: "",
  }


  const [formData, setFormData] = useState(initialState)

  const handleChanges = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    })
  }

  const handelSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData)
    setFormData(initialState)
  }
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  return (
    <form name="create" onSubmit={handelSubmit}>
      <table>
        <tbody>
          <tr>
          <td>
                <input id="name" name="name" type="text" value={formData.name} onChange={handleChanges}/>
            </td>
          <td>
                <input id="cuisine" name="cuisine" type="text" value={formData.cuisine} onChange={handleChanges}/>
            </td>
            <td>
                <input id="url" name="url" type="text" value={formData.url} onChange={handleChanges}/>
            </td>
            <td>
                <textarea id="ingredients" name="ingredients" value={formData.ingredients} onChange={handleChanges}></textarea>
            </td>
            <td>
                <textarea id="preparation" name="preparation" value={formData.preparation} onChange={handleChanges}></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
