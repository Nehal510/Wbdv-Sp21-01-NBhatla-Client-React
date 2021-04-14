import React,{useState} from "react";

const MultipleChoiceQuestion = ({question}) => {
    const [correct, setCorrect] = useState(false);
    const [answer, setAnswer] = useState('');
    const [revealAnswers, setRevealAnswers] = useState(false);
    return (
        <div>
            <h4>{question.question}{
                revealAnswers&&(
                    answer===question.correct? <i className="fas fa-check float-right" style={{ color: 'green'}} ></i>:<i className="fas fa-times float-right" style={{ color: 'red'}}></i>
                )
            }
                {
                    correct&&(
                        <i className="fas fa-check float-right" style={{ color: 'green'}}></i>
                    )
                }
            </h4>
            {/* {question.correct}*/}
            <br/>
            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        return (
                            <li className={`list-group-item ${revealAnswers && (question.correct===choice?`list-group-item-success`:
                                answer===choice?`list-group-item-danger`:'')
                            } ${ correct && (question.correct === choice?`list-group-item-success`:'')}`}
                                key={question._id}>
                                <label>
                                    <input type="radio"
                                           onClick={() => setAnswer(choice)}
                                           name={question._id}/>
                                    {' '}
                                    {choice}
                                </label>
                                {
                                    revealAnswers&&((question.correct === choice)?
                                            <i className="fas fa-check float-right" style={{ color: 'green'}} ></i> :
                                            (answer===choice)?
                                                <i className="fas fa-times float-right" style={{ color: 'red'}}></i>:''
                                    )
                                }
                                {
                                    correct&&( question.correct === choice?
                                            <i className="fas fa-check float-right" style={{ color: 'green'}}></i>:``
                                    )
                                }
                            </li>

                        )

                    })
                }
            </ul>
            <br/>
            <h6>Your answer: {answer}</h6>
            <br/>
            <button className="btn btn-success" onClick={() =>

            {
                if (answer === question.correct) {
                    setCorrect(true);
                    setRevealAnswers(false)
                }
                else {
                    setCorrect(false);
                    setRevealAnswers(true);
                }
            }
            }>Grade</button>
            <br/>
            <br/>
        </div>
    )
}

export default MultipleChoiceQuestion;