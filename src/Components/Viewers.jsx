import React, { useState } from "react";
import styled from "styled-components";
const Viewers = () => {
  return (
    <ViewersHead>
      <Wrap>
        <video
          playsInline
          autoPlay
          muted
          loop
          src="/videos/1564674844-disney.mp4"
        ></video>
        <img src="/images/viewers-disney.png" alt="" />
      </Wrap>
      <Wrap>
        <video
          playsInline
          autoPlay
          muted
          loop
          src="/videos/1564676714-pixar.mp4"
        ></video>
        <img src="/images/viewers-pixar.png" alt="" />
      </Wrap>
      <Wrap>
        <video
          playsInline
          autoPlay
          muted
          loop
          src="/videos/1564676115-marvel.mp4"
        ></video>
        <img src="/images/viewers-marvel.png" alt="" />
      </Wrap>
      <Wrap>
        <video
          playsInline
          autoPlay
          muted
          loop
          src="/videos/1608229455-star-wars.mp4"
        ></video>
        <img src="/images/viewers-starwars.png" alt="" />
      </Wrap>
      <Wrap>
        <video
          playsInline
          autoPlay
          muted
          loop
          src="/videos/1564676296-national-geographic.mp4"
        ></video>
        <img src="/images/viewers-national.png" alt="" />
      </Wrap>
    </ViewersHead>
  );
};

const ViewersHead = styled.div`
  
  display: flex;
  justify-content: space-around;
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    padding: 5px;
  }
`;
const Wrap = styled.div`
  box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
    rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
  transition: transform 0.2s;
  margin: 10px;
  margin-bottom: 1%;
  width: calc(100vw / 6);
  min-width: 150px;
  min-height: 130px;
  
  position: relative;
  border-radius: calc(100vw / 100);
  overflow-y: hidden;
  height: calc(calc(100vw / 6) - 100vw / 15);
  border: 2px solid rgba(249, 249, 249, 0.1);
  cursor: pointer;
  
  video {
    opacity: 0;
    border-radius: calc(100vw / 100);
    width: 100%;
    object-fit: cover;
    height: 100%;
    padding: 1.5px;
    z-index: 1;
    @media (max-width: 600px) {
      border-radius: 10px;
    }
  }
  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;

    z-index: 3;
  }
  &:hover {
    transform: scale(1.1);
    border-color: white;
    video {
      opacity: 1;
    }
  }


  @media (max-width: 850px) {
    video{
      opacity: 1;
    }
    &:hover{
      transform: scale(1);
    }
    height: calc(80vw - 300px);
    width: 70%;
  }
  @media (max-width: 600px) {
    border-radius: 10px;
  }
`;
export default Viewers;
