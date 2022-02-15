import styled from "styled-components";

export const Contacts = styled.section`
  padding: 0 2rem;
  margin-bottom: 2em;

  a {
    margin-right: 1em;
  }

  @media screen and (max-width: 767px) {
    & > p {
      display: flex;
      flex-direction: column;
      align-items: start;
    }
    a {
      margin-right: 0;
      margin: 0.25em 0;
    }
  }
`;
