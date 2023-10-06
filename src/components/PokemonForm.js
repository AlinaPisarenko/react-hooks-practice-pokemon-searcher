import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ handleAddPokemon }) {
  const [formData, setFormData] = useState({
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  })

  // console.log(formData)

  // function that captures user's input 
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    // creating new object to post it it db
    const newPokemon = {
      name: formData.name,
      hp: parseInt(formData.hp),
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl
      }
    }

    // calling function that handles state update and fetch
    handleAddPokemon(newPokemon)

    // resetting the form inputs
    setFormData({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" 
            onChange={handleChange}
            value={formData.name}
          />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" 
            onChange={handleChange}
            value={formData.hp}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
            value={formData.frontUrl}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
            value={formData.backUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
