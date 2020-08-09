import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #212121;

  display: flex;
  flex-direction: column;

  align-self: center;
  margin: 0 auto;

  width: 100%;
  max-width: 448px;
  padding: 40px 32px;

  h1 {
    font-size: 18px;
    margin: 24px 0 12px;
  }

  img {
    height: 60px;
  }

  p {
    font-weight: normal;
    font-size: 12px;
    margin-top: 16px;
    text-align: center;
    color: #212121;

    a {
      color: #424242;
    }
  }
`;
