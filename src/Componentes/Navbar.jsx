import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Link as LinkInterno } from 'react-scroll'
import './navbar.css'

const Navbar = () => {
    const location = useLocation()
    const pathname = location.pathname
    const [mostrar, setMostrar] = useState(true)

    useEffect(() => {
        if (pathname === '/') {
            setMostrar(true)
        } else {
            setMostrar(false)
        }
    }, [pathname])

    return (
        <div className='container_navbar'>
            {mostrar ? (
                <>
                    <span className='container_logo'>
                        <img src="public/logo.png" alt="logo" className='logo' />
                        Emanuel Ramos
                    </span>
                    <div className='links'>
                        <LinkInterno to='projectos'>Projectos</LinkInterno>
                        <LinkInterno to='about'>Sobre Mi</LinkInterno>
                        <LinkInterno to='contac'>Contáctame</LinkInterno>
                    </div>
                </>
            ) : (
                <>
                <span>Emanuel Ramos</span>
                <div className='links'>
                    <Link to={'/'}>Home</Link>
                    <LinkInterno to='contac'>Contáctame</LinkInterno>
                </div>
                </>
            )}
        </div>
    )
}

export default Navbar