import React, {useEffect,useState} from 'react';
import {connect} from "react-redux";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetService from "../../services/widget-service";

const WidgetList = ({
    widgets=[],
    findWidgetsForTopic,
    createWidget,
    updateWidget,
    deleteWidget
}) => {
    const {layout, courseId, moduleId, lessonId, topicId,widgetId} = useParams()
    /*const [widgets, setWidgets] = useState([])*/
    const [widget, setWidget] = useState({})
    useEffect(() => {
        /*fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
            .then(response => response.json())
            .then(widgets => setWidgets(widgets))*/
        findWidgetsForTopic(topicId)
    }, [topicId])

    return(
        <div>
            <i onClick={()=>createWidget(topicId)} className="fas fa-plus float-right"></i>
            <span className="headings">Widgets</span>
            <ul className="list-group">
                {
                    widgets.map(_widget =>
                        <li key={_widget.id} className={`list-group-item ${widgetId === _widget.id ? 'active' : ''}`}>
                            {/*{
                                _widget.id === widget.id &&
                                <>
                                    <i onClick={() => {deleteWidget(widget)
                                        setWidget({})}} className="fas fa-trash float-right"></i>
                                    <i onClick={() => {
                                        updateWidget(widget)
                                        setWidget({})
                                    }} className="fas fa-check float-right"></i>
                                </>
                            }
                            {
                                _widget.id !== widget.id &&
                                <i onClick={() => setWidget(_widget)} className="fas fa-cog float-right"></i>
                            }*/}
                            {
                                _widget.type === "HEADING" &&
                                <HeadingWidget
                                    to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${_widget.id}`}
                                    deleteItem={deleteWidget}
                                    updateItem={updateWidget}
                                    _widget={_widget}
                                   /* setWidget={setWidget}
                                    editing={_widget.id === widget.id}
                                    widget={widget}*//>
                            }
                            {
                                _widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${_widget.id}`}
                                    deleteItem={deleteWidget}
                                    updateItem={updateWidget}
                                    _widget={_widget}
                                   /* setWidget={setWidget}
                                    editing={_widget.id === widget.id}
                                    widget={widget}*//>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
const stpm = (state) => ({
    widgets: state.widgetReducer.WidgetList
})
const dtpm = (dispatch) => ({
    findWidgetsForTopic: (topicId) => {
        /*console.log("LOAD TOPICS FOR LESSON:")
        console.log(lessonId)*/
        widgetService.findWidgetsForTopic(topicId)
            .then(widgets => dispatch({
                type: "FIND_ALL_WIDGETS_FOR_TOPIC",
                widgets
            }))
    },
    createWidget: (topicId) => {
        /*console.log("CREATE TOPIC FOR LESSON: " + lessonId)*/
        if(Object.is(topicId,undefined) ||  Object.is(topicId,"undefined"))
        {
            alert('To create a widget kindly select a topic!!')
        }
        else{
            widgetService.createWidget(topicId, {type:"HEADING", size:1, text:"New Widget"})
                .then(widget => dispatch({
                    type: "CREATE_WIDGET",
                    widget:widget
                }))
        }},
    updateWidget: (widget) =>
        widgetService.updateWidget(widget.id, widget)
            .then(status => dispatch({
                type: "UPDATE_WIDGET",
                widget
            })),
    deleteWidget: (item) =>
        widgetService.deleteWidget(item.id)
            .then(status => dispatch({
                type: "DELETE_WIDGET",
                widgetToDelete: item
            }))
})


export default connect(stpm, dtpm)(WidgetList)