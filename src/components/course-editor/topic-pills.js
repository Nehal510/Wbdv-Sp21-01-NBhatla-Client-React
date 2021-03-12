import React, {useEffect} from 'react';
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicService from "../../services/topic-service";

const TopicPills = (
    {
        topics=[],
        findTopicsForLesson,
        createTopic,
        updateTopic,
        deleteTopic
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
        console.log("LOAD TOPICS FOR LESSON: " + lessonId)
        /*if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        }*/
        findTopicsForLesson(lessonId)
    }, [lessonId])
    return(
        <div>
            <span className="headings">Topics</span>
            <ul className="nav nav-pills mt-3">
                {
                    topics.map(topic =>
                        <li className={`nav-item ml-2 mt-2 reSizePills ${topic._id === topicId ? 'active' : ''}`}>
                            <EditableItem
                                /*active={lesson._id === lessonId}*/
                                key={topic._id}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                item={topic} updateItem={updateTopic} deleteItem={deleteTopic}/>
                        </li>
                    )
                }
                &nbsp;
                <i onClick={() => createTopic(lessonId)} className="fas fa-plus addTopic mt-4"></i>
                {/*<li>
                    <i onClick={() => createTopic(lessonId)} className="fas fa-plus addTopic"></i>
                </li>*/}
            </ul>
        </div>)}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})
const dtpm = (dispatch) => ({
    findTopicsForLesson: (lessonId) => {
        console.log("LOAD TOPICS FOR LESSON:")
        console.log(lessonId)
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS_FOR_LESSON",
                topics
            }))
    },
    createTopic: (lessonId) => {
        console.log("CREATE TOPIC FOR LESSON: " + lessonId)
        if(Object.is(lessonId,undefined) ||  Object.is(lessonId,"undefined"))
        {
            alert('To create a topic kindly select a lesson!!')
        }
        else{
        topicService.createTopic(lessonId, {title: "New Topic"})
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic
            }))
    }},
    updateTopic: (topic) =>
        topicService.updateTopic(topic._id, topic)
            .then(status => dispatch({
                type: "UPDATE_TOPIC",
                topic
            })),
    deleteTopic: (item) =>
        topicService.deleteTopic(item._id)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                topicToDelete: item
            }))
})

export default connect(stpm, dtpm)(TopicPills)