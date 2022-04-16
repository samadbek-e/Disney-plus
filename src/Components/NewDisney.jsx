import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectNewDisney } from "../features/movie/movieSlice";
const NewDisney = () => {
  const movies = useSelector(selectNewDisney);
  return (
    <Container>
      <h4>New to Disney +</h4>
      <Content>
        {movies &&
          movies.map((movie, key) => (
            <Wrap key={key}>
              <Link to={"/detail/" + movie.id}>
                <img
                  src={movie.cardImg}
                  title={movie.title}
                  alt={movie.title}
                />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};
const Container = styled.div`
  h4 {
    margin-bottom: 20px;
  }
  margin-top: 5%;
  padding: 0 0 26px;
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  transition: 0.2s;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 40px 58px -16px,
    rgba(0, 0, 0, 0.72) 0px 30px 22px -10px;

  img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.8) 0px 40px 58px -16px,
    rgba(0, 0, 0, 0.5) -5px 45px 30px -20px;
    border-color: rgba(255,255,255, .8);
    transform: scale(1.05);
  }
`;

export default NewDisney;
