import styled from 'styled-components'
import logo from '../../images/topbackground.jpg'
export const Container = styled.header`
@media(max-width: 760px){
  width: 567px;
}
`
export const BackgroundTop = styled.div`
background-image: url(${logo});
height: 18vh;
`
export const Presentation = styled.div`
display: flex;
`
export const Title = styled.h1`
color: whitesmoke;
user-select: none;
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
@media(max-width: 760px){
  width: 102%;
}
padding-left: 20px;
height: 100%;
box-shadow: 0 1px 0 #fca311;
`
export const Dropdown = styled.ul`
position: absolute;
display: inline-block;
z-index: 5;
padding: 0;
top: 30px;
left: 2px;
width: 215px;
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
:hover{
  color: whitesmoke;
  background-color: #262626;
}
&:first-child{
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
&:last-child{
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}
`
export const ItemTitle = styled.span`
user-select: none;
`
export const Option = styled.div`
cursor: pointer;
position: relative;
padding: 15px 35px;
display: flex;
:hover{
      background-color: #ff9e00;
      ${DropdownItem}{
        display: block;
        text-align: center;
      }
    }
`