const initialState = {
    WidgetList: []
}

const widgetReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FIND_ALL_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                WidgetList: action.widgets
            }
        case "CREATE_WIDGET":
            return{
                ...state,
                WidgetList: [
                    ...state.WidgetList,
                    action.widget
                ]
            }
        case "DELETE_WIDGET":
            /*alert("delete the widget " + action.widgetToDelete.id)*/
            const newState1 = {
                WidgetList: state.WidgetList.filter(widget => {
                    /*alert("Comparising with " + widget.id)*/
                    if(widget.id === action.widgetToDelete.id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState1
        case "UPDATE_WIDGET":
            return {
                WidgetList: state.WidgetList.map(w => {
                    if(w.id === action.widget.id) {
                        return action.widget
                    } else {
                        return w
                    }
                })
            }
        default:
            return state
    }
}
export default widgetReducer