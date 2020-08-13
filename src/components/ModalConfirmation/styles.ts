import styled from 'styled-components';

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 32px;

  button {
    &:first-child {
      border: 1px solid #212121;
      background: none;
    }

    width: 176px;
    margin-left: 24px;
  }
`;
