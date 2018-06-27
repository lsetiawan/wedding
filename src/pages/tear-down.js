import React from 'react'
import Link from 'gatsby-link'

const TearDown = () => {
    const todo = [
        'TBD'
    ]
    return (
        <div>
            <h1>Tear Down To Do List</h1>
            <Link to="/coordinator/">Coordinator Page</Link>

            <ul>
                {todo.map((val, idx) => <li key={idx}>{val}</li>)}
            </ul>
        </div>
    )
}

export default TearDown