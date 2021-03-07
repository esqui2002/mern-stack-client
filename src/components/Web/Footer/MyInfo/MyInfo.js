import React from 'react'
import LogoWhite from '../../../../assets/img/png/logo-white.png'
import SocialLinks from '../../SocialLinks/SocialLinks'

import './MyInfo.scss'

export default function MyInfo() {
  return (
    <div className="my-info">
      <img src={LogoWhite} alt="Alberto Esquitino Pascual" />
      <h4>
        Entra en el mundo del desarrollo web, disfruta creando protectos de todo
        tipo, deja que tu imaginacion fluya y crea verdaderas maravillas!!
      </h4>
      <SocialLinks />
    </div>
  )
}
