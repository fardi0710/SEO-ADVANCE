import React from "react"
import BlogHeader from "../components/Blog/blogHeader"
import BlogsContainer from "../components/Blog/blogsContainer"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const Blog = ({ data }) => {
  console.log("data", data)
  let HeaderPost = data?.allMarkdownRemark?.edges[0]
  let otherPosts = data?.allMarkdownRemark?.edges.slice(1)

  return (
    <Layout>
      <Seo
        title="TK Fathul Insani - Blog"
        description="Read the latest articles and updates from TK Fathul Insani.  Stay informed about our activities and educational content for parents and children."
      ></Seo>
      <BlogHeader post={HeaderPost} />
      <BlogsContainer data={otherPosts} />
    </Layout>
  )
}

export default Blog

export const WorkPageQuery = graphql`
  query IndexPage {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: 30
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD:MM:YYYY hh:mm a")
            title
            description
            featuredimage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
