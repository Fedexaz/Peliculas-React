import React from 'react'

export default function Loader() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="lds-ripple"><div></div><div></div></div>
            Cargando...
        </div>
    )
}
