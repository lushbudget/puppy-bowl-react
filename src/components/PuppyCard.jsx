import { useEffect, useState } from "react";
import DeletePuppy from "./DeletePuppy";
import MoreInfo from "./MoreInfo";
import { useNavigate } from "react-router-dom";
import NewPuppyForm from "./NewPuppyForm";


const PuppyCard = ({ puppy, puppyList, setNeedsUpdating, fetchPuppies}) => {
  const [puppyToDisplay, setPuppyToDisplay] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    setPuppyToDisplay(puppy)
  })


  return (
    <>
      <div key="puppy.id" className="puppyCard">
        <h3>Puppy Name: {puppyToDisplay.name}---</h3>
        <h4>Puppy Breed: {puppyToDisplay.breed}</h4>
        <button onClick={async() => { navigate(`/${puppy.id}`) }}>more info</button>
        <button onClick={async() => {
          await DeletePuppy(puppy, puppyList, setNeedsUpdating)
          await fetchPuppies()
          navigate("/")
        }
        }>delete puppy</button>
        <img src={puppy.imageUrl} />

      </div>

    </>
  )
}

export default PuppyCard;