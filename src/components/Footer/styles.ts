import styled from "styled-components"
const colors = ['whitesmoke', '#4f4f4f']
export const Footer = styled.footer`
user-select: none;
background-color: #141414;
display: flex;
flex-direction: column;
margin-top: 90px;
align-items: center;
text-align: center;
color: whitesmoke;
@media(max-width: 760px){
    width: 100%;
    margin-top: 90px;
}
`
export const Options = styled.div`
margin-top: 15px;
@media(max-width: 760px){
    margin-top: 65px;
    justify-content: center;
}
display: flex;
flex-direction: row;
justify-content: center;
`
export const Option = styled.div<{ show: number }>`
cursor: pointer;
background-color: ${({ show }) => colors[show]};
color: ${({show}) => show ? 'whitesmoke' : 'black'};
padding: 10px;
border-radius: 5px;
:hover{
    background-color: #2e2e2e;
    color: whitesmoke;
}
transition: ease-in 0.2s;
`
export const Title = styled.span`
user-select: none;
`
export const Vr = styled.span`
user-select: none;
display: hidden;
height: 10px;
width: 2px;
margin-top: 10px;
color: #14213d;
`
export const Info = styled.div`
padding: 12px;
padding-left: 420px;
margin-top: 15px;
`
export const MeasureInfo = styled.div<{ showMe: number }>`
display: ${({ showMe }) => showMe ? 'flex' : 'none'};
flex-direction: column;
max-width: 55%;
text-align: center;
@media(max-width: 760px){
    max-width: 80%;
    font-size: 20px;
    margin-top: 40px;
    margin-left: -10px;
}
`
export const Formula = styled.span`
color: #b5b3b3;
font-weight: bolder;
padding-left: 15px;
`
export const Description = styled.span`
padding-top: 12px;
color: #9c9a9a;
max-width: 100%;
font-weight: bold;
`

