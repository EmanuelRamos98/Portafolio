import React from 'react'
import { About, Contac, Navbar, Projects } from '../Componentes'
import { info } from '../../public/info'
import { Element } from 'react-scroll'


const Home = () => {
    return (
        <>
            <Navbar />
            <h1>Emanuel Ramos</h1>
            <h3>Desarrollador Web</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aut eum illum quia voluptatum dolor laborum. Ratione unde accusamus voluptatem sed architecto maiores porro blanditiis maxime, aliquam, expedita molestiae est.</p>
            {info.map(tecnologias => {
                return (
                    <button key={tecnologias.id}>{tecnologias.nombre}</button>
                )
            })}
            <Element name='about'>
                <About />
            </Element>
            <Element name='projectos'>
                <Projects />
            </Element>
            <Element name='contac'>
                <Contac />
            </Element>
        </>
    )
}

export default Home