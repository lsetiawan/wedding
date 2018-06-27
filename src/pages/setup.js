import React from 'react'
import Link from 'gatsby-link'

const Setup = () => {
    const todo = [
        'Place linens on each tables',
        'Place chair ties on each chair',
        'Place table runners on each round tables',
        'Place centerpieces on each round tables',
        'Place some shells on each round tables',
        'Setup bridal party tables (Bride groom sign)',
        'Decorate one special bistro for sand ceremony (Linen & Tie)',
        'Setup arch (Place feet on front)',
        'Decorate black beams on patio with ribbon',
        'Place backdrops for bridal party tables',
        'Setup photobooth backdrop (White backdrop with silver shimmer)',
        'Setup photoboth table (Have camera, tablet, and props)',
        'Setup guest sign in table next to photobooth (Have guestbook, polaroid, films)',
        'Decorate guest sign in table with shells', 
        'Setup gift table (Money box and advice box)',
        'Setup projector (Screen, projector, laptop, projector stand)',
        'Setup cake table (Cupcake stands, cake)',
        'Place decorations around the venue',
        'Arrange tables and chairs **AFTER CEREMONY**'
    ]

    const bartender = [
        'Fill 2 containers with iced water',
        'Fill 3 containers with non-alcoholic punches',
        'Fill 3 containers with alcoholic drinks',
        'Place Ice in bucket, place beers in them'
    ]
    return (
        <div>
            <h1>Setup To Do List</h1>
            <Link to="/coordinator/">Coordinator Page</Link>

            <ul>
                {todo.map((val, idx) => <li key={idx}>{val}</li>)}
            </ul>

            <h3>Bartender todo</h3>
            <ul>
                {bartender.map((val, idx) => <li key={idx}>{val}</li>)}
            </ul>
        </div>
    )
}

export default Setup