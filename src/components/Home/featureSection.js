import React from "react"
import Fade from "react-reveal/Fade"

// Assets
import HeroImage from "../../images/WISUDA-TK.jpg"
import Image1 from "../../images/Animasi-TK1.png"
import Image2 from "../../images/TK-6.png"
import Image4 from "../../images/TK-4.png"
import Image5 from "../../images/tk-5.png"

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">Performance</h3>
            <h4 className="mt-10 text-black  opacity-70 text-xl">95+</h4>
          </div>

          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Accessibility</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div>
          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Best Practices</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div>
          <div className="lg:rounded-xl lg:w-1/3 lg:bg-dp bg-dp p-8 rounded-xl m-5 xxs:w-full xxs:bg-dp xxs:rounded-xl xs:w-full xs:bg-dp xs:rounded-xl sm:hidden md:hidden lg:block">
            <h3 className="text-white text-2xl">SEO</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div>
        </div>
      </Fade> */}

      <div className="max-w-7xl mx-auto lg:px-8 md:px-3">
        <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">
          <div className="lg:w-1/2 my-4">
            <img
              className="rounded-xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={HeroImage}
              alt="HeroImage"
            ></img>
          </div>

          <div className="lg:w-1/2 sm:text-center lg:text-right flex flex-col justify-center">
            <h2 className="text-black text-2xl font-semibold">"BELAJAR BAHAGIA DAN TUMBUH CERDAS"</h2>
            <h3 className="text-black text-4xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-4xl text-gradient bg-gradient-to-r from-green to-gray-600">
              “Yayasan Islami yang Menumbuhkan Karakter dan Kreativitas.”
            </h3>

            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:mr-0">
              
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
              <div className="rounded-md">
                <a
                  href="tel:#"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-green text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
                >
                  HUBUNGI KAMI
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/gallery"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border border-green text-base font-medium rounded-md text-black hover:text-white bg-transparent hover:bg-green md:py-3 md:text-lg md:px-10"
                >
                  LIHAT GALERI
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-2/6 bg-gradient-to-r from-pink to-green p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-2/6">
            <span className="text-black font-semibold font-montserrat text-4xl">
              VISI YAYASAN
            </span>
            <div className="mt-5">
              <div>
                <p className="text-black text-2xl">“Membangun generasi yang beriman, cerdas, kreatif, 
                  dan berkarakter mulia dalam suasana belajar yang menyenangkan.”</p>
                <p className="text-black text-sm">"Berbasis Kreativitas & Sains:
“Menjadi TK unggulan yang menumbuhkan rasa ingin tahu, kreativitas, dan kecintaan anak pada belajar sejak dini.”</p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">"Berbasis Karakter & Kemandirian:
Menjadi taman belajar yang menumbuhkan anak-anak mandiri, percaya diri, dan berakhlak mulia.”</p>
                <p className="text-black opacity-50 text-sm"></p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl"></p>
                <p className="text-black opacity-50 text-sm">
                  
                </p>
              </div>
            </div>
          </div>

          <div className="w-4/6 bg-gradient-to-r from-pink to-green p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6">
            <h2 className="text-black font-semibold font-montserrat text-4xl">
              MISI YAYASAN
            </h2>
            <p className="mt-10 text-boldblack font-semibold opacity-70">
              

“Menjadi Yayasan unggulan yang menumbuhkan rasa ingin tahu, kreativitas, dan kecintaan anak pada belajar sejak dini.” <br/>
"Menciptakan lingkungan belajar yang aman, nyaman, dan menyenangkan.”<br/> 
"Mengembangkan potensi anak melalui kegiatan bermain sambil belajar.”<br/>
"Mendorong kreativitas dan kemandirian anak melalui kegiatan eksploratif dan proyek kecil.”<br/>
"Menjalin kerja sama dengan orang tua dalam mendukung tumbuh kembang anak.”<br/>
"Mengoptimalkan pembelajaran berbasis karakter dan kecerdasan majemuk.”<br/>
"Membimbing anak mencintai lingkungan dan sesama sejak usia dini.”<br/>




            </p>
          </div>
        </div>
      </Fade>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          PEMBUKAAN TAHUN AJARAN BARU
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-green to-purple">
          Banyak keuntungan untuk anak Anda
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Potongan biaya pendaftaran untuk pendaftar awal.<br/>
          Program “ajak teman, dapat diskon.”<br/>
          Hadiah kecil tas sekolah, alat tulis untuk pendaftar baru.<br/>
          Dokumentasikan semua kegiatan untuk konten promosi berikutnya di sosial media juga mendapat diskon.
        </p>
      </div>

      
      <Fade bottom cascade>
        <div className="flex justify-center mt-10 px-5">
          <div className="w-full max-w-4xl rounded-2xl overflow-hidden relative hover:opacity-100">
    <img
      alt="Image"
      src={Image1}
      className="w-full h-auto object-cover"
    />
  </div>
          {/* <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Image" src={Image2}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 hidden lg:block ">
            <img alt="Image" src={Image3}></img>
          </div> */}
        </div>
      </Fade>

      <Fade bottom cascade>
        {/* <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">v1.0.0</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">Released</h4>
          </div>

          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Fork</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">
              PR's welcome
            </h4>
          </div>
          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Stars</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">
              Give support
            </h4>
          </div>
        </div> */}
      </Fade>

<Fade bottom cascade>
        <div className="flex justify-center mt-10 px-5">
          
          <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3 px-5 justify-items-center">
  {/* Gambar kiri */}
  <div className="w-full max-w-sm rounded-xl overflow-hidden flex justify-center">
    <img
      alt="Image"
      src={Image2}
      className="w-full h-auto object-cover rounded-xl"
    />
  </div>

  {/* Gambar tengah - lebih besar */}
  <div className="w-full max-w-2xl rounded-2xl overflow-hidden flex justify-center col-span-1 lg:scale-110">
    <img
      alt="Image"
      src={Image4}
      className="w-full h-auto object-cover rounded-2xl shadow-lg"
    />
  </div>

  {/* Gambar kanan */}
  <div className="w-full max-w-sm rounded-xl overflow-hidden flex justify-center">
    <img
      alt="Image"
      src={Image5}
      className="w-full h-auto object-cover rounded-xl"
    />
  </div>
</div>
        </div>
      </Fade>

      {/* 
      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold text-gradient bg-gradient-to-r from-pink to-purple">
          {" "}
          Integrations
        </h2>
        <h3 className="text-black mt-5 font-bold text-6xl xxs:text-lg xs:text-xl sm:text-xl lg:text-6xl">
          Discover, connect, and configure
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-purple border border-purple hover:bg-transparent md:text-lg md:px-10"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default FeatureSection
