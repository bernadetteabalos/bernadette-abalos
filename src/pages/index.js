import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout 
    pageTitle="hello, I'm bernadette.">
      <p data-sal="fade" 
      data-sal-duration="1000"
      data-sal-delay="200"
      data-sal-easing="ease">
        hello! my name is Bernadette and I'm a web developer and designer.
        <br/>I love creating functional web apps that look pretty neat!
      </p>
      {/* <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://images.pexels.com/photos/3185509/pexels-photo-3185509.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      /> */}
    </Layout>
  )
}

export default IndexPage