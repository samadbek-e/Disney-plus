import React from 'react'
import styled from "styled-components"
import { Helmet } from 'react-helmet'
const Login = (props) => {
    return (
        <Container>
            <Helmet>
                <title>{`Disney plus clone | login`}</title>
            </Helmet>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" />
                    <SignUp>Get All Film</SignUp>
                    <Description>
                    Terms apply. Premier Access to Cruella requires a Disney+ subscription and an additional fee. 
                    </Description>
                    <CTALogoOne src="/images/cta-logo-two.png" style={{padding: "0 20px"}} />
                </CTA>
                <BgImage /></Content>
        </Container>
    )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh
`
const Content = styled.div`
    margin-bottom: 10vw;
    padding-top: 70px;
    width: 100%;
    overflow: auto;
    position: relative;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
`

//Postion not absolute
const BgImage = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    background-position:  top;
    z-index: -1;
    background-image: url("/images/login-background.jpg")
`
const CTA = styled.div`
    padding:0 40px ;
    margin-bottom: 2vw;
    max-width: 650px;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition-timing-function: ease-out ;
    transition: opacity .2s;
    width: 100%;
`

const CTALogoOne = styled.img`
    padding-bottom: 12px;
    min-height: 1px;
    max-width: 600px;
    user-select: none;
    width: 100%;
    min-width: 200px;
`
const SignUp = styled.a `
    user-select: none;
    font-weight: bold;
    color: #fff;
     background-color: #0063e5;
     padding: 17px 8px;
     margin-bottom: 12px;
     letter-spacing: 1.5px;
     width: 100%;
     margin-bottom: 1.2em;
     font-size: 18px;
     cursor: pointer;
     border-radius: 4px;
     &:hover{
        background: #1b7cfa;
     }
     @media(max-width: 400px){
         font-size: 13px;
         padding: 5px 10px;
     }
     transition: ease-out.2s;

`
const Description = styled.p`
     font-size: 12px;
     margin: 0 0 24px;
     line-height: 1.7;
`
export default Login
