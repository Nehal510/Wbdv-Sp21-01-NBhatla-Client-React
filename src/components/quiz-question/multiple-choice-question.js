import React, {useState} from "react";

const MultipleChoiceQuestion = ({question}) => {
    const [answer, setAnswer] = useState()
    return(
        <div>
            <h4>{question.question}</h4>
            {/*{question.correct}*/}
            {
                question.choices.map((choice) => {
                    return(
                        <>
                        <label>
                            <input type="radio" name={question._id}/>
                            {choice}
                        </label>
                        <br/>
                        </>
                    )
                })
            }
            <h6>Your Answer: {JSON.stringify(answer)}</h6>
            <button type="button" className="btn btn-success">Grade</button>
            <br/>
            <br/>
        </div>
    )
}

export default MultipleChoiceQuestion;