import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {findAllQuizzes} from "../../services/quizzes-service";

const QuizzesList = () => {
    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        // TODO: implement this in a separate service file
        findAllQuizzes().then((quizzes) => {
            setQuizzes(quizzes)
        })
    }, [])
    return(
        <div>
            <h2>Quizzes</h2>
            <div className="list-group">
                {
                    quizzes.map((quiz) => {
                        return(
                            <div className="list-group-item">
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                    {quiz.title}
                                </Link>
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}/attempts`}>
                                    <button type="button" className="btn btn-dark float-right" style={{marginLeft:"20px"}}>Check Attempts</button>
                                </Link>
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                    <button type="button" className="btn btn-primary float-right">Start</button>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default QuizzesList;