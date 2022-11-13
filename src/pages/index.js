import React from 'react';
import Scrollspy from 'react-scrollspy';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import overLayPic from '../assets/images/overlay.png';
import ChronoClash from '../assets/images/ChronoClash.jpg';
import ArduboyRPS from '../assets/images/ArduboyRPS.jpg';
import Resume from '../assets/Master-Resume-Daniel-Lungaro.pdf';
import Turtles from '../assets/images/Turtles_Pinball.jpg'
import Trunks from '../assets/images/DSC_0820.jpg';
import Tonton from '../assets/images/DSC_0822.jpg';
import Iris from '../assets/images/DSC_0823.jpg';
import Snail from '../assets/images/happy-snail-2.png';
import FractalBurst from '../assets/images/Home_Screen_Screenshot.png'
import VHunterPuzzlerDx from '../assets/images/V-Hunter Puzzler Dx_AI Title Card.png'
import config from '../../config';

import { Link } from 'gatsby';

const sections = [
  { id: 'one', bg: require('../assets/images/pic01.jpg') },
  { id: 'two', bg: require('../assets/images/pic04Alt.jpg') },
  { id: 'twoPointOne', bg: require('../assets/images/picTwoPointOne.jpg') },
  { id: 'three', bg: require('../assets/images/pic03.jpg') },
  { id: 'four', bg: require('../assets/images/pic04.jpg') },
  { id: 'five', bg: require('../assets/images/pic05.jpg') },
];

const IndexPage = () => (
  <Layout>
    <Header />
    <section id="one" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[0].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>So a bit about me...</h2>
          </header>
          <p>
            After playing tons of Macromedia Flash games and watching Flash
            movies on Newgrounds when I was a kid, I knew I needed to get my
            hands on it. Once I did, a slew of poorly drawn games was produced,
            ranging the gamut from a Metal Gear Solid themed memory puzzle game
            to a turn-based fighting system pitting Ryu from Street Fighter
            against a Revenant from Doom. While none of the games would ever win
            any awards, it sparked my interest in coding.
            <br />
            <br />
            After graduating with a Computer Science Degree from SUNY Albany, I
            went in to the Marine Corps as an officer. This led to an endless
            barrage of "Lt. Dan" jokes... I still don't know if I've recovered.
            <br />
            <br />
            After my 4 year contract, I started as a software engineer I at
            <a href="https://www.fuseintegration.com/"> Fuse Integration </a>
            . Next, I joined MGM resorts as a software engineer II,
            building backend systems related to housekeeping and room upgrades. All the while, I pursued my Master's
            in Computer Science, graduating May 2022.
            <br />
            <br />
            I have recently started working for Amazon as an SDE 2 in September 2022. It's been an exciting journey the past few years!
            <br />
            <br />
            <a href={Resume} target="_blank">
              Click here for resume
            </a>
          </p>
        </div>
        <Scroll type="id" element="two">
          <a href="#two" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="two" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[1].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Software Projects</h2>
          </header>
          <h3>Chrono Clash Deck Builder</h3>
          <a href="https://chronoclashdecks.azurewebsites.net/" target="_blank">
            <img
              src={ChronoClash}
              alt="Chrono Clash"
              height="auto"
              width="100%"
            />
          </a>
          <p>
            A deck builder for the Chrono Clash Card game. Built with C#, SQL,
            and Razor with an MVC framework deployed on Azure.
          </p>
          <br />
          <h3>V-Hunter Puzzler Dx</h3>
          <a href="https://yatchstudios.itch.io/v-hunter-puzzler-dx" target="_blank">
            <img
              src={VHunterPuzzlerDx}
              alt="V-Hunter Puzzler Dx"
              height="auto"
              width="100%"
            />
          </a>
          <h3>4th place winner of Mini Jam 118!</h3 >
          <br />
          <p>
          V-Hunter Puzzler Dx is a grid turn-based action puzzler game where you need to slay all the monsters in a level to progress. 
          Each monster has different attack and movement patterns to do its best to stop V-Hunter. 
          Help V-Hunter rid the world of monsters and vampires!
          Developed in the Godot Game Engine.
          </p>
          <br />
          {/* <h3>Arduboy Rock Paper Scissors</h3>
          <a href="https://github.com/Zami77/Arduboy_RPS" target="_blank">
            <img
              src={ArduboyRPS}
              alt="Arduboy RPS"
              height="auto"
              width="100%"
            />
          </a>
          <p>
            A simple rock paper scissors game programmed in C for the Arduboy.
          </p> */}
          <h3>Happy Snail Programming</h3>
          <a href="https://happysnailprogramming.com/" target="_blank">
            <img src={Snail} alt="Happy Snail" height="auto" width="75%" />
          </a>
          <p>Programming articles and tutorials deployed via Wordpress.</p>
          {/* <ul className="icons-grid">
            <li>
              <span className="icon major fa-camera-retro" />
              <h3>Photography</h3>
            </li>
            <li>
              <span className="icon major fa-pencil" />
              <h3>Blogging</h3>
            </li>
            <li>
              <span className="icon major fa-code" />
              <h3>Web Development</h3>
            </li>
            <li>
              <span className="icon major fa-coffee" />
              <h3>Sipping Coffee</h3>
            </li>
          </ul> */}
        </div>
        <Scroll type="id" element="twoPointOne">
          <a href="#twoPointOne" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="twoPointOne" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[2].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Languages and Frameworks</h2>
          </header>
          <p>
            (In Descending Familiarity)
            <br />
            <div className="row">
              <div className="col-6 col-12-medium">
                <h5>Languages</h5>
                <ul>
                  <li>C#</li>
                  <li>C/C++</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>Javascript</li>
                  <li>Assembly</li>
                </ul>
              </div>
              <div className="col-6 col-12-medium">
                <h5>Frameworks</h5>
                <ul>
                  <li>MVC</li>
                  <li>ASP.NET Core</li>
                  <li>Bootstrap</li>
                  <li>React</li>
                  <li>Gatsby</li>
                </ul>
              </div>
            </div>
          </p>
        </div>
        <Scroll type="id" element="three">
          <a href="#three" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="three" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[3].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Music Projects</h2>
          </header>
          <p>
            <h3>Soundcloud - Straying Minds</h3>
            <iframe
              width="100%"
              height="450"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1070844544&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
            <h3>RushRocks77 Youtube Channel</h3>
            <iframe
              height="450"
              width="100%"
              src="https://www.youtube.com/embed?listType=user_uploads&list=RushRocks77"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </p>
        </div>
        <Scroll type="id" element="four">
          <a href="#four" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    {/* <section id="four" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[4].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Video Games, Comics, and Nerd Stuff</h2>
          </header>
          <p>
            I have an irresponsibly large collection of Video Games, Comic
            Books, Board Games, Card Games, Figures etc...
            <br />
            <a href="https://cloud.collectorz.com/zami77/games" target="_blank">
              Video Game Collection
            </a>
            <br />
            <a
              href="https://cloud.collectorz.com/zami77/comics"
              target="_blank"
            >
              Comic Book Collection
            </a>
            <br />
            <br />
            <br />
            <h3>My Pinball - TMNT</h3>
            <img src={Turtles} height="auto" width="100%" />
            <br />
            <br />
            <br />
            <h3>Zen-Oh Button TCG Youtube Channel</h3>
            My youtube channel with videos about the Dragon Ball Super Card Game
            <iframe
              width="100%"
              height="450"
              src="http://www.youtube.com/embed/videoseries?list=UUl6IREjc_87iwbxgV9_4P0g"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </p>
        </div>
        <Scroll type="id" element="five">
          <a href="#five" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section> */}

    <section id="five" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[5].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>One more thing</h2>
          </header>
          <p>
            All the photos on the site were taken either by me or my fiancee,
            most likely her if they're any good! Below are some pictures of my
            favorite people/cats in life
            <br />
            <br />
            <br />
            <p>
              <h3>Iris</h3>
              <img src={Iris} height="auto" width="100%" />
              My favorite picture
              <br />
            </p>
            <p>
              <h3>Trunks</h3>
              <img src={Trunks} height="auto" width="100%" />
              Doing what he does best
              <br />
            </p>
            <p>
              <h3>Tonton</h3>
              <img src={Tonton} height="auto" width="100%" />
              Caught in the act of mayhem
              <br />
            </p>
          </p>
        </div>
        <Scroll type="id" element="footer">
          <a href="#footer" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="footer">
      <div className="container">
        <header className="major">
          <h2>Get in touch</h2>
        </header>
        Please feel free to contact me via email or facebook, or check out my
        GitHub from the link below. Thanks for checking out the site!
        <br />
        <ul className="icons">
          {config.socialLinks.map(social => {
            const { icon, name, url } = social;
            return (
              <li key={url}>
                <br />
                <a href={url} className={`icon alt ${icon} fa-2x`}>
                  <span className="label">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <Footer />
      </div>
    </section>

    <Scrollspy
      items={sections.map(s => s.id)}
      currentClassName="active"
      offset={50}
      componentTag={'div'}
    >
      {sections.map(s => {
        return (
          <div
            key={s.id}
            className="main-bg"
            id={`${s.id}-bg`}
            style={{ backgroundImage: `url(${overLayPic}), url(${s.bg})` }}
          />
        );
      })}
    </Scrollspy>
  </Layout>
);

export default IndexPage;
