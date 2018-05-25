import React from 'react';
import github from './img/github.svg';

const AboutMeModalContent = (props) => {
  return(
    <div className="about-me-modal-main">
      <div className="modal-header-container">
        <h1 className="about-me-modal-header">Who Is This Person?</h1>
        <a className="close-modal-image" onClick={props.closeModal} />
      </div>
      <p className="about-me-modal-body">
        I'm a fullstack developer working mainly in Rails/React/Ember. I do that full time for a company where we build and maintain our own suite of consumer facing products.
      </p>
      <p className="about-me-modal-body">
        I work on a daily basis on large, high visibility projects. On those projects, I build out API endpoints and business logic on the backend, as well as views and styling on the front end. I work mainly on two apps, both of which have 10 year old legacy Rails backends. One of the apps has a frontend in Ember, the other in React.
      </p>
      <p className="about-me-modal-body">
        I learned to do this stuff in a pretty roundabout way. I feel like that's a common story in coding, but here's mine in short form: I went to school for philosophy and sociology. That gave me a love of logic and data. I found programming a couple years after that, and decided to try learning what I could. After doing that for a year or so, I realized two things: 1. I like doing this a lot. 2. There was no way I was going to up my skill to the point I could do it professionally unless I changed my approach.
      </p>
      <p className="about-me-modal-body">
        With that, I decided to go to <a href="https://turing.io" target="_blank">The Turing School</a>. I don't think I've ever made a better decision, and if you want to talk about that, I'm happy to tell you what my expoerience was like. I'll say it was totally worth it. I was fortunate in that I was hired prior to graduation, and started my professional career two weeks after finishing Turing.
      </p>
      <p className="about-me-modal-body">
        There is more coming to this site. I'm in the process of building out a backend API and I'm going to make it a blog/portfolio site. Yeah, it's way overkill to do a Rails/React combo for something simple like that, but it's also going to be my sandbox to try things in.
      </p>
      <div className="modal-footer-container">
        <p className="contact-headers">
          Feel free to get in touch
        </p>
        <br/>
        <div className="contact-icons">
          <a href="https://github.com/Aram-Anderson" className="modal-link github"/>
          <a href="https://stackoverflow.com/users/8044156/aram" className="modal-link stack-overflow"/>
          <a href="https://www.linkedin.com/in/aram-anderson" className="modal-link linkedin"/>
          <a href="mailto:aram.j.anderson@gmail.com" className="modal-link email"/>
        </div>
      </div>
    </div>
  )

};

export default AboutMeModalContent;
