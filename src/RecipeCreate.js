import React, { useState } from "react";
import "./App.css"


function RecipeCreate({ createRecipe }) {
  const initialState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChanges = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData(initialState);
  };
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  return (
    <form name="create" onSubmit={handelSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChanges}
                placeholder="Name"
              />
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                value={formData.cuisine}
                onChange={handleChanges}
                placeholder="Cuisine"
              />
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                type="text"
                value={formData.photo}
                onChange={handleChanges}
                placeholder="URL"
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChanges}
                placeholder="Ingredients"
              ></textarea>
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                value={formData.preparation}
                onChange={handleChanges}
                placeholder="Preparation"
              ></textarea>
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
