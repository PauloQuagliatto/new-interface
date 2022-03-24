import styled from "styled-components";

interface IProps {
  selected: boolean;
}

const Container = styled.div<IProps>`
  position: relative;
  width: 100%;

  background-color: ${(props) =>
    props.selected ? "var(--blue-700)" : "var(--blue-100)"};

  border-radius: 0.4rem;

  .last-submenu {
    position: absolute;
    top: 0;
    right: -50%;
    z-index: 7000;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    border-radius: 0.4rem;
  }
`;

export default Container;
