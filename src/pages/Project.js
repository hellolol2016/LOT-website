import React from 'react'
import { useParams, Link } from 'react-router-dom'
function Project() {
    const { id } = useParams();
    console.log(id)
    return (
        <h2>SINGLE PROJECT COMPONENT</h2>
        
    
    )
}

export default Project
