import React from 'react';

const UniversityWebsite = () => {
  const [menuOpen, setMenuOpen] =useState(false);
  return (
    <div>
      <section className="header">
        <nav>
          <a href="peace.html"></a><img src="/pb.logo.png" alt="Logo" />
         <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <span className="menu-close" onClick={() => setMenuOpen(false)}>x</span>
            <ul>
              <li><a href="">HOME</a></li>
              <li><a href="">ABOUT</a></li>
              <li><a href="">COURSE</a></li>
              <li><a href="">BLOG</a></li>
              <li><a href="">CONTACT</a></li>
            </ul>
          </div>
          <span className="menu-icon" onClick={() => setMenuOpen(true)}>&#9776</span>
        </nav>
        <h1>Our courses</h1>
        <div className="text-box">
          <h1>World's Biggest University</h1>
          <p>Making a website is one of the easiest things in the world. You just need to learn html, css,<br />and javascript and you are good to go</p>
          <a href="" className="hero-btn">Visit us to know more</a>
        </div>
      </section>   

      {/* ------ Course ------- */}
      <section className="Course">
        <h1>Courses we offer</h1>
        <p>computer science, medicine, medical laboratory, English, Mathematics, Website design, Gis</p>

        <div className="row">
          <div className="Course-col">
            <h3>intermediate</h3>
            <p>The university offers different courses such as English, Mathematics, website design, and medicine</p>
          </div>
          <div className="Course-col">
            <h3>degree</h3>
            <p>The university offers different courses such as English, Mathematics, website design, and medicine</p>
          </div>
          <div className="Course-col">
            <h3>post graduation</h3>
            <p>The university offers different courses such as English, Mathematics, website design, and medicine</p>
          </div>
        </div>
      </section>

      {/* ------- Campus ------ */}
      <section className="Campus">
        <h1>Our Global Campus</h1>
        <p>The university offers different courses such as English, Mathematics, website design, and medicine</p>

        <div className="row">
          <div className="Campus-col">
            <img src="/mp.jfif" alt="Canada Campus" />
            <div className="layer">
              <h3>CANADA</h3>
            </div>
          </div>
          <div className="Campus-col">
            <img src="/y2.jfif" alt="London Campus" />
            <div className="layer">
              <h3>LONDON</h3>
            </div>
          </div>
          <div className="Campus-col">
            <img src="/pf.jfif" alt="New York Campus" />
            <div className="layer">
              <h3>NEW YORK</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ------ Facilities ------ */}
      <section className="Facilities">
        <h1>Our Facilities</h1>
        <p>Our facilities provide modern facilities that support effective learning and personal development</p>

        <div className="row">
          <div className="Facilities-col">
            <img src="/y7.jfif" alt="Health Equipment" />
            <h3>Standard health equipment</h3>
            <p>We have a well-equipped library and comfortable spaces</p>
          </div>
          {/* Fixed typo: changed Facilities.col to Facilities-col */}
          <div className="Facilities-col">
            <img src="/yyy.jfif" alt="Library" />
            <h3>World class Library</h3>
            <p>We have a well-equipped library and comfortable spaces</p>
          </div>
          {/* Fixed typo: changed Facilities.col to Facilities-col */}
          <div className="Facilities-col">
            <img src="/y6.jfif" alt="Playground" />
            <h3>Largest playground</h3>
            <p>We have a well-equipped library and comfortable spaces</p>
          </div>
        </div>
      </section>

      {/* ---------- Testimonials --------- */}
      <section className="Testimonials">
        <h1>What Our Students Say</h1>
        <p>The computer laboratory is well equipped and has helped me improve my practical skills</p>

        <div className="row">
          <div className="Testimonials-col">
            <img src="/TRANING.jfif" alt="Jane" />
            <div>
              <p>Our classrooms are comfortable, and the learning environment is very conducive</p>
              <h3>Jane Jackson</h3>
            </div>
          </div>
          <div className="Testimonials-col">
            <img src="/y8.jfif" alt="Joy" />
            <div>
              <p>The library provides a quiet and comfortable environment for studying and research</p>
              <h3>Joy Safio</h3>
            </div>
          </div>
          <div className="Testimonials-col">
            <img src="/y9.jfif" alt="David" />
            <div>
              <p>The Medical facilities are accessible and provide good support whenever students need care</p>
              <h3>David Mark</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ------- Call to action ------- */}
    
    
       


      /* ------- footer------- */
      <section className="footer">
        <h4>About us</h4>
        <p>Making a website is one of the easiest things in the world with html, css, and javascript</p>
        <div className="icons">
          <p>Made with ❤ by easy tutorials</p>
        </div>
      </section>
    </div>
  );
};

export default UniversityWebsite;
