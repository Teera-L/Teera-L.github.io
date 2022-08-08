import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import styled from "styled-components";
import space from "./images/space.jpeg";
import profile from "./images/1D.jpg";
import profile1 from "./images/2D.jpg";
import profile2 from "./images/3D.jpg";

const HeroDiv = styled.div`
  min-height: 50vh;
  background: url(${space}) center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    letter-spacing: 2px;
    font-size: 3rem;
    text-align: center;
    color: white;
    @media (max-width: 420px) {
      font-size: 2rem;
    }
  }

  button {
    font-family: "Poppins", sans-serif;
    outline: none;
    border: none;
    padding: 8px 40px;
    border-radius: 4px;
    background: transparent;
    border: 2px solid #1b7fbd;
    color: white;
    cursor: pointer;
    letter-spacing: 1px;
    transition: 0.3s ease;
    &:hover {
      background: #1b7fbd;
      box-shadow: 0 0 0 4px rgba(27, 127, 189, 0.5);
    }
    @media (max-width: 420px) {
      padding: 4px 20px;
    }
  }
`;

const AboutDiv = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: center;
    font-size: 2rem;
    color: #1b7fbd;
    position: relative;
  }

  h2::after {
    content: "";
    position: absolute;
    right: 32%;
    bottom: -10px;
    width: 50px;
    height: 3px;
    background: #595cae;
  }
`;

const AboutP = styled.p`
  text-align: center;
  width: 50%;
  margin: 2rem auto;
  line-height: 1.6;
`;

const GalleryDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 3rem auto;

  img {
    padding: 20px;
  }
`;

const Home = () => {
  const title = document.getElementById("title");
  if (title !== null) {
    title.innerHTML = "Airk Shop | Home";
  }

  return (
    <>
      <HeroDiv>
        <h1>Teerapat Shop</h1>
        <Link to="/shop">
          <button>See Shop</button>
        </Link>
      </HeroDiv>
      <AboutDiv>
        <h2>ABOUT US</h2>
      </AboutDiv>
      <AboutP>
      Welcome to teerapat shop, please come and have a look.
      </AboutP>
      <GalleryDiv>
        <img src={profile} width="250px" height="200px" alt="airk" />
        <img src={profile1} width="250px" height="200px" alt="airk" />
        <img src={profile2} width="250px" height="200px" alt="the airk" />
      </GalleryDiv>
      <Footer />
    </>
  );
};

export default Home;
