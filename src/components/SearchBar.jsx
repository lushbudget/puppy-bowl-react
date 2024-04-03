import { useEffect, useState } from "react"

const SearchBar = ({puppyList, setPuppiesToDisplay}) => {
  const [searchParam, setSearchParam] = useState("");
  
  
  useEffect(() => {
    const filteredList = puppyList.filter((puppy) => {
      return puppy.name.toLowerCase().includes(searchParam)
    });
    setPuppiesToDisplay(filteredList)
    console.log(filteredList)

  }, [searchParam])

 return (
  <>
  <label id="search">
    Search For Your Favorite Puppy:
    <input
      type="text"
      placeholder="search"
      onChange={(e) => {
        setSearchParam(e.target.value.toLowerCase());
    }}
    />
  </label>
  </>
)
  }

export default SearchBar