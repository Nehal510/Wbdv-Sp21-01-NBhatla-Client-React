const QUIZZES_URL = 'https://wbdv-a8-server-node.herokuapp.com/api/quizzes';

export const findQuestionsForQuiz = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/questions`)
        .then(response => response.json())
}
export default {
    findQuestionsForQuiz
}

