import React from 'react'
import { useParams } from 'react-router'



export default function User() {
    const { id } = useParams();
    return <div>{id}</div> 
}
