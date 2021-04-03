import React, {useState} from 'react';
import {Link, useParams} from "react-router-dom";


const ImageWidget = ({to, deleteItem, updateItem, _widget}) =>{
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
                        URL
                        <input onChange={(e) => setWidget(widget => ({...widget, srcUrl: e.target.value}))} value={widget.srcUrl} className="form-control"/>
                        Width
                        <input onChange={(e) => setWidget(widget => ({...widget, width: e.target.value}))} value={widget.width} className="form-control"/>
                        Height
                        <input onChange={(e) => setWidget(widget => ({...widget, height: e.target.value}))} value={widget.height} className="form-control"/>
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
                        <h4>Image Widget</h4>
                        <img src={_widget.srcUrl} height={_widget.height} width={_widget.width}></img>
                    </Link>
                </div>
            }
        </div>
    )
}

export default ImageWidget