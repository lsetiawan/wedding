import React from 'react'
import Link from 'gatsby-link'

const Inventory = () => {
    const inventory = [
        { quantity: 2, item: 'Polaroid Camera' },
        { quantity: 300, item: 'Polaroid Films' },
        { quantity: 200, item: 'Chair Ties' },
        { quantity: '', item: '...' }
    ]

    return (
        <div>
            <h1>Inventory List</h1>
            <Link to="/coordinator/">Coordinator Page</Link>

            <ul>
                {inventory.map((val, idx) => <li key={idx}>{val.quantity} {val.item}</li>)}
            </ul>
        </div>
    )
}

export default Inventory