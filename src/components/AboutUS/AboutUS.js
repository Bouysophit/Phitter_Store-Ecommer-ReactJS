import React from "react";
const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.text}>
        Welcome to Phitterstore! We are dedicated to delivering the best services
        to our clients. Our team of professionals works tirelessly to ensure
        your satisfaction and success.
      </p>
      <div style={styles.section}>
        <h2 style={styles.subheading}>Our Mission</h2>
        <p style={styles.text}>
          Our mission is to provide top-notch solutions tailored to our clients'
          needs, fostering innovation and excellence in everything we do.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subheading}>Our Values</h2>
        <ul style={styles.list}>
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Customer Satisfaction</li>
          <li>Teamwork</li>
        </ul>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subheading}>Contact Us</h2>
        <p style={styles.text}>
          Feel free to reach out to us via email at{" "}
          <a href="mailto:Phitterstore.com" style={styles.link}>
            Phitterstore.com
          </a>{" "}
          or call us at 0886224813.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    lineHeight: "1.6",
    fontFamily: "'Arial', sans-serif",
  },
  heading: {
    fontSize: "36px",
    color: "#333",
    textAlign: "center",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "30px",
  },
  subheading: {
    fontSize: "24px",
    color: "#007BFF",
    marginBottom: "10px",
  },
  list: {
    fontSize: "18px",
    color: "#555",
    paddingLeft: "20px",
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
  },
};

export default AboutUs;
