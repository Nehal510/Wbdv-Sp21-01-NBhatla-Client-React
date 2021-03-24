const TOPICS_URL="https://wbdv-a2.herokuapp.com/api/topics";
const WIDGETS_URL="https://wbdv-a2.herokuapp.com/api/widgets";
const createWidget = (topicId,widget) =>
    fetch(`${TOPICS_URL}/${topicId}/widgets`, {
        method: 'POST',
        body: JSON.stringify(widget),
        headers: {
            "content-type": 'application/json'
        }
    })
        .then(response => response.json())
       /*.then(widget => setWidgets((widgets) => [...widgets, widget]))*/

const deleteWidget = (id) =>
    fetch(`${WIDGETS_URL}/${id}`, {
        method: "DELETE"
    }).then((response => response.json())) /*=> {
        setWidgets((widgets) => widgets.filter(w => w.id !== id))
    })*/

const updateWidget = (id, widget) =>
    fetch(`${WIDGETS_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            "content-type": 'application/json'
        }
    }).then((response => response.json()))/*=> {
        setWidget({})
        setWidgets((widgets) => widgets.map(w => w.id === id ? widget : w))
    })*/

const findWidgetsForTopic = (tid) =>
    fetch(`${TOPICS_URL}/${tid}/widgets`)
        .then(response => response.json())

export default{
    createWidget, deleteWidget, updateWidget, findWidgetsForTopic
}