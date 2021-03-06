import React from 'react';
import styled from 'styled-components';

const StyledSidebar = styled.aside`
    width: 250px;
    height: 100%;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 
                0px 4px 5px 0px rgba(0,0,0,0.14), 
                0px 1px 10px 0px rgba(0,0,0,0.12);
`;

const Sidebar: React.FC = () => {
    return (
        <StyledSidebar>
            sidebar
        </StyledSidebar>
    );
}

export default Sidebar;