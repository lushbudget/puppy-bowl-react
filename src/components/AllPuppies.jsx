import { useEffect, useState } from "react";
import PuppyCard from "./PuppyCard";



const AllPuppies = (BASE_API) => {
  const [puppyList, setPuppyList] = useState([]);
  useEffect(() => {
    
    const fetchPuppies = async () => {
      try {

        const response = await fetch(BASE_API.baseAPI);
        const result = await response.json();
        setPuppyList(result.data.players)
      } catch (err) {
        console.error(err);
      }
    }
    fetchPuppies()
  }, []);
  return puppyList.map((puppy) => {
    return (
      <>
        <PuppyCard
          key={`PUPPY:${puppy.id}`}
          puppy={puppy} />
      </>

    )


  }

  )
}

export default AllPuppies;