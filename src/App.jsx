import './App.css'
import CourseCart from './Components/CourseCart/CourseCart'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {
  return (
    <>
      <Header></Header>
      <div className='flex max-w-7xl mx-auto'>
        <Courses></Courses>
        <CourseCart></CourseCart>
      </div>
    </>
  )
}

export default App
