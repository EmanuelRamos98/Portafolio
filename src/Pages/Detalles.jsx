import React from 'react'
import { useParams } from 'react-router-dom'
import { projectos } from '../../public/info'
import Navbar from '../Componentes/Navbar'
import { Element } from 'react-scroll'
import { Contac } from '../Componentes'

const Detalles = () => {
    const { detalles_id } = useParams()
    const detalles = projectos.find(detalles => detalles.id === Number(detalles_id))

    return (
        <div>
            <Navbar />
            <h2>{detalles.titulo}</h2>
            <div>
                {detalles.descripcion}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione repudiandae ab distinctio ipsam officia tempora quibusdam modi. Ducimus nobis magni, assumenda odio omnis, est quidem numquam repellendus, quod fugit maiores.
                Alias fugit nostrum expedita dolorem molestias corporis praesentium, non, est delectus nesciunt autem voluptatem distinctio officia cumque minima suscipit optio. Sunt suscipit cum ipsam quas amet architecto repudiandae expedita laudantium?</p>
            </div>
            <Element name='contac'>
                <Contac />
            </Element>
        </div>
    )
}

export default Detalles