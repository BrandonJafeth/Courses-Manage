import "../components/alerts/alerts.css"
import { deleteCourse } from "../Services/Courses/CourseService";
import { confirmAction, correct, fail, recharged } from "../components/alerts/alerts";

const useDelete = async (id: string, refreshCourses: () => void): Promise<void> => {

  try {
    const result = await confirmAction('Are you sure you want to delete this course?', id, 'Course Id:')
    if (result) {
      await deleteCourse(id);
      recharged(1000, `Delete Course ${id}`);
      setTimeout(() => {
        correct('Course deleted successfully');
        refreshCourses();
      }, 1500);
    }
  } catch (error) {
    console.error('Error occurred during deletion:', error);
    fail();
  }
};

export default useDelete;


