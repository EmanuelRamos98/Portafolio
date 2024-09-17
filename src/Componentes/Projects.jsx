import React from 'react'
import { projectos } from '../../public/info'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <>
            {projectos.map(projectos => {
                return (
                    <div key={projectos.id}>
                        <h3> {projectos.titulo}</h3>
                        <p>{projectos.descripcion}</p>
                        <img src={projectos.imagen} alt="" />
                        <Link to={'/detalles/' + projectos.id}>ver +</Link>
                    </div>
                )
            })}
        </>
    )
}

export default Projects