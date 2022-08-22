import React from 'react'
import loadingGif from '../images/loading3.gif'

export default function Loading() {
    return (
        <div className='loading'>
            <h4>PROJECTS ARE LOADING</h4>
            <img src={loadingGif} alt="circle loading"/>
        </div>
    )
}
