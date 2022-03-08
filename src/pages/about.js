import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import '../styles/sass/about.scss'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      
      <div className="aboutPage">
      <StaticImage
        className="aboutImage"
        alt="Profile picture of me"
        src='../images/about.jpg'
        data-sal="slide-right" 
      data-sal-duration="1000"
      data-sal-delay="200"
      data-sal-easing="ease"
      />
      <div data-sal="fade" 
      data-sal-duration="1000"
      data-sal-delay="200"
      data-sal-easing="ease" className="aboutInfo">
      <h2>Hello there 👋</h2>
      <p>My name is Bernadette and I'm a Full Stack Web Developer currently living in Toronto, ON.</p>
      <p>I graduated with an Honours Bachelor of Science at UofT and have recently pivoted into a career in technology after graduating from the Web Development bootcamp at Lighthouse Labs.</p>
      <p>I love learning new things, hence why I turned to web development! As a creative, I learned coding to make my design ideas functional. Aside from biology and coding, I sometimes teach English online to Japanese students.</p>
      <p>I also love to draw, write about self growth, create motion graphics, and play music!</p>
      <p>If you'd like to know more about me, you can find my contact info <Link to="/contact">here.</Link></p>
      </div>
      </div>
    </Layout>
  )
}

export default AboutPage