import React from 'react'
import { Link as LinkInterno } from 'react-scroll'

const Navbar = () => {
    return (
        <div>
            <LinkInterno to='projectos'> Projectos</LinkInterno>
            <LinkInterno to='about'> Sobre Mi</LinkInterno>
            <LinkInterno to='contac'> Contac mi</LinkInterno>
            <hr />
        </div>
    )
}

export default Navbar