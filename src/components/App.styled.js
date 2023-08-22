import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
  background: #ffffff;
  border-bottom: 1px solid #422602;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
  background-image: linear-gradient(
    to top,
    rgb(131, 75, 3),
    rgb(235, 220, 202),
    rgb(131, 75, 3)
  );
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  color: #000;
  margin-left: 16px;
`;
export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const StyledCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
