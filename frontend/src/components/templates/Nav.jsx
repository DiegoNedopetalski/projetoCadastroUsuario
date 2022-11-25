import './Nav.css'
import React from 'react'

export default function Nav() {
    return (
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar */}
            <a href="#/">
                <i className="fa fa-home"></i> Início
            </a>    
            <a href="#/users">
                <i className='fa fa-users'></i> Usuários
            </a>
            
        </nav>
    </aside>
    )
}