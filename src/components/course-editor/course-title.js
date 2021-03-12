import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import courseService from '../../services/course-service';

const CourseTitle =({
                        course={},
                        renderTitleForCourse


                    }) =>{
    const {layout, courseId, moduleId}= useParams();
    useEffect(() => {
        renderTitleForCourse(courseId)
    }, [])

    return(
        <>
            {course.title}
        </>
    )
}

const stpm =(state) => {
    return{
        course: state.courseTitleReducer.course
    }
}

const dtpm =(dispatch) =>{
    return{
        renderTitleForCourse: (courseId) =>{
            courseService.renderCourseTitle(courseId)
                .then(course => dispatch({
                    type:"RENDERING_COURSE_TITLE_FOR_COURSE_ID",
                    course: course
                }))
        }
    }
}
export default connect(stpm,dtpm)
(CourseTitle)