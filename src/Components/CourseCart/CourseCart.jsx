import SelectedCourse from "../SelectedCourse/SelectedCourse";

/* eslint-disable react/prop-types */
const CourseCart = ({ selectedCourse, totalCredit, remainig }) => {
    return (
        <div className="lg:w-1/4 mt-10 lg:mt-0">
            <h2 className="text-2xl border-b-2 mb-5 font-semibold text-[#2F80ED]">Credit Hour Reamaining {remainig} hr</h2>
            <h3 className="text-2xl font-semibold mb-5">Course Name:</h3>
           <ol className="list-decimal">
           {
                selectedCourse.map((select, idx) => (<SelectedCourse
                    key={idx} select={select} ></SelectedCourse> ))
            }
           </ol>
            <h2 className="text-2xl border-t-2 mt-5 font-semibold">Total Credit Hour:{totalCredit}</h2>
        </div>
    );
};

export default CourseCart;