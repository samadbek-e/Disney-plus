import React, { useEffect } from "react";
import ImgSlider from "./ImgSlider";
import styled from "styled-components";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import db from "../Firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { Helmet } from "react-helmet";
function Home(props) {
  const history = useHistory()
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];

            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];

            break;
        }
      });
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);
  return (
   userName && <>
    <Helmet>
      <title>{`Disney-plus-clone`}</title>
    </Helmet>
      <Container >
        <ImgSlider />
        

        <IMGtoTop src="/images/chevron-up-circle.svg" style={{
          cursor: "pointer"
        }}
        onClick={()=>{
          document.documentElement.scrollTop = 0
        }}
        />
        <div style={{ marginTop: " 30px", padding: "0 calc(3.5vw + 5px)" }}>
          <Viewers />
          <Recommends />
          <NewDisney />
          <Trending />
          <Originals />
        </div>
      </Container>
    </>
  );
}
const IMGtoTop = styled.img`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 10vh;
  opacity: 0.8;
`
const Container = styled.main`
  height: 100%;
  position: relative;
  overflow-x: hidden;
  display: block;
  top: 70px;
  justify-content: center;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 1;
    z-index: -1;
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
  }
`;
export default Home;
