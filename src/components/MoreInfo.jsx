import { useNavigate, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import DeletePuppy from "./DeletePuppy";

const MoreInfo = ({baseAPI}) => {
  const [singlePuppy, setSinglePuppy] = useState([]);
  
  const params = useParams();


  const fetchSinglePuppy = async () => {
    try {
      const response = await fetch(`${baseAPI}/${params.id}`)
      const result = await response.json();
      setSinglePuppy(result.data.player)
      
    } catch (error) {
      console.error(error)
      
    }
  }

  useEffect(()=> {
    fetchSinglePuppy()
  }, [])
  return (
    <>
    <NavBar />
      <div id='singlePuppyCard'>
        <h2>-----{singlePuppy.name}</h2>
        <h4>Breed: {singlePuppy.breed}</h4>
        <h4>Player Status: {singlePuppy.status}</h4>
        <img src={singlePuppy.imageUrl}/>
        <h4>Cohort ID: {singlePuppy.cohortId}</h4>
        <button onClick={()=> {
          <DeletePuppy singlePuppy={singlePuppy}/>
        

          
        }}>Delete Puppy!</button>
      </div>
    </>
  )
}

export default MoreInfo;