import React from 'react'
import './about.css'
import { pages } from '../../data/pagesData'

export default function About() {
    return (
        <>
        <div className='aboutHero'>
                <h1>{pages[0].hero}</h1>
        </div>

            <div className="aboutContainer">
                <div className="columnLeft">
                    <h1>{pages[0].title}</h1>
                    <p>{pages[0].text}</p>
                </div>
            <div className="columnRight">
                <img src={pages[0].heroImg} alt={pages[0].alt} />
            </div>
            </div>

        </>
    )
}
