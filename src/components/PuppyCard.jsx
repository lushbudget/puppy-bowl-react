const PuppyCard = ({ puppy }) => {

  return (
    <>
<div key="puppy.id" className="puppyCard">
        <h3>Puppy Name: {puppy.name}---</h3>
        <h4>Puppy Breed: {puppy.breed}</h4>
        <img src={puppy.imageUrl} />
      </div>

    </>
  )
}

export default PuppyCard;