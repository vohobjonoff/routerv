import React from 'react'
import { Link } from 'react-router-dom'



export default function User({id,name}) {
    return (
        <>
            <h2>{name}</h2>

            <Link to={`./single/${id}`} >
            details
            </Link>
        </>
    ) 
}
