import React from "react";
import "./section_1.css";

const Section1 = () => (
  <section>
    <div className="hero-section">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <h1>
          Find Your <span className="highlight">Future</span> Today!
        </h1>
        <p className="subtitle">
          The Ultimate Guide to Universities Worldwide
        </p>
      </div>
    </div>
    <div className="intro">
      <p>
        Explore your options and make informed decisions with our comprehensive guide to universities around the world. Discover top-ranked institutions, explore diverse programs, and connect with like-minded individuals to build your academic future. With easy-to-use search tools, in-depth profiles, and trusted ratings and reviews, we provide everything you need to make the right choice for your academic journey. Start your search today and find your perfect fit!
      </p>
      <a href="#" className="btn yellow">GET STARTED</a>
    </div>
    <div className="search-boxes">
      <div className="search-grid">
        <div className="search-card">
          <div className="icon">
            <img src="./nam.png" alt="Find a course" />
          </div>
            <div className="search_tap">
            <h3>Find a course</h3>
            <p>Search by subject, course or region to find the right course for you.</p>
            <a href="#" className="get-started-link">GET STARTED <span>&rarr;</span></a>
          </div>
        </div>
        <div className="search-card">
          <div className="icon">
            <img src="./Group.png" alt="Find a university" />
          </div>
          <div className="search_tap">
          <h3>Find a university</h3>
          <p>Search for universities to find out about courses and more.</p>
          <a href="#" className="get-started-link">GET STARTED <span>&rarr;</span></a>
          </div>
        </div>
        <div className="search-card">
          <div className="icon">
            <img src="./calendar.png" alt="Find an open day" />
          </div>
          <div className="search_tap">
          <h3>Find an open day</h3>
          <p>Search and book open days to help you make the right choice.</p>
          <a href="#" className="get-started-link">GET STARTED <span>&rarr;</span></a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Section1;