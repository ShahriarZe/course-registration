/* eslint-disable react/prop-types */
const Course = ({ course }) => {
    const { name, price, img ,description,credit_hour} = course;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl ">
                <figure><img src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="flex justify-between">
                        <p>Price: {price}</p>
                        <p>Credit Hour:{credit_hour}hr</p>
                    </div>
                    <div className="card-actions">
                        <button className="w-full btn btn-primary">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;