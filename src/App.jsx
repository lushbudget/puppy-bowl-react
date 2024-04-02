import { useEffect, useState } from 'react'
import './App.css'
import PuppyCard from './components/PuppyCard';
import AllPuppies from './components/AllPuppies';
import NewPuppyForm from './components/NewPuppyForm';
const COHORT = `2402-Thomas`
const BASE_API = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players`



function App() {
  return (
    <>
      <h1>PuppyBowl REACT!</h1>
      <NewPuppyForm baseAPI={BASE_API}/>
      <AllPuppies baseAPI={BASE_API}/>
      
    </>
  )
}

export default App
