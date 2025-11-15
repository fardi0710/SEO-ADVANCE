import React from "react"
import Fade from "react-reveal/Fade"
import Image1 from "../../images/AKTIFITAS-1.jpg"
import Image2 from "../../images/AKTIFITAS-2.jpg"
import Image3 from "../../images/AKTIFITAS-4.jpg"
import Image4 from "../../images/GURU-1.jpg"
import Image5 from "../../images/GURU-2.jpg"
import Image6 from "../../images/GURU-3.jpg"
import Image7 from "../../images/SEMUA-GURU.jpg"
import Image8 from "../../images/Animasi-TK1.png"

const WorkPage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">

      <Fade bottom cascade>
        <div className="flex justify-center mt-10 px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10 px-5 justify-items-center">

            {/* Gambar kiri */}
            <div className="w-full max-w-sm rounded-xl overflow-hidden flex justify-center lg:translate-y-16">
              <img
                alt="Image"
                src={Image1}
                className="w-full h-auto object-cover rounded-xl shadow-md"
              />
            </div>

            {/* Gambar tengah */}
            <div className="w-full max-w-lg rounded-2xl overflow-hidden flex justify-center lg:translate-y-8">
              <img
                alt="Image"
                src={Image2}
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Gambar kanan */}
            <div className="w-full max-w-sm rounded-xl overflow-hidden flex justify-center">
              <img
                alt="Image"
                src={Image3}
                className="w-full h-auto object-cover rounded-xl shadow-md"
              />
            </div>

          </div>
        </div>
      </Fade>

      {/* TEXT SECTION */}
      <div className="mt-20 px-8">
        <h2 className="text-black text-4xl font-semibold"></h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Ketua Yayasan Pengarah Langkah, Penjaga Arah Besar
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Ketua Yayasan adalah sosok yang berada di balik layar, namun memiliki pengaruh besar terhadap kualitas lembaga.
          Ia mengatur arah perjalanan TK—mulai dari menentukan visi dan misi, membangun budaya sekolah yang positif, 
          hingga memastikan setiap anak menerima layanan pendidikan yang aman dan bermutu.
          Dengan pengawasan yang tenang namun tegas, ketua yayasan menjaga agar lingkungan belajar selalu berkembang: 
          fasilitas diperbaiki, ruang bermain ditata, keuangan dikelola dengan bijak, dan hubungan dengan masyarakat tetap terjaga baik.
          Ia bukan sekadar pemimpin administratif, tetapi penjaga nilai-nilai yang ingin diwujudkan oleh sekolah.
        </p>
        <h4 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Guru Profesional Sahabat Belajar dan Pemandu Pertumbuhan
        </h4>

        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Jika ketua yayasan adalah pengarah langkah besar, maka guru TK adalah sosok yang berinteraksi langsung dengan anak setiap hari. 
          Mereka membuka pagi dengan senyum, menyambut anak di kelas, dan mengisi hari dengan kegiatan bermain sambil belajar.
          Guru TK mengajarkan keterampilan dasar seperti berhitung dan membaca, tetapi lebih dari itu, mereka menanamkan karakter: 
          bagaimana berbagi, berteman, memecahkan masalah kecil, dan berani mencoba hal baru.
          Mereka adalah orang yang memastikan setiap anak merasa aman, diperhatikan, dan dihargai. 
          Mereka tahu bagaimana menenangkan anak yang menangis, bagaimana memotivasi anak yang ragu, dan bagaimana merayakan kemajuan kecil yang berarti besar.
        </p>

        {/* =============================
            SLIDER 3 GAMBAR OTOMATIS
        ============================== */}
        <div className="mt-16 overflow-hidden">
          <div className="flex animate-slideInfinite">

            {[Image4, Image5, Image6, Image7, Image8, Image4].map((img, idx) => (
              <div key={idx} className="w-1/3 flex-shrink-0 px-4">
                <img
                  src={img}
                  alt={"slider-" + idx}
                  className="w-full h-auto object-cover rounded-xl shadow-md"
                />
              </div>
            ))}

          </div>
        </div>
      </div>

    </div>
  )
}

export default WorkPage
