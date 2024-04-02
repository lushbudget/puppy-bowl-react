import { useEffect, useState } from "react";
import PuppyCard from "./PuppyCard";



const AllPuppies = (BASE_API, setNeedsUpdating) => {
  const [puppyList, setPuppyList] = useState([]);
  const fetchPuppies = async () => {
    try {
      const response = await fetch(BASE_API.baseAPI);
      const result = await response.json();
      setPuppyList(result.data.players)
    } catch (err) {
      console.error(err);
    }
  }
  
  useEffect(() => {
    fetchPuppies()
  }, []);
  return puppyList.map((puppy) => {
    return (
      <div key={`PUPPY:${puppy.id}`}>
        <PuppyCard
          puppyList={puppyList}
          puppy={puppy}
          setNeedsUpdating={setNeedsUpdating}
          fetchPuppies={fetchPuppies}

           
        />
      </div>

    )


  }

  )
}

export default AllPuppies;