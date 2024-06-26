import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { PiDotLight } from "react-icons/pi";
import '../components/layout.module.css'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
    <div className="social-icons-container">
    <a href="https://github.com/KazumaWada" target="_blank" rel="noopener noreferrer">
      <FaGithub size={30} /> 
    </a>
    <PiDotLight />
    <a href="https://instagram.com/imnotkatsuma" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={30} />
    </a>
    <PiDotLight />
    <a href="https://note.com/imnotkatsuma" target="_blank" rel="noopener noreferrer">
      <TfiWrite size={30} />
    </a>

    <p>kazumawada.aus@gmail.com</p>
  </div>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage
