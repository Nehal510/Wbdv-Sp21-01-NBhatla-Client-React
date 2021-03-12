/*import React from 'react';
import {Link} from "react-router-dom";

const CourseCard = ({course}) =>
    <div className="col-4">
        <div className="card">
            <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">Some Description</p>
                <img src={``}/>
                <Link to="/editor" className="btn btn-primary">
                    {course.title}
                </Link>
                <i className="fas fa-edit float-right"></i>
            </div>
        </div>
    </div>

export default CourseCard*/


import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = (
    {
        course,
        lastModified="1/1/2021",
        owner="who knows?",
        deleteCourse,
        updateCourse
    }) => {
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(course.title)

    const saveCourse = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: title
        }
        updateCourse(newCourse)
    }

    return(
        /*<div className="col-4">*/
        <div style={{marginTop: "30px"}}
             className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            {/*<div className="card">*/}
            <div className="card" style={{height: "420px"}}>
                {
                    editing &&
                    <span style={{position: "absolute", right: "10px", top: "0px", index: 1000, color: "red"}}>
                      <i onClick={() => saveCourse()} style={{color: "green", marginLeft: "5px"}} className="fas fa-check"></i>
                      <i onClick={() => deleteCourse(course)} style={{color: "red", marginLeft: "5px"}} className="fas fa-times"></i>
                  </span>
                }
                <img src="https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="card-title">
                        {
                            !editing &&
                            <h6>
                                {course.title}
                            </h6>
                        }
                        {
                            editing &&
                            <input
                                className="form-control"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}/>
                        }
                    </div>
                    <p className="card-text">Some Description</p>
                    {/*<img src={``}/>*/}
                    <Link to={`/courses/grid/edit/${course._id}`} className="btn btn-primary">
                        {course.title}
                    </Link>
                    <div>
                        {/*{
                            editing &&
                            <i onClick={() => deleteCourse(course)} className="fas fa-times float-right" style={{color:"red"}}></i>
                        }
                        {
                            editing &&
                            <i onClick={() => saveCourse()} className="fas fa-check float-right" style={{color:"green"}}></i>
                        }*/}

                        {
                            !editing &&
                            <i onClick={() => setEditing(true)} className="fas fa-edit float-right" style={{color: "blue", position: "absolute", bottom: "10px", right:"5px"}}></i>
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CourseCard




/*
import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = (
    {
        course,
        lastModified="1/1/2021",
        owner="who knows?",
        deleteCourse,
        updateCourse
    }) => {
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(course.title)

    const saveCourse = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: title
        }
        updateCourse(newCourse)
    }

    return(
        <div style={{marginTop: "30px"}}
             className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div className="card" style={{height: "420px"}}>
                {
                    editing &&
                    <span style={{position: "absolute", right: "10px", top: "0px", index: 1000, color: "red"}}>
                      <i style={{color: "green", marginLeft: "5px"}} className="fas fa-check fa-2x" onClick={() => saveCourse()}></i>
                      <i style={{color: "red", marginLeft: "5px"}} className="fas fa-trash fa-2x" onClick={() => deleteCourse(course)}></i>
                    </span>
                }
                <img src={course.image} className="card-img-top"/>
                <div className="card-body">
                    <div className="card-title">
                        <h5 className="card-title">
                            {
                                editing &&
                                <input value={course.title} className="form-control"/>
                            }
                            {
                                !editing &&
                                <span>
                          {course.title}
                        </span>
                            }
                        </h5>
                    </div>
                    <p className="card-text">Some Description</p>
                    <Link to="/editor" className="btn btn-primary">
                        {course.title}
                    </Link>
                    <div>
                        {
                            !editing &&
                            <i style={{color: "blue", position: "absolute", bottom: "10px", right:"5px"}}
                               className="fas fa-edit float-right fa-2x" onClick={() => setEditing(true)}></i>
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CourseCard
*/

