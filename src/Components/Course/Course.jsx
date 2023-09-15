/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Course = ({ course, handleSelect }) => {
    const { name, price, img, description, credit_hour, instructor } = course;
    return (
        <div>
            <div className="card card-compact lg:w-96 bg-base-100 shadow-xl p-5 ">
                <figure><img src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <h3 className="text-center font-semibold">Instructor:{instructor}</h3>
                    <div className="flex justify-between">
                        <svg className='lg:-mr-10' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 1V23" stroke="#1C1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#1C1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg> Price: {price}
                        <svg className='lg:-mr-5' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 6.04201C10.3516 4.56337 8.2144 3.74695 6 3.75001C4.948 3.75001 3.938 3.93001 3 4.26201V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.04201C13.6483 4.56328 15.7856 3.74686 18 3.75001C19.052 3.75001 20.062 3.93001 21 4.26201V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.997 13.6484 18.8134 12 20.292M12 6.04201V20.292" stroke="#1C1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg> Credit Hour:{credit_hour}hr
                    </div>
                    <div className="card-actions">
                        <button onClick={() => handleSelect(course)} className="w-full btn btn-primary">Select</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;