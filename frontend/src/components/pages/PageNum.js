import React from 'react'

const PageNum = () => {
    return (
        <ul className="pagination justify-content-center mb-4">
            <li className="page-item">
                <a className="page-link" href="#!">&larr; Older</a>
            </li>
            <li className="page-item disabled">
                <a className="page-link" href="#!">Newer &rarr;</a>
            </li>
        </ul>
    )
}

export default PageNum
