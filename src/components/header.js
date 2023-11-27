import React from 'react'
import { NavLink } from 'react-router-dom'

function Header(){
    return(
        <div>
            <header style={{
                display:'flex',
                justifyContent: 'space-around',
                width: '100%',
                height: '90px',
                background: 'blue',
                alignItems: 'center',
                color:'white'
            }}>
                <h1> React Router Dom </h1>
                <nav style={{display:'flex', gap: '50px'}}>
                    <NavLink to='home-page' style={{color:'white', fontSize: '25px'}} > главная </NavLink>
                    <NavLink to='about-page' style={{color:'white', fontSize: '25px'}} > о нас </NavLink>
                    <NavLink to='contact-page' style={{color:'white', fontSize: '25px'}} > контакты </NavLink>
                </nav>
            </header>
        </div>
    )
}
export default Header