import styled from "styled-components";

const Container = styled.div`
  margin-top: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .subtitles-container {
    width: 80%;
    display: flex;
    flex-direction: column;

    .subtitles-box {
      margin: 0.8rem;
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      div {
        display: flex;
        flex-direction: row;
        align-items: center;

        .subtitle-box-color {
          height: 2.2rem;
          width: 5.8rem;

          border-radius: 0.4rem;
        }

        .entries {
          background-color: var(--blue-500);
        }
        .profit {
          background-color: var(--green-300);
        }

        .exits {
          background-color: var(--red-300);
        }

        h3 {
          margin-left: 0.4rem;
        }
      }
    }
  }
`;

export default Container;
