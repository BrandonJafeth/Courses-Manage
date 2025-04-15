import { useContext, useEffect, useState } from "react"
import {  getCourseById } from "../Services/Courses/CourseService"
import Course from "../types/courses";
import CoursesContext from "../Context/CoursesContext";
import { fail} from "../components/alerts/alerts";



const useGetCourseById = (id: string) => {

    const [course, setCourse] = useState<Course| null>(null)
    const {setloading}= useContext(CoursesContext);

    useEffect(() => {
        ( 
           async function() {
            try{
                setloading(true);
               const courseObjet = await getCourseById(id);
               setCourse(courseObjet);
               setloading(false);
            }catch(error){
                fail(); 
                console.error('Error al cargar datos:', Error);
            setloading(false); 
            }

           }
        )()
     },[id])
  
    return { course };

}

export default useGetCourseById

