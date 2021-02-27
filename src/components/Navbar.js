  
import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = (props) => {

    return (
        <div>
            <h1>
            <Link to='/' style={{ padding: 25 }}>Portfolio</Link>
            <Link to='/about' style={{ padding: 25 }}>About</Link>
            <Link to='/blog' style={{ padding: 25 }}>Blog</Link>
            <Link to='/contact' style={{ padding: 25 }}>Contact</Link>
            </h1>
        </div>
    )
}

export default Navigation