import React from 'react'
import { Document, Page } from 'react-pdf'
import Link from 'gatsby-link'

const CeremonyLayout = () => {
    return (
        <div>
            <h1>Ceremony Layout</h1>
            <Link to="/coordinator/">Coordinator Page</Link>

            <Document 
                file="/static/docs/venueplanceremony.pdf">
                <Page pageNumber={1} />
            </Document>

        </div>
    )
}

export default CeremonyLayout
