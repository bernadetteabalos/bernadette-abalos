/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import '../../styles/sass/workItem.scss'

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <div className="workPage">
        <GatsbyImage
          data-sal="fade"
          data-sal-duration="1000"
          data-sal-delay="200"
          data-sal-easing="ease"
          className="workImage"
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}
        />
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
        <div className="back">
        <Link sx={{
          color: 'text'
        }} to="/blog" >
          ← back to projects
        </Link>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`

export default BlogPost