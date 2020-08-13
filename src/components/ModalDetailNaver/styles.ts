import styled from 'styled-components';

export const DetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  img {
    width: 100%;
    max-width: 504px;
    margin: 0 auto;
  }

  & > div {
    padding: 32px;
    flex: 1;
  }

  h2 {
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 10px;
  }

  strong {
    display: block;
    margin-top: 24px;
  }

  p {
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  margin-top: 110px;

  button {
    & + button {
      margin-left: 16px;
    }
  }
`;
