import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 * image source is: https://commons.wikimedia.org/wiki/File:1901_First_Edition_of_Peter_Rabbit.jpg
 */

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "1901_Peter_Rabbit_wikimedia.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1224) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.file.childImageSharp.fluid} />}
  />
)
export default Image
