import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div>
            <h2>404</h2>
            <p>PAGE NOT FOUND</p>
            <Link to={'/'}>volver</Link>
        </div>
    )
}

export default Error