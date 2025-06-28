import React from 'react'

export default function VirtualDOM() {
    return (
        <div>
            <h2>Virtual DOM</h2>
            <p>
                React creates a lightweight in-memory representation of the real DOM
                called the Virtual DOM.
            </p>
            <p>
                It compares previous and current virtual DOM trees to determine the
                most efficient way to update the real DOM.
            </p>

        </div>
    )
}
