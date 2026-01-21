import React from 'react'

export default function GalaryLayout({ children, modal }) {
    return (
        <div>
            {modal}
            {children}
        </div>
    )
}
