import { styled } from "styled-components";

const HeaderWrapper = styled.header`
    text-align: center;
    width: 100vw;
    height: 100px;
    
    @media (max-width: 640px){
        height: 80px;
    }
`
const H1 = styled.h1`
    @import '../../styles/variables.css';

    line-height: 100px;
    font-size: 38px;
    color: var(--catskill-white-800);
    font-weight: 700;
    transition: all 0.2s ease;

    @media (max-width: 640px){
        line-height: 80px;  
        font-size: 24px;
    }
`

const Header = function () {
    return (
        <HeaderWrapper>
            <H1>Today's tasks</H1>
        </HeaderWrapper>
    );
}

export default Header;