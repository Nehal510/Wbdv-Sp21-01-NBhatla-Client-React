import React from 'react'
import CourseTable from "./course-table/course-table.js";
import CourseGrid from "./course-grid/course-grid.js";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";

export default class CourseManager
    extends React.Component {
    state = {
        courses: [],
        courseInput:''
    }

    newCourseInput = (e) =>{
        this.setState({
            courseInput:e.target.value
        })
    }

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))
        // .then(courses => this.setState({courses: courses}))
    }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => {
                this.setState((prevState) => {
                    let nextState = {...prevState}
                    nextState.courses = prevState.courses.map(c => {
                        if(c._id === course._id) {
                            return course
                        } else {
                            return c
                        }
                    })
                    return nextState
                })
            })
    }

    deleteCourse = (course) => {
        // alert("delete course " + course._id)
        courseService.deleteCourse(course._id)
            .then(status => {
                // this.setState({
                //   courses: this.state.courses.filter(c => c._id !== course._id)
                // })
                this.setState((prevState) => ({
                    courses: prevState.courses.filter(c => c._id !== course._id)
                }))
            })
    }

    addCourse = () => {
        // alert('add course')
        const newCourse = {
            title: this.state.courseInput,
            owner: "Me",
            lastModified: "02/20/2021"
        }
        courseService.createCourse(newCourse)
            .then(actualCourse => {
                this.state.courses.push(actualCourse)
                this.setState(this.state)
            })
        this.setState({courseInput:''})
    }

    render() {
        return(
            <div>
                <div className="sticky-top">
                    <div className="row" style={{paddingTop: "10px"}}>
                        <div className="col-1">
                            <i className="fas fa-bars fa-2x"></i>
                        </div>
                        <div className="col-lg-3 d-none d-lg-block">
                            <h3>Course Manager</h3>
                        </div>
                        <div className="col-8 col-lg-7">
                            <input className="form-control" placeholder="New Course Title" value={this.state.courseInput} onChange={this.newCourseInput}/>
                        </div>
                        <div className="col-1">
                            {/*<Link to="/"><i className="fas fa-home float-right fa-2x" style={{color:"black", marginLeft:"20px"}}></i></Link>*/}
                            <i style={{color: "red", backgroundColor: "white"}}
                                       className="float-right fas fa-plus-circle fa-2x" onClick={this.addCourse}></i>
                        </div>
                    </div>
                </div>
                {/*<nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav1">
                    <a href="#"><i className="fa fa-align-justify" style={{color:"white"}}></i></a>
                    <a className="navbar-brand" href="#" style={{pointerEvents: "none"}}><b>Course Manager</b></a>
                    <input type="text" className="form-control" id="coursename" name="coursename" placeholder="New Course Title" style={{fontStyle:"italic"}}></input>
                    <button type="button" className="btn btn-danger" style={{float:"right"}} id="addbutton1" onClick={this.addCourse}>
                        <span className="glyphicon glyphicon-plus"></span>Add
                    </button>
                    <button className="btn btn-danger" onClick={this.addCourse} style={{borderRadius:"50px"}}><i className="fas fa-plus"></i></button>
                    <Link to="/"><i className="fas fa-home float-right" style={{color:"white"}}></i></Link>
                </nav>*/}
                {/*<h1>Course Manager</h1>*/}
                {/*<button onClick={this.addCourse}>
                    Add Course
                </button>*/}

                {/*<Route path="/courses/table" component={CourseTable}/>*/}
                <Route path="/courses/table" exact={true} >
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                {/*<Route path="/courses/grid" component={CourseGrid}/>*/}
                <Route path="/courses/grid" exact={true}>
                    <CourseGrid
                        courses={this.state.courses}
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        />
                </Route>
                {/*<CourseTable courses={this.state.courses}/>*/}
                {/*<CourseGrid courses={this.state.courses}/>*/}
                <i className="fas fa-plus-circle fa-4x"
                   style={{backgroundColor: "white", color: "red", position: "fixed", right: "10px", bottom: "10px"}} onClick={this.addCourse}></i>
                {/*<button className="btn btn-danger float-right" onClick={this.addCourse} style={{borderRadius:"50px",position:"relative",top:"100px"}}><i className="fas fa-plus"></i></button>*/}
            </div>
        )
    }
}
// export default CourseManager
