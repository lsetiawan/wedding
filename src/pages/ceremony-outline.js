import React from 'react'

const CeremonyOutline = () => {
    const musicStyle = {
        fontSize: '20px',
        color: 'grey'
    }

    const listStyle = {
        marginTop: '20px'
    }

    const familyOrder = [
        'Myron & Pat',
        'Betty Lou & Melvin',
        'Jean',
        'Marvin', 
        'Bill & Retno',
        'Jennifer',
        'Janet',
        'Pastor Luke & Don'
    ]

    const bridalPartyOrder = [
        'Will & Leeanne',
        'Deondre & Rixana',
        'Carter & Katelyn', 
        'Adrian & Keisha',
        'Minh & Samantha'
    ]

    const brideOrder = [
        'Nolan (Ring Bearer)', 
        'Calleigh & Bella (Flower Girls)',
        'Darian, Jim (right), Clay (left)'
    ]

    return (
        <div>
            <h1>Wedding Ceremony Outline</h1>

            <h2>Family / Groom / Pastor Entrance</h2>
            <span style={musicStyle}>Music: Nuvole bianche</span>
            <ol style={listStyle}>
                {familyOrder.map((val, idx) => <li key={idx}>{val}</li>)}
            </ol>

            <h2>Wedding Party Entrance</h2>
            <span style={musicStyle}>Music: Motion Picture Soundtrack (Westworld: Season 1) by Vitamin String Quartet</span>
            <ol style={listStyle}>
                {bridalPartyOrder.map((val, idx) => <li key={idx}>{val}</li>)}
            </ol>

            <h2>Bride Entrance</h2>
            <span style={musicStyle}>Music: Jason Mraz - I Won't Give Up (Piano/Violin & Piano Percussion) - Tanner Townsend and Brigham Dastrup</span>
            <ol style={listStyle}>
                {brideOrder.map((val, idx) => <li key={idx}>{val}</li>)}
            </ol>

            <h2>Ceremony</h2>
            <p>
                Welcome <br/>
                Statement on the gift of marriage <br/>
                Prayer <br/>
                Declarations of intent <br/>
                Affirmations of the Families <br/>
                Affirmation of the Congregation <br/>
                Reading from Scripture (1 Corinthians 13:1-13) <br/>
                Message <br/>
                Vows <br/>
                Exchange of Rings <br/>
                Pouring of the Unity Sand & License Signing! <span style={musicStyle}>Music: Come Thou Fount of Every Blessing by Bruce Kurnow</span> <br/>
                Prayer <br/>
                Lord’s Prayer <br/>
                Announcement of Marriage <br/>
                Charge to the Couple <br/>
                Blessing <br/>
            </p>

            <h2>Recessional</h2>
            <span style={musicStyle}>Music: I Love You Will Still Sound The Same by Oh Honey</span>
            <ol style={listStyle}>
                <li key={'brideandgroom'}>Landung & Darian</li>
                {bridalPartyOrder.reverse().map((val, idx) => <li key={idx}>{val}</li>)}
                <li key={'pastor'}>Pastor</li>
            </ol>
        </div>
    )
}

export default CeremonyOutline