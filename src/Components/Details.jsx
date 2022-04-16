import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import db from "../Firebase";
const Details = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies").doc(id)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setDetailData(doc.data());
          } else {
            console.log("no much document in firebase");
          }
        })
        .catch((error) => {
          console.log("Error getting document : ", error);
        })
  }, [id]); 

  
  return (
    <Container>
      <Helmet>
          <title>{`Details ${!detailData.title ? "" : " | " + detailData.title}`}</title>
        </Helmet>
      <Background>
        <img
          src={detailData.backgroundImg}
          alt={detailData.title}
        />
      </Background>

      <ImageTitle>
        <img
          src={detailData.titleImg}
          alt={detailData.title}
        />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>PLAY</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>TRAILER</span>
          </Trailer>
          <AddList>+</AddList>
          <AddList>
            <img src="/images/group-icon.png" alt="" />
          </AddList>
        </Controls>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>
          {detailData.description}
        </Description>
        <br />
      </ContentMeta>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  top: 70px;
  overflow-x: hidden;
  padding: 0 calc(2.5vw + 5px);
  min-height: calc(100vh - 250px);
`;
const Background = styled.div`
  left: 0;
  opacity: 0.8;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;
  img {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
  }
`;

const ImageTitle = styled.div`
  height: 30vw;
  min-height: 170px;
  display: flex;
  padding-bottom: 25px;
  align-items: flex-end;
  box-pack: start;
  justify-content: flex-start;
  margin: 0 auto;
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;
const ContentMeta = styled.div`
  max-width: 874px;
  display: flex;
  flex-direction: column;
`;
const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  margin: 24px 0;
  min-height: 50px;
`;
const Player = styled.button`
  border: none;
  font-weight: bold;
  outline: none;
  display: flex;
  align-items: center;
  padding: 0 24px;
  cursor: pointer;
  border-radius: 4px;
  height: 56px;
  margin: 0 24px 0 0;
  letter-spacing: 1.1px;
  background: rgb(249, 249, 249);
  color: black;
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0 22px;
    font-size: 12px;
    margin: 0 10px 0 0;
    img {
      width: 25px;
    }
  }
`;
const Trailer = styled.button`
color: white !important;
  outline: none;
  display: flex;
  align-items: center;
  padding: 0 24px;
  cursor: pointer;
  font-size: 1.1em !important;
  font-weight: 900;
  border-radius: 4px;
  height: 56px;
  margin: 0 24px 0 0;
  letter-spacing: 1.1px;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgb(249, 249, 249);
  color: black;
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0 22px;
    font-size: 12px;
    margin: 0 10px 0 0;
    img {
      width: 25px;
    }
  }
`;
const AddList = styled.button`
  color: white;
  outline: none;
  width: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  font-size: 2em;
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  margin: 0 24px 0 0;
  background-color: rgba(17, 17, 17, 0.8);
  @media (max-width: 768px) {
    font-size: 1.8em;
    height: 45px;
    width: 45px;
    margin: 0 10px 0 0;
  }
`;
const SubTitle = styled.strong`
  margin-bottom: 20px;
  font-size: 1.4em;
`;
const Description = styled.p`
  margin-bottom: 20px;
  font-size: 1.1em;
`;
export default Details;
