import React from "react"
import Fade from "react-reveal/Fade"

import Image1 from "../images/AKTIFITAS-1.jpg"
import Image2 from "../images/AKTIFITAS-2.jpg"
import Image3 from "../images/AKTIFITAS-3.jpg"
import Image4 from "../images/AKTIFITAS-4.jpg"
import Image5 from "../images/AKTIFITAS-GURU.jpg"
import Image6 from "../images/ANAK-TK1.png"

const Gallery = () => {
  const photos = [
    { src: Image1, title: "Pentas Seni" },
    { src: Image2, title: "Aktifitas Outdoor" },
    { src: Image3, title: "Aktifitas Indoor" },
    { src: Image4, title: "Kelas Iqra & Mengaji" },
    { src: Image5, title: "Aktifitas Guru" },
    { src: Image6, title: "Kegiatan Mewarnai" },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <Fade>

        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-black">
            Galeri Kegiatan TK Fathul Insani
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Dokumentasi kegiatan edukatif dan menyenangkan untuk anak-anak
          </p>
        </div>
      </Fade>

      {/* GRID GALLERY */}
      <Fade bottom cascade>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl shadow-md bg-gray-100"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <span className="text-white text-lg font-semibold">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  )
}

export default Gallery
