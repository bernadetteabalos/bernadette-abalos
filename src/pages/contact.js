import * as React from 'react'
import Layout from '../components/layout'
import { BsFillEnvelopeFill, BsMedium, BsGithub, BsLayoutTextSidebarReverse, BsLinkedin, BsLink  } from "react-icons/bs";
import '../styles/sass/contact.scss'

const ContactPage= () => {
  return (
    <Layout pageTitle="Contact">
      <div data-sal="fade" 
      data-sal-duration="1000"
      data-sal-delay="200"
      data-sal-easing="ease" className="contact">
      <a className="contactItem"target="_blank" rel="noopener noreferrer" 
      href="mailto:bernadette.roseabalos@gmail.com">
      <BsFillEnvelopeFill className="icon" /> | email 
      </a>
      <a className="contactItem" target="_blank" rel="noopener noreferrer"
      href="https://github.com/bernadetteabalos">
      <BsGithub className="icon" /> | github
      </a>
      <a className="contactItem" target="_blank" rel="noopener noreferrer"
      href="https://www.canva.com/design/DAE0VnYtwYk/IbrBEc2GkyzwcS5pYhgyaA/view?utm_content=DAE0VnYtwYk&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton">
      <BsLayoutTextSidebarReverse className="icon" /> | resume
      </a>
      <a className="contactItem" target="_blank" rel="noopener noreferrer"
      href="https://www.linkedin.com/in/bernadette-abalos-29b714199">
      <BsLinkedin className="icon" /> | linkedin
      </a>
      <a className="contactItem" target="_blank" rel="noopener noreferrer"
      href="https://medium.com/@bern.roseabalos">
      <BsMedium className="icon" /> | medium
      </a>
      </div>
    </Layout>
  )
}

export default ContactPage