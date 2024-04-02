import DeletePuppy from "./DeletePuppy";

const PuppyCard = ({ puppy }) => {


  return (
    <>
<div key="puppy.id" className="puppyCard">
        <h3>Puppy Name: {puppy.name}---</h3>
        <h4>Puppy Breed: {puppy.breed}</h4>
        <button onClick={()=> {MoreInfo(puppy)}}>more info</button>
        <button onClick={()=> {DeletePuppy(puppy)}}>delete puppy</button>
        <img src={puppy.imageUrl} />
        
      </div>

    </>
  )
}

export default PuppyCard;