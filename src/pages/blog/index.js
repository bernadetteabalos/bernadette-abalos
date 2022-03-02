import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import "../../styles/sass/work.scss"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Projects">
      <div className="portfolio-grid">
        {
          data.allMdx.nodes.map(node => (
            <article key={node.id}>
             
              <Link to={`/blog/${node.slug}`}>
              <GatsbyImage className="portfolio-item" image={getImage(node.frontmatter.thumbnail)} />
              </Link>
              {/* <p>Posted: {node.frontmatter.date}</p> */}
            </article>
          ))
        }
      </div>
      {/* <div className="publications">
        <h2>Publications</h2>
        <p></p>
        <hr />
      </div>
      <div className="inspo">
        <h2>Self Inspo Comics</h2>
        <hr />
      </div> */}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
      }
    }
  }
`

export default BlogPage