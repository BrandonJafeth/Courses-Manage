import { useParams } from 'react-router-dom';
import useGetCourseById from '../../Hooks/useGetCourseById';
import './View.css'
import { ButtonCancel } from '../../components/ButtonsForms';
import { useContext } from 'react';
import ThemeContext from '../../Context/ThemeContext';
import CoursesContext from '../../Context/CoursesContext';
import image from '../../assets/Loanding_Gif.gif'


function DetailsCourse() {
  const {darkMode} = useContext(ThemeContext);
  const { id } = useParams<{ id?: string }>();
  const { course } = id ? useGetCourseById(id) : { course: null };
  const {loading} = useContext(CoursesContext);


  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
       <img src={image} alt="" />
      </div>
    );
  } else{
  return (
    <>
      <div className={`MainView ${darkMode ? 'dark-mode' : ''}`}>
        <p>Course Details</p>
        <form className={`Form-View ${darkMode ? 'dark-mode' : ''}`}>
          <div className="view">
            <span>Course Name </span>
            <b>{course?.name || ''}</b>
          </div>
          <div className="view">
            <span>Course Code</span>
            <b>{course?.course_code}</b>
          </div>
          <div className="view">
            <span>Teacher’s Name</span>
            <b>{course?.professor}</b>
          </div>
          <div className="view">
            <span>Current Registration</span>
            <b>{course?.current_registration}/{course?.maximun_quota}</b>
          </div>
          <div className="view">
            <span>Course Status</span>
            <b>{course?.status ? 'Open' : 'Closed'}</b>
          </div>
          <div className="view">
            <span>Space Available</span>
            <b>{course?.space_available}</b>
          </div>

          <div className="view">
            <span>Classroom Number</span>
            <b>{course?.classroom_number || ''}</b>
          </div>
          <div className='button_group'>
            <ButtonCancel Title='Back'/>
          </div>
        </form>
      </div>
    </>
  );
 }
}

export default DetailsCourse
