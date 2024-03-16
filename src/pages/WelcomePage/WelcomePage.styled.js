import styled from "styled-components";
import bgMainDesctop from '../../assets/desktop/background-main-page-layers.svg'
import waveRight from '../../assets/mobile/background-wave-right.svg';
import waveLeft from '../../assets/mobile/background-wave-left.svg';
import bgMain from '../../assets/tablet/background-main-page-f.svg'

export const StyledFullPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image:url(${waveRight}), url(${waveLeft});
  background-repeat: no-repeat;
  background-position:bottom -75px left -916px, bottom right -1650px;
  background-size:3271px 1134px, 2725px 658px;
    @media only screen and (min-width: 768px) {
      justify-content: space-between;
      background-image:url(${bgMain});
      background-position: bottom;
      background-size: 100%;
  }
    @media only screen and (min-width: 1440px) {
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      background-image: url(${bgMainDesctop}) ;
      background-repeat: no-repeat;
      background-position: bottom;
  }
`

export const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin:1rem 1.25rem 2.5rem 1.25rem;
    @media only screen and (min-width: 768px) {
      margin: 1.5rem 2rem;
      align-items: flex-start;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    margin: 4.2rem 6.5rem;
    gap: 5rem;
     }
`
export const StyledInnerContainerLeft = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
h3{
  font-size: 18px;
  line-height: 1.11111;
  @media only screen and (min-width: 1440px) {
    margin-top: .5rem;
    margin-bottom: 1rem;
}
}
`

export const StyledMainTitle = styled.h1`
margin: 0;
@media only screen and (min-width: 768px) {
  font-size: 2.25rem;
  line-height: 1.16667;
  }
@media only screen and (min-width: 1440px) {
  line-height: 1.16667;
  }
`
export const StyledTitle = styled.h2`
font-weight: 400;
line-height: 1.25;
margin: 1rem 0;
@media only screen and (min-width: 768px) {
    letter-spacing: 1px;
}
`
export const StyledListLeft = styled.ul`
margin: 0;
padding: 0;
text-align: left;
@media only screen and (min-width: 768px) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
  @media only screen and (min-width: 1440px) {
    flex-direction: column;
  }
li{
  display: flex;
  align-items: center;
  margin-top: 1rem;
  @media only screen and (min-width: 768px) {
    min-width: 224px;
    gap: 1rem;
  }
  @media only screen and (min-width: 1440px) {
    gap:.25rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }
}
`

export const StyledIconWrapper = styled.svg`
width: ${(props) => props.size || '32px'};
height: ${(props) => props.size || '32px'};
fill: ${(props) => props.color || '#fffff'};
display: inline - block;
margin-right: 5px;
@media only screen and (min-width: 768px) {
  width: ${(props) => props.size || '40px'};
height: ${(props) => props.size || '40px'};
  }
`;

export const StyledInnerContainerRight = styled.div`
border-radius: 10px;
box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.3);
background: var(--secondary-white);
text-align: left;
list-style-position: inside;
display: flex;
@media only screen and (min-width: 768px) {
  margin-top: 1.25rem;

}
`
export const StyledNameList = styled.h3`
font-size: 18px;
line-height: 1.11111;
margin: 0 -1rem;
@media only screen and (min-width: 1440px) {
  margin-top: .5rem;
}`

export const StyledListRight = styled.ul`
padding: 1.5rem 1rem 1.5rem 2rem;
display: flex;
flex-direction: column;
justify-content: space-between;
list-style-position: outside;
@media only screen and (min-width: 768px) {
  padding: 2rem 2.5rem;
}
li{
  margin: 1rem 0 0;
  line-height: 1.25;
  text-indent:-1rem;
  &:before{
    content: '';
    display: inline-block;
    width: .5rem;
    height: .5rem;
    border-radius: 50%;
    background-color: var(--blue);
    margin-right: 6px;
}
}
`
export const StyledWelcomeButton = styled.button`
border-radius: 10px;
border: none;
padding: .5rem;
margin-top: 1.5rem;
margin-bottom: 2.5rem;
box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
background: var(--blue);
font-weight: 500;
font-size: 18px;
line-height: 1.33333;
color: var(--white);
width: 100%;
@media only screen and (min-width: 768px) {
  width: 50%;
}
@media only screen and (min-width: 1440px) {
  width: 24rem;
  margin-top: .5rem;
}

`

