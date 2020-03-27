import React from 'react'
import { Link } from 'react-router-dom'

export const notFoundPage = () => (
    <div>
        <h1>404!! NOT FOUND</h1>
        <Link to="/"> Go Home</Link>
    </div>
)