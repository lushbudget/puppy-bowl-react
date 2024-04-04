import { useState } from "react";

const NewPuppyForm = ({ baseAPI, fetchPuppies }) => {
  const [name, setName] = useState([]);
  const [breed, setBreed] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [text, setText] = useState('')
  const postPuppy = async () => {
    try {
      const response = await fetch(baseAPI,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            breed,
            imageUrl
          }),
        }
      );
      const result = await response.json();
      await fetchPuppies();
      setName('')
      setBreed('')
      setImageUrl('')
    } catch (err) {
      console.error(err);
    }

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    postPuppy();



  }
  return (
    <form 
      id="addForm"
      onSubmit={
        handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => { setName(event.target.value) }}>
        </input>
      </label>
      <label>
        Breed:
        <input
          type="text"
          value={breed}
          onChange={(event) => { setBreed(event.target.value) }}>
        </input>
      </label>
      <label>
        ImageUrl:
        <input
          type="text"
          value={imageUrl}
          onChange={(event) => { setImageUrl(event.target.value) }}>
        </input>
      </label>
      <input id="submitButton" type="submit" value="add that pupper!"></input>
    </form>
  )
}
export default NewPuppyForm