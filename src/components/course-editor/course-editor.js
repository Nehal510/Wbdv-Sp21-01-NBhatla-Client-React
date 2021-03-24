import React from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import courseTitleReducer from "../../reducers/coursetitle-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import CourseTitle from "./course-title";
import widgetReducer from "../../reducers/widget-reducer";
import WidgetList from "../widgets/widget-list";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    courseTitleReducer: courseTitleReducer,
    widgetReducer:widgetReducer
})

// const store = createStore(moduleReducer)
// const store = createStore(lessonReducer)
const store = createStore(reducer)

const CourseEditor = ({history}) => {
    const {layout,courseId, moduleId} = useParams();
    return (
        <Provider store={store}>
            <div>
                <h2>
                    <Link to={`/course/${layout}`}>
                        <i className="fas fa-times" style={{color:"black"}}></i>
                    </Link>
                    &nbsp;
                    {/*<Link to={`/courses/${layout}`}>
                        <i onClick={() => history.goBack()} className="fas fa-arrow-left" style={{color:"black"}}></i>
                    </Link>*/}
                    <CourseTitle/>
                    {/*<i onClick={() => history.goBack()}
                       className="fas fa-times float-right"></i>*/}
                    {/*<i onClick={() => props.history.goBack()}*/}
                    {/*   className="fas fa-times float-right"></i>*/}
                </h2>
                <div className="row">
                    <div className="col-4">
                        <ModuleList/>
                    </div>
                    <div className="col-8">
                        <LessonTabs/>
                        <div className="mt-4">
                        <TopicPills/>
                        </div>
                        <div className="mt-4">
                        <WidgetList/>
                        </div>
                    </div>
                </div>
            </div>
        </Provider>)}

export default CourseEditor