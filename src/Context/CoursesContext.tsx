import React from "react";

const CoursesContext = React.createContext({
  pageNumber: 0,
  setPageNumber: (_value: number)=>{},
  maxPageNumber: 0,
  setMaxPageNumber: (_value: number)=>{},
  limit:0,
  setLimit:(_value:number)=>{},
  loading: true,
  setloading: (_value:boolean)=>{},
});

export default CoursesContext;