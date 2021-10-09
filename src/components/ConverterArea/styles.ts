import styled from 'styled-components'
const colors = [
    '#333',
    '#bc2a8d',
    '#0077b5'
]
export const Container = styled.form`
display: flex;
flex-direction: column;
padding-top: 30px;
`
export const InputsArea = styled.div`
display: flex;
padding: 10px 25px;
margin-left: auto;
margin-right: auto;
`
export const InputArea = styled.div`
display: flex;
flex-direction: column;
`
export const Measure = styled.label`
user-select: none;
position: absolute;
margin-left: 60px;
top: 290px;
@media(max-width: 760px){
  width: 130px;
}
font-size: 16px;
color: #c9c9c9;
font-weight: 500;
`
export const Equal = styled.span`
user-select: none;
font-size: 20px;
color: #c9c9c9;
font-weight: 500;
margin-top: 24px;
`
export const Input = styled.input`
padding:15px;
margin:15px;
border-radius:1px;
border:1px solid #ccc;
outline: darkslategray hidden;
font-family:inherit;
:disabled{
color: #141414;
border:1px solid #ccc;
outline: darkslategray hidden;
background-color: #bfbfbf;
}
`
export const ButtonArea = styled.div`
padding-top: 30px;
margin-left: auto;
margin-right: auto;
`
export const ConfirmButton = styled.button`
  cursor: pointer;
  user-select: none;
  background-color: #ff9d2e;
  border: 1px unset #2b2b2b;
  border-radius: 5px;
  color: black;
  font-weight: bolder;
  width: 125px;
  height: 40px;
  transition: 500ms all ease-in-out;
  :hover {
      background-color: #ff8700;
      color: whitesmoke;
  }
`
export const Wrapper = styled.div`
user-select: none;
position: fixed;
display: inline-table;
right: 0;
margin-right: 20px;
margin-top: 160px;
`
export const IconDiv = styled.div<{ backgroundColor: number }>`
position: relative;
display: flex;
justify-content: center;
align-items: center;
background-color: #ffffff;
border-radius: 50%;
margin: 10px;
width: 45px;
height: 45px;
font-size: 18px;
box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
cursor: pointer;
transition: all 0.4s ease-in-out;
  :hover {
  left: -5px;
  background-color: ${({ backgroundColor }) => colors[backgroundColor]};
  color: #ffffff;
  }
`
export const Link = styled.a`
`
export const Icon = styled.img`
width: 26px;
height: 26px;
`