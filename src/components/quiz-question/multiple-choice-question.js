import React, {useState, useEffect} from 'react';

const MultipleChoiceQuestion = ({graded,question, questions, setQuestions}) => {
    const [answer, setAnswer] = useState('');
    const choices = question.choices;
    const correctAnswer = answer === question.correct && graded;
    const wrongAnswer = graded && answer !== question.correct && graded;
    let count = 0;
    useEffect(() => {
        if (graded) {
            const diffQues = questions.filter(q => q._id !== question._id);
            const sameQues = questions.find(q => q._id === question._id);
            sameQues.answer = answer;
            const questionList = [...diffQues, sameQues];
            setQuestions(questionList);
        }
    }, [graded])
    return (
        <div>
            <h4>{question.question}
                {correctAnswer && <i className="fas fa-check float-right" style={{color: "green"}}/>}
                {wrongAnswer && <i className="fas fa-times float-right" style={{color: "red"}}/>}</h4>
            <ul className='list-group'>
                {
                    choices.map(choice => {
                        const corr =  question.correct === choice && graded;
                        const showAns = graded && question.correct !== answer && answer === choice;
                        return (<li className={`list-group-item ${corr ? 'list-group-item-success' : ''} ${showAns ? 'list-group-item-danger' : ''}`} key={count++}>
                            <label>
                                <input type='radio' checked={answer === choice} disabled={graded} value={choice} onChange={e => setAnswer(e.target.value)}/>
                                {choice}
                            </label>
                            {
                                corr && <i className="fas fa-check float-right" style={{color: "green"}}/>
                            }
                            {
                                showAns && <i className="fas fa-times float-right" style={{color: "red"}}/>
                            }
                        </li>)
                    })
                }
            </ul>
            <br/>
            <h6>Your Answer: {answer}</h6>
            <br/>
        </div>
    );
}

export default MultipleChoiceQuestion;