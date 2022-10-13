import React from 'react'
import './about.css'
import ME from '../../images/me-about.jpg'
import {RiAwardFill} from 'react-icons/ri'
import {HiUserGroup} from 'react-icons/hi'
import {BsFillFolderFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>1 Year Experience</small>
            </article>

            <article className="about__card">
              <HiUserGroup className="about__icon" />
              <h5>Clients</h5>
              <small>None</small>
            </article>

            <article className="about__card">
              <BsFillFolderFill className="about__icon" />
              <h5>Projects</h5>
              <small>2 Projects</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta accusantium architecto tempore molestias eum possimus ad voluptates a, ipsum incidunt non quisquam corporis nihil minus enim adipisci. Assumenda, explicabo similique?
          </p>

          <a href="#contact" className='btn btn-primary'>Get in Touch</a>

        </div>
      </div>
    </section>
  );
}

export default About