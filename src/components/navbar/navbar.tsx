import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
    width: 100%;
    height: 60px;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);

    display: flex;
    flex-direction: row;
    align-items: center;
`;

const NavbarTitle = styled.div`
    margin-left: 70px;
    font-size: 30px;
    font-weight: 700;
    cursor: pointer;
`;

const Navbar: React.FC = () => {
    return (
        <StyledNavbar>
            <NavbarTitle>
                running-buddies
            </NavbarTitle>
        </StyledNavbar>
    );
}

export default Navbar;