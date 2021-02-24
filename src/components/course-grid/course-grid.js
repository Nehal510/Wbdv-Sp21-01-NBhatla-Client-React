/*
import React from 'react'
import {Link} from "react-router-dom";

const CourseGrid = ({courses}) =>
    <div>
        <span><b>Recent Documents</b></span>
        <span><b>Owned By</b></span>
        <select className="form-select" aria-label="Default select example">
            <option value="1" selected>Me</option>
            <option value="2">Instructor</option>
            <option value="3">Admin</option>
        </select>
        <i className="fas fa-folder"></i>
        <i className="fas fa-sort-alpha-up-alt"></i>
        <Link to="/courses/table">
            <i className="fas fa-2x fa-list float-right" style={{color:"black"}}></i>
        </Link>
        <h2>Course Grid {courses.length}</h2>
        <div className="row">
            {
                courses.map(course =>
                    <div className="card" style={{width: "18rem", margin: "15px"}}>
                        <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{course.title}</h5>
                            <p className="card-text">Description of the course</p>
                            <Link to="/editor" className="btn btn-primary">
                                {course.title}
                            </Link>
                            <i className="fas fa-edit"></i>
                        </div>
                    </div>
                )
            }
        </div>

    </div>

export default CourseGrid
*/
import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({courses,deleteCourse,updateCourse}) =>
    <div>
        <div className="row" style={{fontSize: "1.5em", fontWeight: "bold", marginTop: "10px"}}>
            <div className="col-5 d-none d-md-block">
                Recent Documents
            </div>
            <div className="col-4 d-none d-md-block">
                Owned by Me
                <i className="fas fa-caret-down"></i>
            </div>
            <div className="col-12 col-md-3">
                <Link to="/courses/table">
                    <i className="fas fa-list float-right" style={{marginLeft: "20px",color:"black"}}></i>
                </Link>
                <i className="fas fa-sort-alpha-up-alt float-right" style={{marginLeft: "20px"}}></i>
                <i className="fas fa-folder float-right" style={{marginLeft: "20px"}}></i>
            </div>
        </div>
        {/*<div>
            <Link to="/courses/table">
                <i className="fas fa-list fa-2x float-right" style={{color:"black"}}></i>
            </Link>
        </div>*/}
        <div className="row">
            {
                courses.map(course =>
                    <CourseCard  key={course._id}
                                 course={course}
                                 deleteCourse={deleteCourse}
                                 updateCourse={updateCourse}/>
                )
            }
        </div>
    </div>

export default CourseGrid

