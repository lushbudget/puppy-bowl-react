import { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import SearchBar from './components/SearchBar';
import AllPuppies from './components/AllPuppies';
import MoreInfo from './components/MoreInfo';
const COHORT = `2402-Thomas`
const BASE_API = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players`


function App() {

  return (
    <>
      <h1>PuppyBowl REACT!</h1>
      <Routes>
        <Route path="/" element={<AllPuppies baseAPI={BASE_API}/>}/>
        <Route path="/:id" element={<MoreInfo baseAPI={BASE_API}/>}/>
      </Routes>
    </>
  )
}
export default App
