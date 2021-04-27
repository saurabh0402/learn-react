import React from 'react';
import styled, { useTheme } from 'styled-components';
import * as icons from 'react-icons/bs';

const StyledButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: ${(props) => props.theme.switcher.color};
  & * {
    transition: color 0.1s;
  }

  & :hover {
    background: none;
    border: none;
    color: ${(props) => props.theme.switcher.hoverColor};
  }
`;

const Cont = styled.div`
  width: 100%;
  padding: 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  text-align: right;
`;

const Header = ({ toggleTheme }) => {
  const theme = useTheme();
  const IconComponent = icons[theme.switcher.icon];

  return (
    <Cont>
      <StyledButton onClick={toggleTheme}>
        <IconComponent />
      </StyledButton>
    </Cont>
  );
};

export default Header;
