import React from 'react'

const Comment = ({cmnt: {name,body}}) => {
    //console.log(name)
    return (
        <div className="media mb-4">
        <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
        <div className="media-body">
            <h5 className="mt-0">{name}</h5>
            {body}
        </div>
        </div>

    )
}

export default Comment
