import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import QuestionService from '../../services/questions-service';
import QuizService from '../../services/quizzes-service';
import Question from './question';

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [quiz, setQuiz] = useState({});
    const [questions, setQuestions] = useState([]);
    const [graded, setGraded] = useState(false)
    const [attempt, setAttempt] = useState({})
    useEffect(() => {
        QuizService.findQuizById(quizId)
            .then(res => setQuiz(res));
        QuestionService.findQuestionsForQuiz(quizId)
            .then(res => setQuestions(res));
        if (graded) {
            QuizService.submitQuiz(quiz._id, questions).then(res => setAttempt(res));
        }
    }, [quizId, graded])
    return (
        <div>
            <div className='row'>
                <h3>Quiz {quizId}</h3>
            </div>
            {
                questions.map(question =>
                    <div key={question._id}>
                        <Question question={question} questions={questions} setQuestions={setQuestions}
                                  graded={graded}/>
                    </div>
                )
            }
            <div>
                <button onClick={() => setGraded(true)}
                        className='btn btn-success'
                        disabled={graded}>
                    Submit
                </button>
                &nbsp;
                &nbsp;
                &nbsp;
                {
                    graded &&
                    <Link to={`/courses/${courseId}/quizzes/${quizId}/attempts`}>
                        <button className="btn btn-danger">Attempts & Score for this Quiz</button>
                    </Link>
                }
                {
                    graded &&
                    <div>
                        <h4>Score for this attempt: {attempt.score}</h4>
                    </div>
                }
            </div>
        </div>

    )
}

export default Quiz