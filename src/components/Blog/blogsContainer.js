import React from "react"
import Fade from "react-reveal/Fade"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const BlogsContainer = ({ data }) => {
  const posts = data?.map(item => ({
    featuredimage: item.node.frontmatter.featuredimage,
    title: item.node.frontmatter.title,
    description: item.node.frontmatter.description,
    slug: item.node.fields.slug,
  }))

  return (
    <div className="max-w-7xl mx-auto mt-10 px-8 text-green">
      {/* HEADER BLOG */}
      <Fade bottom>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700">
            Artikel & Kegiatan RA / TK Fathul Insani
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            Membagikan cerita, kegiatan, dan edukasi untuk orang tua dan anak-anak
          </p>
        </div>
      </Fade>

      {/* BLOG GRID */}
      <Fade bottom cascade>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((blog, i) => (
            <Link
              key={i}
              to={blog.slug}
              style={{ textDecoration: "none", color: "black" }}
              className="group"
            >
              <div className="rounded-xl overflow-hidden shadow-md bg-white transition-all duration-300 group-hover:shadow-xl">
                <GatsbyImage
                  image={getImage(blog.featuredimage)}
                  alt={blog.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
                />

                <div className="p-5">
                  <h2 className="text-xl font-bold text-green-800 group-hover:text-green-600 transition">
                    {blog.title}
                  </h2>

                  <p className="text-gray-600 text-sm mt-3">
                    {blog.description}
                  </p>

                  <div className="mt-4 inline-block text-green-600 font-medium group-hover:underline">
                    Baca Selengkapnya →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Fade>

      {/* NEWSLETTER BOX */}
      <Fade bottom>
        <div className="w-full p-10 mt-16 bg-green-100 border border-green-300 rounded-xl text-center shadow-md">
          <h2 className="text-3xl font-bold text-green-800">
            Tetap Terhubung Dengan Kegiatan Kami
          </h2>

          <p className="text-gray-700 mt-3 text-lg">
            Dapatkan update kegiatan RA/TK Fathul Insani langsung ke email Anda.
          </p>

          <div className="mt-8 flex flex-col items-center">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="w-full max-w-md px-4 py-2 border rounded-lg border-green-400 focus:ring-2 focus:ring-green-600 outline-none"
            />

            <button
              className="mt-4 py-3 px-6 bg-green-700 hover:bg-green-800 text-white rounded-lg transition text-lg font-medium shadow-md"
            >
              Daftar Sekarang
            </button>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default BlogsContainer
