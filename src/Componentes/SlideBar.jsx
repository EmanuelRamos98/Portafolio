import React from 'react'
import { SlSocialInstagram } from "react-icons/sl"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import './slideBar.css'


const SlideBar = () => {
    return (
        <div className='container_slidebar'>
            <div className='slidebar'>
                <SlSocialInstagram className='redes' />
                <FaLinkedin className='redes' />
                <FaGithub className='redes' />
                <BsWhatsapp className='redes' />
            </div>
        </div>
    )
}

export default SlideBar