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
  const [totalCredit, setTotalCredit] = useState(0)
  const [remainig, setRemaining] = useState(20)
  const handleSelect = course => {
    const isSelected = selectedCourse.find(item => item.id === course.id);
    let count = course.credit_hour;
    if (isSelected) {
      toast.error('Course Already Added!', {
        position: 'top-left'
      });
    }
    else {
      // ---Total Credit Hour--
      selectedCourse.forEach(item => {
        count = count + item.credit_hour;
      });
      // ---Remaining Hour---
      const remainigHour = 20 - count;
      if (count > 20 || remainigHour < 0) {
        return toast.error('Credit Limit Crossed!', {
          position: 'top-right'
        });
      } else {
        setTotalCredit(count);
        setRemaining(remainigHour);
        setSelectedCourse([...selectedCourse, course])
      }
    }
  }
  return (
    <>
      <Header></Header>
      <div className='flex flex-col lg:flex-row mx-auto mt-10'>
        <Courses handleSelect={handleSelect}></Courses>
        <CourseCart
          selectedCourse={selectedCourse}
          totalCredit={totalCredit}
          remainig={remainig} ></CourseCart>
      </div>
    </>
  )
}

export default App
