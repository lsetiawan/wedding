import React from 'react'
import Link from 'gatsby-link'
import CeremonyVenuePDF from '../assets/venueplanceremony.pdf';
import ReceptionVenuePDF from '../assets/reception-venue-layout.pdf';

const Coordinator = () => {
    const pageLinks = [
        { title: 'Reception Schedule', url: '/', asset: false },
        { title: 'Day Schedule', url: '/day-schedule/', asset: false },
        { title: 'Reception Venue Layout', url: ReceptionVenuePDF, asset: true },
        { title: 'Ceremony Outline', url: '/ceremony-outline/', asset: false },
        { title: 'Ceremony Venue Layout', url: CeremonyVenuePDF, asset: true },
        { title: 'Inventory List', url: '/inventory/', asset: false },
        { title: 'Setup To Do List', url: '/setup/', asset: false },
        { title: 'Tear Down To Do List', url: '/tear-down/', asset: false }
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
                    pageLinks.map((val, idx) => {
                        const resolvedLink = val.asset
                            ? <a href={val.url}>{val.title}</a>
                            : <Link to={val.url}>{val.title}</Link>;
                        return <li key={idx}>{resolvedLink}</li>;
                    })
                }
            </ul>
        </div>
    )
}

export default Coordinator