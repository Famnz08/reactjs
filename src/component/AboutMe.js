// AboutMe.js
import React, { useEffect } from 'react';
import './css/AboutMe.css';
import myPhoto from './image/echo.jpg';
import sdPhoto from './image/sd.jpg';
import smpPhoto from './image/mts2.jpeg';
import smaPhoto from './image/smk2.png';
import univPhoto from './image/dafidea.png';

const AboutMe = () => {
  useEffect(() => {
    const aboutContent = document.querySelector('.about-content');

    const handleScroll = () => {
      const aboutContentPosition = aboutContent.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (aboutContentPosition < screenPosition) {
        aboutContent.classList.add('show');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="about-me">
      <div className="about-content">
        <div className="photo-grid">
          <img src={myPhoto} alt="My Photo" />
        </div>
        <div className="text-content">
          <h2>Hai</h2>
          <p>
            Saya adalah siswa di SMKN 6 Jember, jurusan RPL.
          </p>
          <p>
            <strong>Informasi Pribadi:</strong><br />
            - Nama: M.arfan Maulana<br />
            - Kelas: XII RPL2<br />
            - Umur: 17<br />
            - Alamat: Tanggull
          </p>
        </div>
      </div>
      <div className="education-section">
        <div className="education-item">
          <img src={sdPhoto} alt="SD Photo" />
          <div className="education-info">
            <h3>SD Negeri Manggisan 01</h3>
            <p>2012-2018</p>
          </div>
        </div>
        <div className="education-item">
          <img
            src={smpPhoto}
            alt="SMP Photo"
            style={{ width: '220px', height: 'auto' }}
          />
          <div className="education-info">
            <h3>Mts Negeri 03 Tanggull</h3>
            <p>Tahun 2018 - 2021</p>
          </div>
        </div>
        <div className="education-item">
          <img src={smaPhoto} alt="SMA Photo" />
          <div className="education-info">
            <h3>SMK Negeri 06 Jember</h3>
            <p>Tahun 2021 - 2024</p>
          </div>
        </div>
        <div className="education-item">
          <img
            src={univPhoto}
            alt="Universitas Photo"
            style={{ width: '350px', height: 'auto' }}
          />
          <div className="education-info">
            <h3>Tempat Magang</h3>
            <p>Di Dafidea, Tahun Desember 2022 - April 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
