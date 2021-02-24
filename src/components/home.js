import React from 'react'
import {Link} from "react-router-dom";

export default () =>
    <>
        <h1>Home</h1>
        <ul>
            <li>
            <Link to="/courses/table">
                Courses Table
            </Link>
            </li>
            <li>
            <Link to="/courses/grid">
                Courses Grid
            </Link>
            </li>
            <li>
            <Link to="/editor">
                Course Editor
            </Link>
            </li>
        </ul>
    </>