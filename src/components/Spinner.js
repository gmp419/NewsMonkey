import React, { Component } from 'react'
import loader from './loader.gif'

const spinner = () => { 
    return (
        
            <div className="text-center">
                <img src={loader} alt=""
                />
            </div>
        
    )
}

export default spinner
