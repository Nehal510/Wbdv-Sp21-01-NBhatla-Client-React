import React, {useState} from 'react';
import {Link, useParams} from "react-router-dom";

const ListWidget = ({to, deleteItem, updateItem, _widget}) =>{
    const [editing, setEditing] = useState(false)
    const [widget, setWidget] = useState(_widget)
    return(
        <div>
            {
                editing &&
                <>
                    <i onClick={() => {
                        deleteItem(widget)
                        setWidget({})
                        setEditing(false)
                    }} className="fas fa-trash float-right"></i>
                    <i onClick={() => {
                        updateItem(widget)
                        setWidget({})
                        setEditing(false)
                    }} className="fas fa-check float-right"></i>
                    <div>
                        <select onChange={(e) => setWidget(widget => ({...widget, type: e.target.value}))} value={widget.type} className="form-control">
                            <option value={"HEADING"}>Heading</option>
                            <option value={"PARAGRAPH"}>Paragraph</option>
                            <option value={"LIST"}>List</option>
                            <option value={"IMAGE"}>Image</option>
                        </select>
                        <input type="checkbox" onChange={(e) => {setWidget(widget => ({...widget, ordered: (e.target.checked) ? 1 : 0}))}} checked={(widget.ordered === 1)}/>Ordered
                        <br/>
                        List Items
                        <textarea onChange={(e) => setWidget(widget => ({...widget, text: e.target.value}))} value={widget.text} className="form-control" rows={10}>
                        </textarea>
                    </div>
                </>
            }
            {
                !editing &&
                <div>
                    <Link to={to} className="textColor" style={{textDecoration:"none"}}>
                        <i onClick={() => {setEditing(true)
                            setWidget(_widget)
                        }} className="fas fa-cog float-right"></i>
                        <h4>List Widget</h4>
                        <>
                        {
                            _widget.ordered==1 &&
                            <ol>
                                {
                                    _widget.text.split("\n").map(item => {
                                        return(
                                            <li>{item}</li>
                                        )
                                    })
                                }
                            </ol>
                        }
                        {
                            (_widget.ordered==0 || _widget.ordered===null) &&
                            <ul>
                                {
                                    _widget.text.split("\n").map(item => {
                                        return(
                                            <li>{item}</li>
                                        )
                                    })
                                }
                            </ul>
                        }
                        </>
                    </Link>
                </div>
            }
        </div>
    )
}

export default ListWidget