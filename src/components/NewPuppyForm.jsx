import { useState } from "react";


const NewPuppyForm = (BASE_API) => {
  const [name, setName] = useState([]);
  const [breed, setBreed] = useState([]);
  const postPuppy = async () => {
    try {
      const response = await fetch(BASE_API.baseAPI,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            breed,
          }),
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error(err);
    }

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    postPuppy();
    
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
        type="text"
        value={name}
        onChange={(event) => {setName(event.target.value)}}>
        </input>
      </label>
      <label>
        Breed:
        <input
        type="text"
        value={breed}
        onChange={(event) => {setBreed(event.target.value)}}>
        </input>
      </label>
      <input type="submit" value="add that pupper!"></input>
    </form>
  )
}
export default NewPuppyForm