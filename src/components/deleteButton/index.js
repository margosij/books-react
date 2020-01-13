import React from "react"
import "./style.css"

function DeleteBtn(props) {
    return(
        <span className="delete-button btn btn-danger float-right" {...props} role="button" tabIndex="0">X</span>
    )
}

export default DeleteBtn