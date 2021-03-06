import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><AiFillGithub/></a>   
      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin/></a>
    </div>
  )
}

export default HeaderSocials