import styled from 'styled-components';

export const Container = styled.div`
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;

  @media (max-width: 700px) {
    width: calc(100% - 28px);
  }
`;
