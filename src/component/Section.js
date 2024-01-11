// AboutMe.js
import React, { useEffect } from 'react';
import './css/Section.css';
import myPhoto from './image/echo.jpg';
import sdPhoto from './image/echo.jpg';
import smpPhoto from './image/echo.jpg';
import smaPhoto from './image/echo.jpg';
import univPhoto from './image/echo.jpg';

const Section = () => {
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
          <h2>Riwayat Sekolah</h2>
          <div className="education-section">
            <div className="education-item">
              <img src={sdPhoto} alt="SD Photo" />
              <div className="education-info">
                <h3>SD Negeri ABC</h3>
                <p>Tahun 2000 - 2006</p>
              </div>
            </div>
            <div className="education-item">
              <img src={smpPhoto} alt="SMP Photo" />
              <div className="education-info">
                <h3>SMP Negeri XYZ</h3>
                <p>Tahun 2006 - 2009</p>
              </div>
            </div>
            <div className="education-item">
              <img src={smaPhoto} alt="SMA Photo" />
              <div className="education-info">
                <h3>SMA Negeri 123</h3>
                <p>Tahun 2009 - 2012</p>
              </div>
            </div>
            <div className="education-item">
              <img src={univPhoto} alt="Universitas Photo" />
              <div className="education-info">
                <h3>Universitas ABCDE</h3>
                <p>Tahun 2012 - 2016</p>
              </div>
            </div>
          </div>
          <h2>Data Pribadi</h2>
          <p>
            Nama: M. Arfan Maulana<br />
            Kelas: XII RPL2<br />
            Umur: 17 tahun<br />
            Alamat: Tanggul<br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section;
