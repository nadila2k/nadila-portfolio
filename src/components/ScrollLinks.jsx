import React from 'react'
import { Link as ScrollLink } from "react-scroll";

export default function ScrollLinks({children, to, }) {
  return (
    <ScrollLink duration={500} to={to} smooth={true} className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>{children}</ScrollLink>
  )
}
