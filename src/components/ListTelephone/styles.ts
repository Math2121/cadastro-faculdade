import styled from "styled-components";

export const Container = styled.div`
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

  width: 100%;
  margin-top: 1.5rem;
  color: #fff;
  table {
    width: 100%;
    overflow-x: auto;
    td {
      padding: 1rem 0;
    }
    thead {
      tr {
        background-color: #252525;
        td {
          &:first-child {
            padding: 0 0 0 20px;
          }
        }
      }
    }
    tbody {
      tr:nth-child(even) {
        background-color: #252525;
      }
    }
    button {
      cursor: pointer;
      &:first-child {
        margin-right: 1rem;
      }
      border: 0;
      background: transparent;
      color: var(--yellow);
      font-size: 16px;
    }
  }
`;
