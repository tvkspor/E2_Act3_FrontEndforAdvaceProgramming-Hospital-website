// import React from "react";
import styled from "styled-components";

export const PageTitle = styled.div`
  position: relative;
  padding: 80px 0px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: right;
  z-index: 2;

  &::before {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #ffffff;
    content: "";
    opacity: 0.5;
  }
`;
export const AutoContainer = styled.div`
    position: static;
    max-width: 1200px;
    padding: 0px 15px;
    margin: 0 auto;
    width: 100%;
`;
export const TitleOuter = styled.div`
    position: relative;
    display: inline-block;
    border-radius: 10px;
    margin: 0px;
    padding: 0px;
    border: none;
    outline: none;
    font-size: 100%;
`;
export const PageTitleh1 = styled.h1`
    color: #16a085;
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2em;
    margin: 0 0px;
    word-break: break-word;
`;
export const BodyPage = styled.body`
    position: relative;
    background-repeat: no-repeat;
    background-position: left top;
    padding: 120px 0;
    background-color: #fafafa;
    margin: auto;
`;
export const SearchKhoa = styled.div`
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
`;
export const SearchList = styled.div`
    padding-top: 20vh;
    width: 40%;
    margin: auto;
    display: inline-flexbox;
    flex-direction: column;
    align-items: center;
    min-width: 200px;
`;
export const InputWrapper = styled.div`
    background-color: white;
    width: 100%;
    border-radius: 2.5rem;
    padding: 0 15px;
    box-shadow: 0px 0px 8px #ddd;
    display: flex;
    align-items: center
    
`;
export const ServicesTow = styled.section`
    position: relative;
    background-repeat: no-repeat;
    background-position: left top;
    padding: 120px 0;
    background-color: #fafafa;
    margin: auto;
`;
export const CarouselOuter = styled.div`
    margin: -20px -20px 0;
`;
export const Roww = styled.div`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`;
export const BlockTwo = styled.div`
    padding: 20px;
    position: relative;
    margin-bottom: 30px;
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    padding-right: 15px;
    padding-left: 15px
`;
export const InnerBox = styled.div`
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, .10);
    -moz-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    transition: all 300ms ease;
`;
export const ImageBox = styled.div`
    position: relative;
    border: 10px solid #ffffff;
    &::hover{
        opacity: 0;
    }
`;
export const Image = styled.figure`
  position: relative;
  margin-bottom: 0;
  overflow: hidden;
  margin: 0 0 1rem;
`;

export const Img = styled.img`
  position: relative;
display: block;
  width: 100%;
  transition: all 300ms ease;
  &:hover {
    transform: scale(1.2);
  }
`;
// export const Image = styled.figure`
//     position: relative;
//     margin-bottom: 0;
//     overflow: hidden;
//     margin: 0 0 1rem;
// `;
// export const Img = styled.img`
//     position: relative;
//     display: block;
//     width: 100%;
//     -webkit-transition: all 300ms ease;
//     -moz-transition: all 300ms ease;
//     -ms-transition: all 300ms ease;
//     -o-transition: all 300ms ease;
//     transition: all 300ms ease;
//     &::hover{
//         -webkit-transform: scale(1.2);
//         -moz-transform: scale(1.2);
//         -ms-transform: scale(1.2);
//         -o-transform: scale(1.2);
//         transform: 'scale(1.2)';
//     }
// `
export const LowerContent = styled.div`
    position: relative;
    padding: 30px 20px 40px;
    background-color: #ffffff;
`;
export const TitleBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;
export const Text = styled.div`
    position: relative;
    font-size: 15px;
    line-height: 26px;
    color: #666666;
    font-weight: 400;
    margin: 0;
`;