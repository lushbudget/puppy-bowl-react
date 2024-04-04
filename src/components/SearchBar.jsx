import { useEffect, useState } from "react"

const SearchBar = ({puppyList, setPuppiesToDisplay}) => {
  const [searchParam, setSearchParam] = useState("");
  useEffect(() => {
    const filteredList = puppyList.filter((puppy) => {
      return puppy.name.toLowerCase().includes(searchParam)
    });
    setPuppiesToDisplay(filteredList)

  }, [searchParam])
  const handleClear = (e) => {
    e.preventDefault();
  
  }

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
 
  <input onSubmit={handleClear} id="submitButton" type="submit" value="clear that selection"></input>

  
  </form>
  </>
)
  }

export default SearchBar