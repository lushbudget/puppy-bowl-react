import { useEffect, useState } from "react";
import PuppyCard from "./PuppyCard";
import NewPuppyForm from "./NewPuppyForm";



const AllPuppies = ({ baseAPI }) => {
  const [puppyList, setPuppyList] = useState([]);
  const fetchPuppies = async () => {
    try {
      const response = await fetch(baseAPI);
      const result = await response.json();
      setPuppyList(result.data.players)
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    fetchPuppies()
  }, []);

  return (
    <>
      <NewPuppyForm 
        fetchPuppies={fetchPuppies}
        baseAPI={baseAPI} />
      {puppyList.map((puppy) => (
        <div key={`PUPPY:${puppy.id}`}>
          <PuppyCard
            puppyList={puppyList}
            puppy={puppy}
            fetchPuppies={fetchPuppies}
          />
        </div>
      ))}
    </>
  );
};



export default AllPuppies;
