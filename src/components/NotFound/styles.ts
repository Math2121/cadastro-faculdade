import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  &::after {
    content: "";
    display: table;
    clear: both;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  h1 {
    font-size: 5rem;
    color: var(--yellow);
    font-weight: bold;
  }
  p {
    color: #fff;
    margin-top: 1rem;
  }
`;
