import React from 'react'
import Link from 'gatsby-link'

const Coordinator = () => {
    const pageLinks = [
        { title: 'Reception Schedule', url: '/' },
        { title: 'Day Schedule', url: '/day-schedule/' },
        { title: 'Ceremony Outline', url: '/ceremony-outline/' },
        { title: 'Ceremony Venue Layout', url: '/ceremony-layout/' },
        { title: 'Inventory List', url: '/inventory/' },
        { title: 'Setup To Do List', url: '/setup/' },
        { title: 'Tear Down To Do List', url: '/tear-down/' }
    ]

    return (
        <div>
            <h1>Welcome to the Coordinator Page</h1>
            <p>Note from Darian and Don:</p>
            <p>
                Thank you so much for being a part of our wedding. 
                We truly appreciate all of your help in putting this together!
                All of this wonderful celebration couldn't happen without you! 
            </p>

            <h2>Links to various information for the wedding</h2>
            <ul>
                {
                    pageLinks.map(
                        (val, idx) => 
                        <li key={idx}><Link to={val.url}>{val.title}</Link></li>
                    )
                }
            </ul>
        </div>
    )
}

export default Coordinator