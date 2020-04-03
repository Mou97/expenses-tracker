
import React from 'react'

export default ({ description, amount, createdAt }) => {
    return (
        <div>
            <h3>{description}</h3>
            <p>{amount} - {createdAt}</p>
        </div>
    )
}
