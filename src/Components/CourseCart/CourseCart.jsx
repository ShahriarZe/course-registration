import SelectedCourse from "../SelectedCourse/SelectedCourse";

/* eslint-disable react/prop-types */
const CourseCart = ({ selectedCourse }) => {
    return (
        <div className="w-1/4">
            <h2 className="text-2xl border-b-2 mb-5 font-semibold text-[#2F80ED]">Credit Hour Reamaining 20 hr</h2>
            <h3  className="text-2xl font-semibold">Course Name:</h3>
            {
                selectedCourse.map((select, idx) => <SelectedCourse key={idx} select={select} ></SelectedCourse>)
            }
            <h2 className="text-2xl border-t-2 mt-5 font-semibold">Total Credit Hour</h2>
        </div>
    );
};

export default CourseCart;