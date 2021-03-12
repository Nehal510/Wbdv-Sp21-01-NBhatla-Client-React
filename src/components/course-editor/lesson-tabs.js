import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from "../../services/lesson-service";

const LessonTabs = (
    {
        lessons=[
            {_id: "123", title: "Lesson A"},
            {_id: "123", title: "Lesson B"},
            {_id: "123", title: "Lesson C"}
        ],
        findLessonsForModule,
        createLesson,
        updateLesson,
        deleteLesson
    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        console.log("LOAD LESSONS FOR MODULE: " + moduleId)
        /*if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }*/
        findLessonsForModule(moduleId)
    }, [moduleId])
    return(
        <div>
            <span className="headings">Lessons</span>
            <ul className="nav nav-pills mt-2">
                {
                    lessons.map(lesson =>
                        <li className={`nav-item ml-2 mt-2 reSizePills ${lesson._id === lessonId ? 'active' : ''}`}>
                            <EditableItem
                                /*active={lesson._id === lessonId}*/
                                key={lesson._id}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                item={lesson} updateItem={updateLesson} deleteItem={deleteLesson}/>
                        </li>
                    )
                }
                &nbsp;
                <i onClick={() => createLesson(moduleId)} className="fas fa-plus addLesson mt-3"></i>
                {/*<li className="nav-link ml-1">
                    <i onClick={() => createLesson(moduleId)} className="fas fa-plus addLesson"></i>
                </li>*/}
            </ul>
        </div>)}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {
        console.log("LOAD LESSONS FOR MODULE:")
        console.log(moduleId)
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS_FOR_MODULE",
                lessons
            }))
    },
    createLesson: (moduleId) => {
        console.log("CREATE LESSON FOR MODULE: " + moduleId)
        if(Object.is(moduleId, "undefined") || Object.is(moduleId,undefined))
        {
            alert('To create a lesson kindly select a module!!')
        }
        else{
        lessonService.createLesson(moduleId, {title: "New Lesson"})
            .then(lesson => dispatch({
                type: "CREATE_LESSON",
                lesson
            }))
    }},
    updateLesson: (lesson) =>
        lessonService.updateLesson(lesson._id, lesson)
            .then(status => dispatch({
                type: "UPDATE_LESSON",
                lesson
            })),
    deleteLesson: (item) =>
        lessonService.deleteLesson(item._id)
            .then(status => dispatch({
                type: "DELETE_LESSON",
                lessonToDelete: item
            }))
})

export default connect(stpm, dtpm)(LessonTabs)