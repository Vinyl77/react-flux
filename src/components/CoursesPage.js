import React, { useState, useEffect } from "react";
import courseStore from "../stores/courseStore";
import CourseList from "./CourseList";
import { Link } from 'react-router-dom';
import { loadCourses, deleteCourse } from "../actions/courseActions";


function CoursesPage () {
    const [ courses, setCourses ] = useState(courseStore.getCourses())
    

    useEffect(() => {
        courseStore.addChangeListener(onChange);
        // setCourses(courseStore.getCourses())
       if(courseStore.getCourses().length === 0)loadCourses();
       return ()=> courseStore.removeChangeListener(onChange);
      },[]);
function onChange (){
  setCourses(courseStore.getCourses())
       
}
  
  
    return (
      <>
        <h2>Courses</h2>
        <Link className="btn btn-primary" to="/course">
            Add Course
        </Link>
        {/* <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author ID</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => {
              return (
                <tr key={course.id}>
                  <td>{course.title}</td>
                  <td>{course.authorId}</td>
                  <td>{course.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table> */}
        <CourseList courses={courses} deleteCourse={deleteCourse}/>
      </>
    );
  
  }


export default CoursesPage;