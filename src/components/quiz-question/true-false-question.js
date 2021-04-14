import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
    const [answer, setAnswer] = useState(null)
    const [correct, setCorrect] = useState(false)
    const [revealAnswers, setRevealAnswers] =useState(false)
    const [check, setCheck] = useState(false)
    return (
        <div>
            <h4>
                {question.question}
                {
                    (question.correct !== JSON.stringify(answer)&&(check))&&
                        <i className="fas fa-times float-right" style={{color:"red"}}></i>
                    /*revealAnswers&&
                    (
                        (answer!==null)?
                            (answer)?
                                (question.correct?<i className="fas fa-check float-right" style={{color:"green"}}></i>:<i className="fas fa-times float-right" style={{color:"red"}}></i>):
                                (!question.correct?<i className="fas fa-check float-right" style={{color:"green"}}></i>:<i className="fas fa-times float-right" style={{color:"red"}}></i>):''
                    )*/
                }
                {
                    (question.correct === JSON.stringify(answer)&&(check))&&
                        <i className="fas fa-check float-right" style={{color:"green"}}></i>
                    /*correct&&
                    (
                        (answer!==null)?
                            (answer)?
                                (question.correct?<i  className="fas fa-check float-right" style={{color:"green"}}></i>:<i  className="fas fa-times float-right" style={{color:"red"}}></i>):
                                (!question.correct?<i  className="fas fa-check float-right" style={{color:"green"}}></i>:<i  className="fas fa-times float-right" style={{color:"red"}}></i>):''
                    )*/

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
                    (check)&& ("true"!==question.correct)&&(JSON.stringify(answer)==="true")&&
                    ('list-group-item-danger')
                   /* revealAnswers&&
                    (question.correct?'list-group-item-success':'list-group-item-danger')*/
                }
                ${
                    (check)&& ("true"===question.correct)&&
                    ('list-group-item-success')
                    /*correct&&
                    (question.correct?'list-group-item-success':'')   */ 
                }
                `}>
                    <label><input
                        type="radio"
                        onClick={() => setAnswer(true)}
                        name={question._id}/>True</label>
                    {
                        (check)&& ("true"!==question.correct)&&(JSON.stringify(answer)==="true")&&
                            <i className="fas fa-times float-right" style={{color:"red"}}></i>
                        /*revealAnswers&&
                            (question.correct?<i className="fas fa-check float-right" style={{color:"green"}}></i>:<i className="fas fa-times float-right" style={{color:"red"}}></i>)*/
                   }
                    {
                        (check)&& ("true"===question.correct)&&
                        <i className="fas fa-check float-right" style={{color:"green"}}></i>
                       /* correct&&
                            (question.correct?<i className="fas fa-check float-right" style={{color:"green"}}></i>:'')*/
                    }
                </li>
                <li className={`list-group-item
                ${
                    (check)&& ("false"!==question.correct)&&(JSON.stringify(answer)==="false")&&
                        ('list-group-item-danger')
                    /*revealAnswers&&
                    (!question.correct?'list-group-item-success':'list-group-item-danger')*/
                }
                ${
                    (check)&& ("false"===question.correct)&&
                        ('list-group-item-success')
                   /* correct&&
                    (!question.correct?'list-group-item-success':'')*/
                }
                `}>
                    <label><input
                        type="radio"
                        onClick={() => setAnswer(false)}
                        name={question._id}/>False</label>
                    {
                        (check)&& ("false"!==question.correct)&&(JSON.stringify(answer)==="false")&&
                            <i className="fas fa-times float-right" style={{color:"red"}}></i>
                       /* revealAnswers&&
                        (!question.correct?<i className="fas fa-check float-right" style={{color:"green"}}></i>:<i className="fas fa-times float-right" style={{color:"red"}}></i>)*/
                    }
                    {
                        (check)&& ("false"===question.correct)&&
                            <i className="fas fa-check float-right" style={{color:"green"}}></i>

                       /* correct&&
                        (!question.correct?<i className="fas fa-check float-right" style={{color:"green"}}></i>:'')*/
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
                            setCheck(true)
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