/* eslint-disable react/prop-types */
const Course = ({ course,handleSelect }) => {
    const { name, price, img ,description,credit_hour,instructor} = course;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl p-5 ">
                <figure><img src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <h3 className="text-center font-semibold">Instructor:{instructor}</h3>
                    <div className="flex justify-between">
                        <p> Price: {price}</p>
                        <p>Credit Hour:{credit_hour}hr</p>
                    </div>
                    <div className="card-actions">
                        <button onClick={()=>handleSelect(course)} className="w-full btn btn-primary">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;