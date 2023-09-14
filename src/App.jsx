/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import CourseCart from './Components/CourseCart/CourseCart'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [selectedCourse, setSelectedCourse] = useState([]);
  const handleSelect = course => {
    const isSelected = selectedCourse.find(item => item.id === course.id)
    if (isSelected) {
      toast.error('Course Already Added!', {
        position: 'top-center'
      });
    }
    else {
      setSelectedCourse([...selectedCourse, course])
    }
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
