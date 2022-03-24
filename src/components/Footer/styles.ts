import styled from "styled-components";

interface IProps {
  closeToExpiration: boolean;
}

const Container = styled.div<IProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 47px;
  padding: 0 1.2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: var(--white-500);

  div {
    display: flex;
    flex-direcion: row;
    h4 {
      margin-right: 0.4rem;
    }
  }

  #license {
    color: ${(props) => props.closeToExpiration ? 'var(--red-300)' : 'var(--green-500)'};
  }
`;

export default Container;
