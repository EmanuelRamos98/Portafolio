import React from 'react'
import { useParams } from 'react-router-dom'
import { projectos } from '../../public/info'

const Detalles = () => {
    const { detalles_id } = useParams()
    const detalles = projectos.find(detalles => detalles.id === Number(detalles_id))

    return (
        <div>
            {detalles.titulo}
            <div>
                {detalles.descripcion}
            </div>
        </div>
    )
}

export default Detalles