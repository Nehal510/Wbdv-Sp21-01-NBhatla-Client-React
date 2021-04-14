import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
    const [answer, setAnswer] = useState(null)
    const [correct, setCorrect] = useState(false)
    const [revealAnswers, setRevealAnswers] =useState(false)
    return (
        <div>
            <h4>
                {question.question}
                {
                    revealAnswers&&
                    (
                        (answer!==null)?
                            (answer)?
                                (question.correct?<i className="fas fa-check float-right" style={{color:"green"}}></i>:<i className="fas fa-times float-right" style={{color:"red"}}></i>):
                                (!question.correct?<i className="fas fa-check float-right" style={{color:"green"}}></i>:<i className="fas fa-times float-right" style={{color:"red"}}></i>):''
                    )
                }
                {
                    correct&&
                    (
                        (answer!==null)?
                            (answer)?
                                (question.correct?<i  className="fas fa-check float-right" style={{color:"green"}}></i>:<i  className="fas fa-times float-right" style={{color:"red"}}></i>):
                                (!question.correct?<i  className="fas fa-check float-right" style={{color:"green"}}></i>:<i  className="fas fa-times float-right" style={{color:"red"}}></i>):''
                    )

                }
                {/*{
                    answer == question.correct &&
                    <i className="fas fa-check"></i>
                }
                {
                    answer != question.correct &&
                    <i className="fas fa-times"></i>
                }*/}
            </h4>
            {/*{question.correct}
            <br/>
            {JSON.stringify(answer)}
            <br/>*/}
            <br/>
            <ul className="list-group">
                <li className={`list-group-item
                ${
                    revealAnswers&&
                    (question.correct?'list-group-item-success':'list-group-item-danger')
                }
                ${
                    correct&&
                    (question.correct?'list-group-item-success':'')    
                }
                `}>
                    <label><input
                        type="radio"
                        onClick={() => setAnswer(true)}
                        name={question._id}/>True</label>
                    {
                        revealAnswers&&
                            (question.correct?<i className="fas fa-check float-right" style={{color:"green"}}></i>:<i className="fas fa-times float-right" style={{color:"red"}}></i>)
                    }
                    {
                        correct&&
                            (question.correct?<i className="fas fa-check float-right" style={{color:"green"}}></i>:'')
                    }
                </li>
                <li className={`list-group-item
                ${
                    revealAnswers&&
                    (!question.correct?'list-group-item-success':'list-group-item-danger')
                }
                ${
                    correct&&
                    (!question.correct?'list-group-item-success':'')
                }
                `}>
                    <label><input
                        type="radio"
                        onClick={() => setAnswer(false)}
                        name={question._id}/>False</label>
                    {
                        revealAnswers&&
                        (!question.correct?<i className="fas fa-check float-right" style={{color:"green"}}></i>:<i className="fas fa-times float-right" style={{color:"red"}}></i>)
                    }
                    {
                        correct&&
                        (!question.correct?<i className="fas fa-check float-right" style={{color:"green"}}></i>:'')
                    }
                </li>
            </ul>
            <br/>
            <h6>Your Answer: {(answer===null)?'':((answer)?'True':'False')}</h6>
            <br/>
            <button type="button" className="btn btn-success"
                    onClick={
                        ()=>
                        {
                            if(answer)
                            {
                                if(question.correct)
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
                            else
                            {
                                if(!question.correct)
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
                    }
            >Grade</button>
            <br/>
            <br/>
        </div>
    )
}

export default TrueFalseQuestion;