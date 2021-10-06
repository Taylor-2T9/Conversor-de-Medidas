import styled from 'styled-components'
import logo from '../../images/topbackground.jpg'
export const Container = styled.header`
`
export const BackgroundTop = styled.div`
background-image: url(${logo});
height: 20vh;
`
export const Presentation = styled.div`
display: flex;
`
export const Title = styled.h1`
color: whitesmoke;
margin-left: auto;
margin-right: auto;
`
export const HomeBar = styled.div`
user-select: none;
background-color: #ffb233;
display: flex;
z-index: 2;
top: 0;
width: (100vw - 20px);
padding-left: 20px;
height: 100%;
box-shadow: 0 1px 0 #fca311;
`
export const Dropdown = styled.div`
position: absolute;
display: inline-block;
margin-top: 28px;
background-color: whitesmoke;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
border-radius: 5px;
`
export const DropdownItem = styled.li`
display: none;
border-radius: 1px;
min-width: 100px;
padding: 8px 0px;
font-size: 16px;
font-weight: 500;
padding: 10px;
z-index: 1;
:hover{
  color: whitesmoke;
  background-color: #262626;
}
`
export const ItemTitle = styled.span`
`
export const Option = styled.div`
cursor: pointer;
padding: 15px 35px;
:hover{
      background-color: #ff9e00;
      ${DropdownItem}{
        display: flex;
        text-align: center;
      }
    }
`
export const Link = styled.a`
display: flex;
`