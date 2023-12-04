# Course Registration
## 3 Features of Course Registration Web Application
* A bunch of Programming related course to pick from and select by One Click.
* A toast notification to enhance user experience and resolves multiple click error .
* Displayed pricing and course info to select with a single click.
## Describing How I Managed the State in My Assignment Project
* First of all I imported useState hook from React like - import { useState } from 'react'.
* Then I initialized the states in the functional component like - const [selectedCourse, setSelectedCourse] = useState([]),const [totalCredit, setTotalCredit] = useState(0), const [remainig, setRemaining] = useState(20).I declared multiple state variables in a single (App.jsx) component.
* In my project multiple components need access that's why I lift up the state and pass it down as props.
* One of my component needs to fetch data from (Course.json) so I consider using useEffect(()=>,[]) hook alongside useState().
* Finally I accessed and updated the state then map over some data and displayed in JSX.
That's how I managed the state using useState and useEffect hook in my assignment project.
