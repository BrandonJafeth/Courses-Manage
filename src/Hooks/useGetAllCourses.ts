import { getAllCourses } from "../Services/Courses/CourseService"
import Course from "../types/courses";
import CoursesContext from "../Context/CoursesContext";
import { useContext, useEffect, useState } from "react";
import { fail} from "../components/alerts/alerts";

const useGetAllCourses = () => {

    const [courses, setCourses] = useState<Course[]>([])
    const {pageNumber, limit, setloading} = useContext(CoursesContext)


    const getCourses = async () => {
        try{
        setloading(true); 
        const coursesFromService = await getAllCourses(pageNumber, limit); 
        setCourses(coursesFromService);
        setloading(false);
    } catch(error){
        console.error('Error al cargar datos:', Error);
        setloading(false);
        fail(); 
        }
    };

    useEffect(()=> {
        getCourses();
    },[pageNumber, limit])
  
    return { courses, refreshCourses: getCourses,setCourses};

}

export default useGetAllCourses