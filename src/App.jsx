import { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'

import AllPuppies from './components/AllPuppies';
import NewPuppyForm from './components/NewPuppyForm';
import MoreInfo from './components/MoreInfo';
const COHORT = `2402-Thomas`
const BASE_API = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players`


function App() {
  const [needsUpdating, setNeedsUpdating] = useState(true);
  return (
    <>
      <h1>PuppyBowl REACT!</h1>
      <NewPuppyForm baseAPI={BASE_API} />
      <Routes>
        <Route path="/:id" element={<MoreInfo />} />
        <Route path="/" element={<AllPuppies
          baseAPI={BASE_API}
          setNeedsUpdating={setNeedsUpdating}
        />} />
      </Routes>
    </>
  )
}

export default App
