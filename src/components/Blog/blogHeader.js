import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Fade from "react-reveal/Fade"

const BlogHeader = ({ post }) => {
  const hasImage = !!post.node.frontmatter.featuredimage
  const image = hasImage
    ? getImage(post.node.frontmatter.featuredimage)
    : null

  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-[#f5f9e9]">
      <Fade duration={2000}>
        <div className="max-w-6xl w-full px-4 mx-auto flex justify-center">
          
          {/* GRID DINAMIS */}
          <div
            className={`grid gap-10 items-center ${
              hasImage ? "lg:grid-cols-2" : "grid-cols-1 justify-items-center"
            }`}
          >
            {/* TEXT */}
            <div className="bg-gradient-to-r from-green to-purple p-10 rounded-2xl shadow-xl max-w-xl">
              <Link to={post.node.fields.slug} className="no-underline">
                <h1 className="text-white text-3xl lg:text-4xl font-semibold mb-4">
                  {post.node.frontmatter.title}
                </h1>
              </Link>

              <p className="text-white/90 leading-relaxed text-base">
                {post.node.frontmatter.description}
              </p>
            </div>

            {/* IMAGE (HANYA JIKA ADA) */}
            {hasImage && (
              <Link to={post.node.fields.slug}>
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <GatsbyImage
                    image={image}
                    alt={post.node.frontmatter.title}
                    className="w-full h-full object-cover"
                    quality={90}
                  />
                </div>
              </Link>
            )}
          </div>

        </div>
      </Fade>
    </section>
  )
}

export default BlogHeader
