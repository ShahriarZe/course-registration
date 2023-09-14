import { useState } from 'react'
import './App.css'
import CourseCart from './Components/CourseCart/CourseCart'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {
  const[selectedCourse,setSelectedCourse]=useState([]);
  const handleSelect = course =>{
    setSelectedCourse([...selectedCourse,course])
  }
  return (
    <>
      <Header></Header>
      <div className='flex mx-auto mt-10'>
        <Courses handleSelect={handleSelect}></Courses>
        <CourseCart selectedCourse={selectedCourse}></CourseCart>
      </div>
    </>
  )
}

export default App
