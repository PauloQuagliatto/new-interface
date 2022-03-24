import styled from "styled-components";

interface IProps {
  selected: boolean;
}

const Container = styled.div<IProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .menu-item {
    ${(props) => props.selected && "border-bottom: 1px solid white"}
  }
  .first-submenu {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    background-color: var(--blue-100);

    border-radius: 0.4rem;
  }
`;

export default Container;
