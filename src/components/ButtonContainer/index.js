import React from "react"
import DeleteBtn from "../deleteButton"
import SaveBtn from "../SaveButton"

function ButtonContainer(props) {
    return(
        <div>
            {!props.saved ? (
                <>
                <SaveBtn key={props.id} onClick={props.handleSave} />
                </>
            ) : (
                <>
                <DeleteBtn id={props.id} onClick={props.delete} />
                </>
            )}
        </div>
    )
}

export default ButtonContainer