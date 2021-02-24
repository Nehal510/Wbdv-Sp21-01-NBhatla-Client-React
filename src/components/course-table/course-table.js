import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable extends
    React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            /*<div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Owned By</th>
                        <th>Last Modified On</th>
                        <th><i className="fas fa-folder"></i></th>
                        <th><i className="fas fa-sort-alpha-up-alt"></i></th>
                        <th><Link to="/courses/grid"><i className="fas fa-th" style={{color:"black"}}></i></Link></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.courses.map(course =>
                            <CourseRow
                                key={course._id}
                                deleteCourse={this.props.deleteCourse}
                                updateCourse={this.props.updateCourse}
                                course={course}
                                title={course.title}
                                lastModified={course.lastModified}
                                owner={course.owner}/>)
                    }
                    </tbody>
                </table>
            </div>*/
            <div>
            <div style={{marginTop: "0px", padding: "15px"}}>
                <div className="row" style={{fontSize: "1.7em", borderBottom: "1px solid #aaaaaa", borderTop: "1px solid #aaaaaa", padding: "5px"}}>
                    <div className="col-6 col-md-7 col-lg-6">Title</div>
                    <div className="col-2 d-none d-md-block">Owned By</div>
                    <div className="col-2 d-none d-lg-block">Last Modified</div>
                    <div className="col-6 col-md-3 col-lg-2">
                        <Link to="/courses/grid"><i className="fas fa-th float-right" style={{marginLeft: "20px", color:"black"}}></i></Link>
                        <i className="fas fa-sort-alpha-up-alt float-right" style={{marginLeft: "20px"}}></i>
                        <i className="fas fa-folder float-right" style={{marginLeft: "20px"}}></i>
                    </div>
                </div>
                </div>
                <div>
                {
                    this.props.courses.map(course =>
                        <CourseRow
                            key={course._id}
                            deleteCourse={this.props.deleteCourse}
                            updateCourse={this.props.updateCourse}
                            course={course}
                            title={course.title}
                            lastModified={course.lastModified}
                            owner={course.owner}/>)
                }
                </div>
                </div>
        )
    }
}