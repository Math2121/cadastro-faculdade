import styled from "styled-components";

export const Container = styled.div`
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
