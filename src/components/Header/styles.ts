import styled from "styled-components";
const height = window.innerHeight;

const Container = styled.div`
  padding: 0.8rem 2.4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: var(--blue-300);

  #right-header-icons-wrapper {
    display: flex;
    flex-directoin: row;
    align-items: center;

    .functional-icon {
      margin: 0 0.5rem;
    }
  }
`;

export default Container;
