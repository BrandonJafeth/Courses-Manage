import { Link } from "react-router-dom";
import useGetAllCourses from "../Hooks/useGetAllCourses";
import Pager from "./Pager";
import "./table.css";
import Buttoms from "./Buttoms";
import SearchForm from "./SearchForm";
import { useContext, useEffect } from "react";
import useGetAllCoursesPages from "../Hooks/useGetAllCoursesPages";
import CoursesContext from "../Context/CoursesContext";
import ThemeContext from "../Context/ThemeContext";
import image from "../assets/Loanding_Gif.gif";

function Table() {
  const { courses, refreshCourses, setCourses} = useGetAllCourses();
  const { maxPageNumber } = useGetAllCoursesPages();
  const { pageNumber, setPageNumber } = useContext(CoursesContext);
  const { setMaxPageNumber, loading } = useContext(CoursesContext);

  const { darkMode } = useContext(ThemeContext)

  useEffect(() => {
    setCourses(courses);
  }, [courses]);

  useEffect(() => {
    if (courses.length == 0 && pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      setMaxPageNumber(maxPageNumber - 1);
    }
  }, [refreshCourses]);

  const refreshCurrentPage = () => {
    refreshCourses();
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <img src={image} alt="" />
      </div>
    );
  } else {
    return (
      <>
        <div className={darkMode ? 'main-dark' : 'main'}>

          <table id="TablaResults" className="Table-container">
            <caption className={darkMode ? "text-white" : ''}>List Of Courses Of University Three Duckling</caption>
            <caption className="Search-Caption"><SearchForm refreshCurrentPage={refreshCurrentPage} setFilteredCourses={setCourses} /></caption>
            <caption className="cap2">
              <Link to={"/create"}>
                <button id="create-btn" className="text-sm hover:bg-cyan-700 bg-cyan-900	 text-white py-2 px-1 rounded-lg shadow-lg">
                  Agregar nuevo
                </button>
              </Link>
            </caption>
            <thead>
              <tr>
                <th>ID</th>
                <th>Teacher’s Name</th>
                <th>Course Name </th>
                <th>Course Status</th>
                <th>Space Available</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td>{course.id}</td>
                  <td>{course.professor}</td>
                  <td>{course.name}</td>
                  <td className="columStatus">
                    {course.status ? (
                      <div className="CourseStatus">Open</div>
                    ) : (
                      <div className="CourseStatus">Closed</div>
                    )}
                  </td>
                  <td>{course.space_available}</td>
                  <td>
                    <Buttoms id={course.id} refreshCourses={refreshCourses} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pager maxPageNumber={maxPageNumber} />
        </div>
      </>
    );
  }

}

export default Table;
