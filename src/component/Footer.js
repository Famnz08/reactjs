// Footer.js
import React from 'react';
import './css/Footer.css';
import facebookIcon from './image/github.png'; // Ganti dengan path ikon Facebook yang sesuai
import twitterIcon from './image/wa2.png'; // Ganti dengan path ikon Twitter yang sesuai
import instagramIcon from './image/ig.png'; // Ganti dengan path ikon Instagram yang sesuai

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media-icons">
        <h3>Sosial Media</h3>
        <div className="icons-container">
         <a href="https://github.com/Famnz08"> <img src={facebookIcon} alt="Facebook" /></a>
          <a href="https://wa.me+6282139948983"> <img src={twitterIcon} alt="Twitter" /></a>
          <a href="https://www.instagram.com/fannz_08/"><img src={instagramIcon} alt="Instagram" /></a>
        </div>
      </div>
      <div className="icons-text-container">
        <div className="contact-info">
          <h3>Hubungi Saya</h3>
          <p>Email: stokfanz25@gmail.com</p>
          <p>Telepon: +62**********</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
