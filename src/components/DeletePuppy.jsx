const COHORT = `2402-Thomas`
const BASE_API = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players`

const DeletePuppy = async (puppy) => {
  const pupID = puppy.id;
  try {
    const response = await fetch(`${BASE_API}/${pupID}`,
      {
        method: 'DELETE',
      });
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
export default DeletePuppy;