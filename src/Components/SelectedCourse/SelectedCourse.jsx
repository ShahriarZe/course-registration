/* eslint-disable react/prop-types */
const SelectedCourse = ({select}) => {
    const {name}=select;
    return (
        <div className="text-xl">
          <li>{name}</li>
        </div>
    );
};

export default SelectedCourse;