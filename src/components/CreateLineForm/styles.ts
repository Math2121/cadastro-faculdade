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
  h1 {
    margin-bottom: 2rem;
    color: #fff;
    font-size: 20px;
    border-left: 5px solid var(--yellow);
    padding: 0.5rem 0.5rem 1rem 1rem;
  }
`;

export const FormUser = styled.form`
  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 16px;
    height: 16px;
    margin: 0 auto;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .input-group {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    label {
      color: #fff;
      font-size: 14px;
      margin-bottom: 10px;
      align-self: flex-start;
    }
    input,
    select {
      &::placeholder {
        color: #fff;
        padding: 10px;
      }
      color: #fff;
      width: 100%;
      border: 1px solid var(--yellow);
      background: #1c1c1b !important;
      height: 2rem;
      border-radius: 4px;
      margin-bottom: 1.2rem;
      &:focus {
        border: 1px solid var(--yellow);
      }
    }
  }
  .btn {
    display: block;
    border: 1px solid var(--yellow);
    background-color: var(--yellow);
    width: 100%;
    color: var(--black);
    font-size: 18px;
    height: 2rem;
    width: 10rem;
    border-radius: 4px;
    cursor: pointer;
    margin: 0 auto;
    font-weight: bold;
    transition: all 0.2s ease;
    &:hover {
      transform: scale(0.9);
    }
  }
`;
