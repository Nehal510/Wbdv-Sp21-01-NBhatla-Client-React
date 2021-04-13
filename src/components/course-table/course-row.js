import React, {useState} from 'react';
import {Link} from "react-router-dom";

const CourseRow = (
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

    /*return(
        <tr>
            <td>
                {
                    !editing &&
                    <Link to="/editor">
                        {course.title}
                    </Link>
                }
                {
                    editing &&
                    <input
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}/>
                }
            </td>
            <td>{course.owner}</td>
            <td>{course.lastModified}</td>
            <td>
                {/!*<i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>*!/}
                {/!*<i onClick={() => setEditing((prevEditing) => !prevEditing)} className="fas fa-edit"></i>*!/}
            </td>
            <td>
                {
                    editing &&
                    <i onClick={() => saveCourse()} className="fas fa-check" style={{color:"green"}}></i>
                }
                {
                    editing &&
                    <i onClick={() => deleteCourse(course)} className="fas fa-times" style={{color:"red"}}></i>
                }
                {
                    !editing &&
                    <i onClick={() => setEditing(true)} className="fas fa-edit" style={{color:"blue"}}></i>
                }


            </td>
            <td>

            </td>
        </tr>)*/
    return(
        <div className="row" style={{fontSize: "1em", borderBottom: "1px solid #cccccc", padding: "5px"}}>
            <div className="col-8 col-md-7 col-lg-6">
                {
                    editing &&
                    <input onChange={(e) => setTitle(e.target.value)}
                           value={title} className="form-control" style={{fontSize: "0.9em", padding: "0px", paddingLeft: "15px"}}/>
                }
                {
                    !editing &&
                    <span className="">
                    <i className="fas fa-file" style={{marginRight: "10px", color: "blue"}}></i>
                    <Link to={`/courses/table/edit/${course._id}`}>
                        <span>{course.title}</span>
                    </Link>
                    {/*Quizzes Link*/}
                    <Link className="float-right" to={`/courses/${course._id}/quizzes`}>
                        Quizzes
                    </Link>
                  </span>
                }
            </div>
            <div className="col-2 d-none d-md-block">{course.owner}</div>
            <div className="col-2 d-none d-lg-block">{course.lastModified}</div>
            <div className="col-4 col-md-3 col-lg-2">
                {
                    editing &&
                    <span className="float-right">
                      <i style={{color: "green", marginLeft: "5px"}} className="fas fa-check" onClick={() => saveCourse()}></i>
                      <i style={{color: "red", marginLeft: "5px"}} className="fas fa-times" onClick={() => deleteCourse(course)}></i>
                  </span>
                }
                {
                    !editing &&
                    <i style={{color: "blue"}}
                       className="fas fa-edit float-right" onClick={() => setEditing(true)}></i>
                }
            </div>
        </div>
    )
}

export default CourseRow
