import React from 'react'
import { info } from '../../public/info'
import './About.css'

const About = () => {
    return (
        <div className='container_sobre_mi'>
            <div className='sobre_mi'>
                <h2>Sobre Mi</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo ipsam totam reprehenderit, quidem minima vel rerum ducimus accusamus obcaecati autem voluptatibus cum modi! Suscipit maxime, a beatae porro ab perspiciatis.</p>
            </div>
            <div className='container_sobre_mi_info'>
                <div className='container_formacion'>
                    <h3>Mi formacion</h3>
                    <p className='info'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae autem quo a ratione. Enim omnis iure velit quaerat adipisci repellendus voluptatum eligendi porro! Sequi saepe nesciunt vel voluptatem enim excepturi.
                        Nesciunt, laudantium libero quibusdam blanditiis neque reiciendis sequi, incidunt, nihil magnam harum veniam. Odio iure distinctio aut vel molestias veritatis, nemo ut aspernatur excepturi, soluta fugiat minima in ex eum.
                        Quisquam provident quo quos ducimus quam dolores, aut accusamus! Rem ipsum ex cumque illo beatae unde accusamus doloribus possimus, dolorum aliquam ut eaque at iusto? Iusto est dicta magnam vitae.
                        Deserunt, labore. Fuga cum facere omnis voluptates blanditiis illum aut, in ad repellendus aliquam reprehenderit dicta commodi, minus autem. Culpa consequuntur et aliquam sequi delectus atque dolores, reiciendis mollitia aut.</p>
                </div>
                <div className='container_habilidades'>
                    <h3>Habilidades</h3>
                    {info.map(habilidades => {
                        return (
                            <>
                                <div key={habilidades.id}>
                                    {habilidades.nombre}
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}

export default About