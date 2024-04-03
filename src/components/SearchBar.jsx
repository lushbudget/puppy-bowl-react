import { useEffect, useState } from "react"

const SearchBar = ({puppyList, setPuppiesToDisplay}) => {
  const [searchParam, setSearchParam] = useState("");
  
  
  useEffect(() => {
    const filteredList = puppyList.filter((puppy) => {
      return puppy.name.toLowerCase().includes(searchParam)
    });
    setPuppiesToDisplay(filteredList)

  }, [searchParam])

 return (
  <>
  <form id="searchForm">
  <label>
    Search For Your Favorite Puppy:
    <input 
      id="search"
      type="text"
      placeholder="search"
      onChange={(e) => {
        setSearchParam(e.target.value.toLowerCase());
    }}
    />
  </label>
  </form>
  </>
)
  }

export default SearchBar