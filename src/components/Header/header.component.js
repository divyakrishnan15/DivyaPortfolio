import React from "react";
import "./header.css";
import sample from '../../assets/4.four.mp4';

export default function Header() {
  return (
    <div className="Header">
      <video className='videoTag' autoPlay loop muted>
              <source src={sample} type='video/mp4' className="video"/>
          </video>
      <h1 className="Heading">
        Divya Krishnan<sub>PMP</sub>{" "}
        <span className="resumewordhighlight">Resume</span>
      </h1>
      <a href="#section1">
        {/* <strong>\/</strong> */}
        {/* <FontAwesomeIcon icon="fa-solid fa-chevron-down" /> */}
        {/* <FontAwesomeIcon icon="fa-solid fa-chevron-down" beat /> */}
        {/* <FontAwesomeIcon icon={faChevronDown} beat /> */}
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
      
        </a>


        {/* <!-- Google tag (gtag.js) --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-R0RC3VE7WP"></script>
      {/* <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-R0RC3VE7WP');
      </script> */}



    </div>
  );
}
