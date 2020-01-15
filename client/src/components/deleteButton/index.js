import React from "react"
import "./style.css"

function DeleteBtn(props) {
    return(
        <button type="button"
        onClick={e => props.onClick(e)}
        className={`btn btn-danger mx-2 ${props["data-value"]}`} {...props} >X</button>
    )
}

export default DeleteBtn