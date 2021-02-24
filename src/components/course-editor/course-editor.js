import React from 'react';
import {Link} from "react-router-dom";

const CourseEditor = ({history}) =>
    <div>
        <h1>
            <Link to="/courses/table">
                <i className="fas fa-arrow-left" onClick={() => history.goBack()} style={{color:"black"}}></i>
            </Link>
            Course Editor
            <Link to="/"><i className="fas fa-home float-right" style={{color:"black"}}></i></Link>
            <i className="fas fa-times float-right" onClick={() => history.goBack()}></i>
        </h1>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><i className="fa fa-times"></i> CS5610-WebDev</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-12 navbar nav-fill w-100">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Build</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Pages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Theme</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Store</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Apps</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Settings</a>
                        </li>
                    </ul>
                    <a href="#"><i className="fa fa-plus" style={{color:"white"}}></i></a>
                </div>
            </div>
        </nav>

        <div>
            <div className="row">
                <div className="col-4">
                    <ul className="list-group sidenav">
                        <li className="list-group-item">Module 1-jQuery<i className="float-right fas fa-times"></i></li>
                        <li className="list-group-item active">Module 2-React<i className="float-right fas fa-times"></i>
                        </li>
                        <li className="list-group-item">Module 3-Redux<i className="float-right fas fa-times"></i></li>
                        <li className="list-group-item">Module 4-Native<i className="float-right fas fa-times"></i></li>
                        <li className="list-group-item">Module 5-Angular<i className="float-right fas fa-times"></i></li>
                        <li className="list-group-item">Module 6-Node<i className="float-right fas fa-times"></i></li>
                        <li className="list-group-item">Module 7-Mongo<i className="float-right fas fa-times"></i></li>
                        <li className="list-group-item"><i className="float-right fas fa-plus"></i></li>
                    </ul>
                </div>
                <div className="col-8 pt-4">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Topic 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Topic 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Topic 3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" tabIndex="-1">Topic 4</a>
                        </li>
                        {/*<li className="nav-item">
                            <a href="#"><i className="fa fa-plus"></i></a>
                        </li>*/}
                    </ul>
                </div>
            </div>
            <div>
            </div>
        </div>
    </div>
export default CourseEditor
