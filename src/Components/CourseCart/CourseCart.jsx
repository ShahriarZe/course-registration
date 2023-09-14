import SelectedCourse from "../SelectedCourse/SelectedCourse";

/* eslint-disable react/prop-types */
const CourseCart = ({selectedCourse}) => {
    return (
        <div className="w-1/4">
            <h2 className="text-2xl">Credit Hour Reamaining 20 hr</h2>
           <h3>Course Name:</h3>
           {
            selectedCourse.map((select,idx) => <SelectedCourse key={idx} select={select} ></SelectedCourse>)
           }
        </div>
    );
};

export default CourseCart;