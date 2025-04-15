import React, { useState } from 'react';
import {  searchCourse } from '../Services/Courses/CourseService';
import searchIcon from '../assets/buscar.png';
import Course from '../types/courses';


type Props = {
  setFilteredCourses: (courses: Course[]) => void;
  refreshCurrentPage: () => void;
};

function SearchForm({ setFilteredCourses, refreshCurrentPage  }: Props) {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);

    if (value === '') {
      refreshCurrentPage();
    }
  };

  const handleSearchClick = async () => {
    if (searchValue !== '') {
      const courses = await searchCourse(searchValue);
      setFilteredCourses(courses);
    }
  };

  return (
    <div className="Search-container">
      <input className='Search-input'
        type="text"
        placeholder="Search by course name"
        value={searchValue}
        onChange={handleInputChange}
      />

      <button className="search-icon" onClick={handleSearchClick}>
        <img src={searchIcon} alt="Search icon" className="Search-icon" />
      </button>
    </div>
  );
}

export default SearchForm;