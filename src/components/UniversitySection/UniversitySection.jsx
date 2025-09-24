import React from 'react';
import './UniversitySection.css';

const topUniversities = [
  {
    name: "Stanford University",
    image: "rasm-10.png", // 1-rasm
    link: "#"
  },
  {
    name: "Stallion University",
    image: "rasm-11.png", // 2-rasm
    link: "#"
  },
  {
    name: "Covenant University",
    image: "rasm-13.png", // 3-rasm
    link: "#"
  }
];

const popularCourses = [
  {
    name: "User experience design",
    image: "rasm-1.png", // 4-rasm
    link: "#"
  },
  {
    name: "Computer science",
    image: "rasm-2.png", // 5-rasm
    link: "#"
  },
  {
    name: "Business management",
    image: "rasm-3.png", // 6-rasm
    link: "#"
  }
];

export default function UniversitySection() {
  return (
    <div className="main-content">
      {/* Top ranking universities */}
      <section className="top-universities">
        <h2>Top ranking universities</h2>
        <div className="divider"></div>
        <div className="university-list">
          {topUniversities.map((uni, idx) => (
            <div className="university-card" key={idx}>
              <img src={uni.image} alt={uni.name} />
              <h3>{uni.name}</h3>
              <a href={uni.link} className="see-link">SEE UNIVERSITY <span>&rarr;</span></a>
            </div>
          ))}
        </div>
        <button className="see-all-btn">SEE ALL <span>&rarr;</span></button>
      </section>

      {/* Most popular courses */}
      <section className="popular-courses">
        <h2>Most popular courses</h2>
        <div className="divider"></div>
        <div className="course-list">
          {popularCourses.map((course, idx) => (
            <div className="course-card" key={idx}>
              <img src={course.image} alt={course.name} />
              <h3>{course.name}</h3>
              <a href={course.link} className="see-link">SEE COURSE GUIDE <span>&rarr;</span></a>
            </div>
          ))}
        </div>
        <button className="see-all-btn">SEE ALL <span>&rarr;</span></button>
      </section>

      {/* We're here to help */}
      <section className="help-section">
        <div className="help-image">
          <img src="./rasm-4.png" alt="Consultation" />
        </div>
        <div className="help-content">
          <h3>We're here to help</h3>
          <p>
            Read through our FAQS and, if you can’t find what you’re looking for, our experts will be happy to answer your questions.
          </p>
          <div className="help-actions">
            <a href="#" className="help-btn faq">READ FAQS</a>
            <a href="#" className="help-btn ask">ASK A QUESTION <img src="./postcart.png" alt="" /></a>
          </div>
        </div>
      </section>
    </div>
  );
}