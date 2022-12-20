import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.black};
`;

export const ProductLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.black};
`