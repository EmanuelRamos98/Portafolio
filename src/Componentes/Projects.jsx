import React from 'react'
import { projectos } from '../../public/info'
import { Link } from 'react-router-dom'
import './projects.css'

const Projects = () => {
    return (
        <>
            <div className="title_section_projectos">
                <h2>PROJECTOS</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit, voluptatum pariatur quidem perferendis eligendi laboriosam temporibus dolores in adipisci, provident, id dignissimos animi. Sit at mollitia quaerat esse veniam?
                    Exercitationem libero quidem et. Maxime, quibusdam ea est nostrum omnis ratione id beatae at doloribus saepe aliquam iusto dolores eligendi nulla suscipit culpa quam quis ullam nesciunt vel? Aperiam, possimus.
                    Veritatis ullam quasi quod unde suscipit veniam blanditiis id qui similique, odio quibusdam expedita harum quia numquam pariatur nostrum tenetur sequi sit et aperiam? Quidem nam veritatis consequatur harum at.</p>
            </div>
            {projectos.map(projectos => {
                return (
                    <div key={projectos.id} className='proyecto_container'>
                        <div className='proyectos'>
                            <img src={projectos.imagen} alt="imagen del proyecto" className='imagen_proyecto' />
                        </div>
                        <div className='title_proyecto_conteiner'>
                            <h3 className='title_proyecto' > {projectos.titulo}</h3>
                            <p className='descripcion_proyecto'>{projectos.descripcion}</p>
                            <button className='btn_proyecto'>
                                <Link to={'/detalles/' + projectos.id}>ver +</Link>
                            </button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Projects