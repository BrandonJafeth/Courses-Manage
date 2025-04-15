import { ReactNode, useState } from "react";
import CoursesContext from "./CoursesContext";

const CourseProvider = ({children}: {children: ReactNode}) => {
    const [pageNumber, setPageNumber] = useState(1)
    const [maxPageNumber, setMaxPageNumber]=useState(1)
    const [limit, setLimit] = useState(5)
    const [loading, setloading] =useState(true);
    return (
      <CoursesContext.Provider value={{pageNumber,
      setPageNumber, maxPageNumber, setMaxPageNumber,
      limit, setLimit, loading,setloading}}>
          {children}
      </CoursesContext.Provider>
    )
  }
  
  export default CourseProvider;