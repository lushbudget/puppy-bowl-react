import { useEffect, useState } from "react";
import PuppyCard from "./PuppyCard";
import NewPuppyForm from "./NewPuppyForm";
import SearchBar from "./SearchBar";



const AllPuppies = ({ baseAPI }) => {
  const [puppiesToDisplay, setPuppiesToDisplay] = useState([]);
  const [puppyList, setPuppyList] = useState([]);
  const fetchPuppies = async () => {
    try {
      const response = await fetch(baseAPI);
      const result = await response.json();
      setPuppyList(result.data.players)
      setPuppiesToDisplay(result.data.players)
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    fetchPuppies()
  }, []);

  return (
    <>
      <SearchBar 
        puppyList={puppyList} 
        setPuppiesToDisplay={setPuppiesToDisplay}/>
      <NewPuppyForm 
        fetchPuppies={fetchPuppies}
        baseAPI={baseAPI} />
      {puppiesToDisplay.map((puppy) => (
        <div key={`PUPPY:${puppy.id}`}>
          <PuppyCard
            puppiesToDisplay={puppiesToDisplay}
            puppy={puppy}
            fetchPuppies={fetchPuppies}
          />
        </div>
      ))}
    </>
  );
};



export default AllPuppies;
