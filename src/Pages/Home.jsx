import React from 'react'
import { About, Contac, Navbar, Projects, SlideBar } from '../Componentes'
import { info } from '../../public/info'
import { Element } from 'react-scroll'
import './home.css'

const Home = () => {
    return (
        <div className='container_home'>
            <Navbar />
            <div className='container_main'>
            <SlideBar />
                <div className='main'>
                    <h1 className='title'>Desarrollador Web</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aut eum illum quia voluptatum dolor laborum. Ratione unde accusamus voluptatem sed architecto maiores porro blanditiis maxime, aliquam, expedita molestiae est.</p>
                </div>
            </div>
            <Element name='about'>
                <About />
            </Element>
            <Element name='projectos'>
                <Projects />
            </Element>
            <Element name='contac'>
                <Contac />
            </Element>
        </div>
    )
}

export default Home