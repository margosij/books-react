import React from 'react'

function SaveBtn(props){
    return(
        <>
        <button type="button" 
        onClick={e => props.onClick(e)} 
        className={`btn btn-success mx-2 ${props["data-value"]}`} {...props} >
            Save
        </button>
        </>
    )
}

export default SaveBtn