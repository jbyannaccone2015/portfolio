import React from 'react'
import ocean from './divider-img.jpg'
import './Divider.css'

function Divider() {
    return (
        <div>
            <div className="dimgContainer">
                <img className="ocean" src={ocean} />
            </div>
        </div>
    )
}

export default Divider
