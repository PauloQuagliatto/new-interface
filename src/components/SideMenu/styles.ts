import styled from "styled-components";

interface IProps {
  isOpen: boolean;
}

const Container = styled.div<IProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100vh;

  ${(props) => !props.isOpen && "display: none;"}

  #overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
  }

  #nav-container {
    height: 100%;
    width: 300px;
    padding: 1.8rem 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    background-color: var(--blue-300);

    #side-menu-close-icon {
      position: absolute;
      top: 0;
      right: 0;
      margin: 0.4rem;

      color: white;

      font-size: 1.8rem;

      cursor: pointer;

      transition: 0.2s ease;
      &:hover {
        filter: brightness(0.8);
      }
    }

    h3 {
      margin: 0.8rem;

      color: white;

      font-size: 1.4rem;

      cursor: pointer;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;

export default Container;
