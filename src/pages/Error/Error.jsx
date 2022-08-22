import React from 'react'
import { Link } from 'react-router-dom'
import './error.css'

export default function Error() {
    return (
        <div className="error">

        <div className='error-container'>
            <div className="error-text-wrapper">
                <div className="error-title" data-content="404">
                    404
                </div>

                <div className="error-subtitle" data-content="Oops, the page you're looking for doesn't exist">
                    Oops, the page you're looking for doesn't exist.
                </div>

                <div className="error-buttons">
                    <Link className="error-button" to='/' >Go to homepage</Link>
                </div>
            </div>
        </div>
            
        </div>
    )
}
