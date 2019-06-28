import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

import buttonBirdyTop from "../images/LillianUnicornNextPage.png"

export default class arkLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data

    const currentPage = markdownRemark.frontmatter.sidetall
    const prevPage =
      currentPage - 1 === 0
        ? "/"
        : (currentPage - 1).toString() + "/" + (currentPage - 1).toString()

    const prevPageLink = (currentPage - 1).toString()

    var conCurrentPage = Number(currentPage)
    const nextPage =
      (conCurrentPage + 1).toString() + "/" + (conCurrentPage + 1).toString()
    const nextPageLink = (conCurrentPage + 1).toString()

    return (
      <div>
        <ul
          style={{
            background: `pink`,
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,

            margin: 0,
            marginBottom: 0,
          }}
        >
          <li>
            {prevPage && (
              <Link to={`/${prevPage}`} rel="prev">
                ← {prevPageLink}
              </Link>
            )}
          </li>
          <li>
            {nextPage && (
              <Link to={`/${nextPage}`} rel="next">
                {nextPageLink} →
              </Link>
            )}
          </li>
        </ul>

        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
        <ul
          style={{
            background: `pink`,
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,

            margin: 0,
            marginBottom: 0,
          }}
        >
          <li>
            {prevPage && (
              <Link to={`/${prevPage}`} rel="prev">
                ← {prevPage}
              </Link>
            )}
          </li>
          <li>
            {nextPage && (
              <Link to={`/${nextPage}`} rel="next">
                <img
                  style={{
                    width: "333px",
                    background: `pink`,
                  }}
                  src={buttonBirdyTop}
                  alt="Unicorn button bottom"
                />
              </Link>
            )}
          </li>
        </ul>
        <h1>Yo</h1>
      </div>
    )
  }
}

export const BokArkQuery = graphql`
  query BokArkQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        sidetall
      }
    }
  }
`
