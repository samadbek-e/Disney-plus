import React,{useEffect} from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import "./components.css";
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../Firebase";
const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged( async (user)=>{
      if(user){
        setUser(user);
        history.push("/home")
      }
    })
  }, [userName])
  const handleAuth = () => {
    if(!userName){
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        // alert(error.message);
      });
    }else if(userName){
      auth.signOut().then(()=>{
        dispatch(setSignOutState())
        history.push("/")
      }).catch(
        err => {
          // alert(err.message)
      })
    }
  };
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  return (
    <NavbarRow>
      <ImageLogo src="/images/logo.svg" alt="" className="" />
      {!userName ? <SignupBtn onClick={handleAuth}>Sign up</SignupBtn> : (<>
      <HeaderMenu>
        <Link to="/home" className="NavMenu">
          <img src="/images/home-icon.svg" alt="Home" className="NavIcon" />
          <span>Home</span>
        </Link>
        <Link to="/search" className="NavMenu">
          <img src="/images/search-icon.svg" alt="Home" className="NavIcon" />
          <span>Search</span>
        </Link>
        <Link to="/watchlist" className="NavMenu">
          <img
            src="/images/watchlist-icon.svg"
            alt="Home"
            className="NavIcon"
          />
          <span>WatchList</span>
        </Link>
        <Link to="/originals" className="NavMenu">
          <img src="/images/original-icon.svg" alt="Home" className="NavIcon" />
          <span>Originals</span>
        </Link>
        <Link to="/series" className="NavMenu">
          <img src="/images/series-icon.svg" alt="Home" className="NavIcon" />
          <span>Series</span>
        </Link>
      </HeaderMenu>
      <SignOut>
      <UserImage title={userName} src={userPhoto} alt={userName} />
      <DropDown>
        <span onClick={handleAuth}>Sign Out</span>
      </DropDown>
      </SignOut>
      </>)}
      
      
    </NavbarRow>
  );
};

//styled-Components
const ImageLogo = styled.img`
  width: 100px;
`;
const HeaderMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  align-items: center;
  margin-right: auto;
  margin-left: 20px;
  font-size: 13px;
  letter-spacing: 1px;
  img {
    margin-right: 2px;
  }
  @media (max-width: 760px) {
    display: none;
  }
  span {
    position: relative;
    &::before {
      transition: 0.3s;
      content: "";
      position: absolute;
      bottom: -6px;
      left: 0;
      width: 100%;
      opacity: 0.1;
      transform-origin: left;
      height: 1.5px;
      transform: scaleX(0);
      background: #fff;
    }
    &:hover {
      &::before {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
const SignupBtn = styled.a`
  font-weight: bold;
  padding: 8px 15px;
  font-size: 15px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  text-align: center;
  transition: 0.3s;
  margin-left: 10px;
  letter-spacing: 2px !important;
  cursor: pointer;
  letter-spacing: 0;
  &:hover {
    color: #040714;
    background: #f9f9f9;
    border-color: transparent;
  }
`;
const NavbarRow = styled.nav`
  position: fixed;
  inset: 0;
  height: 80px;
  z-index: 100 !important;
  display: flex;
  align-items: center;
  background-color: #040714;
  justify-content: space-between;
  z-index: 3;
  padding: 0 30px;
  width: 100%;
`;
const UserImage = styled.img`
 height: 100%;
 border-radius: 35%; 
  
  
`
const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  background: #2c3e50;
  padding: 10px;
  
  border-radius: 2px;
  letter-spacing: 3px;
  border: 1px solid #bdc3c7;
  opacity: 0;
  transition: opacity .5s;
  font-size: 14px;
  visibility: hidden;
  
`
const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover{
    
  ${DropDown}{
    opacity: 1;
    visibility: visible;
  }
  }


`
export default Header;
