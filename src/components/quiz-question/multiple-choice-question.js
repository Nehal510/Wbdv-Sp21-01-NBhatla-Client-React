import React, {useState} from "react";

const MultipleChoiceQuestion = ({question}) => {
    const [answer, setAnswer] = useState('')
    const [correct, setCorrect] = useState(false)
    const [revealAnswers, setRevealAnswers] =useState(false)
    return(
        <div>
            <h4>{question.question}
            {/*{question.correct}*/}
            {
                revealAnswers&&
                (
                    question.correct===answer?<i className="fas fa-check float-right" style={{color:"green"}}></i>:<i className="fas fa-times float-right" style={{color:"red"}}></i>
                )
            }
            {
                correct&&
                (
                    question.correct===answer?<i className="fas fa-check float-right" style={{color:"green"}}></i>:<i className="fas fa-times float-right" style={{color:"red"}}></i>
                )
            }
            </h4>
            <br/>
            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        return (
                            <li className={`list-group-item
                            ${
                                revealAnswers &&
                                (question.correct === choice ? 'list-group-item-success' : answer === choice ? 'list-group-item-danger' : '')
                            }
                            ${
                                correct &&
                                (question.correct === choice ? 'list-group-item-success' : '')
                            }
                           `}
                                key={question._id}>
                                <label>
                                    <input type="radio" onClick={() => setAnswer(choice)} name={question._id}></input>
                                    {choice}
                                </label>
                                {
                                    revealAnswers&&
                                    (
                                        question.correct === choice?<i className="fas-fa check float-right" style={{color:"green"}}></i>:answer === choice?
                                            <i className="fas-fa times float-right" style={{color:"red"}}></i>:''
                                    )
                                }
                                {
                                    correct &&
                                    (
                                        question.correct === choice?<i className="fas-fa check float-right" style={{color:"green"}}></i>:''
                                    )
                                }
                            </li>
                        )
                    })
                }
            </ul>
            <br/>
            <h6>Your Answer:{answer}</h6>
            <br/>
            <button type="button" className="btn btn-success"
                    onClick={
                        ()=>{
                            if(answer===question.correct)
                            {
                                setCorrect(true)
                                setRevealAnswers(false)
                            }
                            else
                            {
                                setCorrect(false)
                                setRevealAnswers(true)
                            }
                        }
                    }
            >Grade</button>
            <br/>
            <br/>
        </div>
    )
}

export default MultipleChoiceQuestion;