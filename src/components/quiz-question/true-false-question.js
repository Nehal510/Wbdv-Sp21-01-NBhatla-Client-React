import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
    const [answer, setAnswer] = useState()
    return (
        <div>
            <h4>
                {question.question}
                {
                    answer == question.correct &&
                    <i className="fas fa-check"></i>
                }
                {
                    answer != question.correct &&
                    <i className="fas fa-times"></i>
                }
            </h4>
            {/*{question.correct}
            <br/>
            {JSON.stringify(answer)}
            <br/>*/}
            <label><input
                type="radio"
                onClick={() => setAnswer(true)}
                name={question._id}/>True</label>
            <br/>
            <label><input
                type="radio"
                onClick={() => setAnswer(false)}
                name={question._id}/>False</label>
            <h6>Your Answer: {JSON.stringify(answer)}</h6>
            <button type="button" className="btn btn-success">Grade</button>
            <br/>
            <br/>
        </div>
    )
}

export default TrueFalseQuestion;