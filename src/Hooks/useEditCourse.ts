import { editCourse } from "../Services/Courses/CourseService";
import Course from "../types/courses";
import { useNavigate } from "react-router-dom";
import { confirmAction, correct, fail } from "../components/alerts/alerts";

const useEditCourse = () => {

  const navigate = useNavigate();

  const onSubmit = async (data: Course) => {
    try {
      const result = await confirmAction("Are you sure you want to edit this course?", data.course_code, data.name)
      if (result) {
        if (typeof data.current_registration === 'string') {
          data.current_registration = parseInt(data.current_registration) || 0;
        }
        if (typeof data.classroom_number === 'string') {
          data.classroom_number = parseInt(data.classroom_number) || 0;
        }
        if (typeof data.maximun_quota === 'string') {
          data.maximun_quota = parseInt(data.maximun_quota) || 0;
        }
        await editCourse({ data });
        correct('This course has been successfully edited');
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      console.error('Error al editar el curso', error);
      fail()
    }
  };

  return {
    onSubmit
  };
};

export default useEditCourse