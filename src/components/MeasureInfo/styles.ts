import styled from "styled-components"

const colors = ['whitesmoke', '#2e2e2e']
export const Container = styled.div`
padding-left: 15px;
margin-top: -35px;
@media(max-width: 760px){
    margin-top: 40px;
    justify-content: center;
}
`
export const Options = styled.div`
padding-left: 110px;
margin-top: 38px;
@media(max-width: 760px){
    margin-top: 65px;
    justify-content: center;
}
width: 35%;
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
    background-color: #141414;
    color: whitesmoke;
}
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
`
export const MeasureInfo = styled.div<{ showMe: number }>`
display: ${({ showMe }) => showMe ? 'flex' : 'none'};
flex-direction: column;
max-width: 45%;
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

