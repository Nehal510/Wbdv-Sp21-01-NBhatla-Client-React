const QUIZZES_URL = 'http://localhost:3001/api/quizzes';

export const findAllQuizzes = () => {
    return fetch(QUIZZES_URL)
        .then(response => response.json())
}
export const findQuizById = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json())
}
export const submitQuiz = (quizId, questions) =>
    fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
        method: "POST",
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findAttemptsForQuiz = (quizId) =>
    fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
        method: 'GET'
    })
        .then(response => response.json())

export default {
    findAllQuizzes, findQuizById, submitQuiz, findAttemptsForQuiz
}

