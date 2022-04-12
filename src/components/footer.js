import React from 'react';

const Footer = () => {
  return (
    <footer className='my-12 text-center'>
      © {new Date().getFullYear()}, Built with
      {` `}
      Gatsby and Leonids theme.
    </footer>
  )
}

export default Footer;
