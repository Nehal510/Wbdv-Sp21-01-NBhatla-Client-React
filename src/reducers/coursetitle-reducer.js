const initialState = {
    course: {
        title:""
    }
}

const courseTitleReducer =(state=initialState, action) => {
    switch (action.type) {
        case "RENDERING_COURSE_TITLE_FOR_COURSE_ID":
            return {
                ...state,
                course: action.course

            }
        default:
            return state
    }
}
export default courseTitleReducer