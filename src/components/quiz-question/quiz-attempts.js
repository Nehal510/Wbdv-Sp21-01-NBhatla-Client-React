import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import QuizService from '../../services/quizzes-service';

const QuizAttempts = () => {
    const {courseId, quizId} = useParams();
    const [attempts, setAttempts] = useState([]);
    useEffect(() => {
        QuizService.findAttemptsForQuiz(quizId)
            .then(a => setAttempts(a));
    }, [quizId])
    return (
        <div>
            <div className='row'>
                &nbsp;
                &nbsp;
                &nbsp;
                <h2>Attempts & their respective Scores for Quiz {quizId}</h2>
            </div>
            <table className="table table-striped">
                <thead className="thead-dark">
                <tr>
                    <th>Attempt Number</th>
                    <th>Attempt ID</th>
                    <th>Attempt Score</th>
                </tr>
                </thead>
                <tbody>
                {
                    attempts.map((attempt, count) =>
                        <tr key={attempt._id}>
                            <td>{count}</td>
                            <td>
                                {attempt._id}
                            </td>
                            <td>
                                {attempt.score}
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
}

export default QuizAttempts;
