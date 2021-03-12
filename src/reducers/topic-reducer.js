const initialState = {
    topics: [
        // {_id: 123, title: "Module 123"},
        // {_id: 234, title: "Module 234"},
        // {_id: 345, title: "Module 345"}
    ]
}

const topicReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FIND_TOPICS_FOR_LESSON":
            return {
                ...state,
                topics: action.topics
            }
        case "CREATE_TOPIC":
            const newState = {
                topics: [
                    ...state.topics,
                    action.topic
                    // {
                    //     title: "New Module",
                    //     _id: (new Date()).getTime()
                    // }
                ]
            }
            return newState
        case "DELETE_TOPIC":
            // alert("delete the module " + action.moduleToDelete.title)
            const newState1 = {
                topics: state.topics.filter(topic => {
                    if(topic._id === action.topicToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState1
        case "UPDATE_TOPIC":
            return {
                topics: state.topics.map(t => {
                    if(t._id === action.topic._id) {
                        return action.topic
                    } else {
                        return t
                    }
                })
            }
        default:
            return state
    }
}
export default topicReducer