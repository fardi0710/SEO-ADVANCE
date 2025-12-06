import React from "react"
import AboutTeamCard from "./aboutTeamCard"

import Image1 from "../../images/AKTIFITAS-GURU.jpg"
import Image2 from "../../images/ANAK-TK1.png"
import Image3 from "../../images/AKTIFITAS-3.jpg"


const AboutGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-20 grid grid-cols-3 gap-16 justify-items-center xxs:grid-cols-1 sm:grid-cols-3">
      <AboutTeamCard
        imgSrc={Image1}
        position="AKTIFITAS GURU"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc={Image2}
        position="AKTIFITAS ANAK"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc={Image3}
        position="AKTIFITAS BERSAMA"
      ></AboutTeamCard>
    </div>
  
  )
}

export default AboutGrid
