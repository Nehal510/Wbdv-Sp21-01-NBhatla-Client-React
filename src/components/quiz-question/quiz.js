import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Question from "./question";
import {findQuestionsForQuiz} from "../../services/questions-service";

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        // TODO: move this to a service file
        findQuestionsForQuiz(quizId).then(questions => setQuestions(questions))
    },[])

    return(
        <div>
            <h2>Quiz {quizId}</h2>
            <ol>
                {
                    questions.map(question =>
                        <li>
                            <Question question={question}/>
                        </li>
                    )
                }
            </ol>
        </div>
    );
}

export default Quiz;
