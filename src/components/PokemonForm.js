import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const defaultFormData = {
   name: "",
      hp: 0,
      sprites: {
        front: "",
        back: ""
      }
}

function PokemonForm({ handleAddPokemon }) {
  const [form, setForm] = useState(defaultFormData)

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSpriteChange = (e) => {
    const temp = {...form}
    temp.sprites[e.target.name] = e.target.value
    setForm(temp)

    //One line solution
    // setForm({ ...form, sprites: { ...form.sprites, [e.target.name]: e.target.value } });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddPokemon(form)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid 
            label="Name" 
            placeholder="Name" 
            name="name" 
            value={form.name}
            onChange={handleChange}
            />
          <Form.Input 
            fluid 
            label="hp" 
            placeholder="hp" 
            name="hp" 
            value={form.hp}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            value={form.sprites.front}
            onChange={handleSpriteChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value={form.sprites.back}
            onChange={handleSpriteChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
