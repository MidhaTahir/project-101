import styled from "@emotion/styled";

export const OnboardingStyled = styled.div`
  margin: auto;
  margin-top: 190px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;

  .main-form-class {
    width: 40vw;
    min-width: 300px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .input-box {
    border-radius: 25px;
  }
  .round-input .MuiOutlinedInput-root {
    border-radius: 25px;
    height: 48px;
  }

  .complete-btn {
    width: 100%;
    border-radius: 25px;
    height: 48px;
    margin-top: 16px;
  }

  p {
    margin-bottom: 4px;
    font-size: 16px;
    color: #000;
  }

  .error {
    color: #d32f2f;
    font-size: 15px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.66;
    letter-spacing: 0.03333em;
    text-align: left;
    margin-top: 3px;
    margin-right: 14px;
    margin-bottom: 0;
    margin-left: 14px;
  }
`;

export const PhoneInputStyled = styled.div`
  .phone-container {
    .selected-flag {
      padding: 10px;
      width: 46px;

      &:hover,
      &:focus {
        background-color: transparent;
      }
    }

    .flag-dropdown {
      top: 2px;
      bottom: 2px;
      left: 2px;
      border-radius: 8px 0 0 8px;
      border-color: transparent;
      background-color: transparent;

      &.open {
        border-radius: 8px;
        background: transparent;
      }
    }
  }
  .input-container {
    width: 100%;
    border-radius: 25px;
    height: 48px;
    padding: 14px 25px;
    padding-left: 60px;
    border-color: ${({ isInvalid }) => isInvalid && "red"};
  }
`;
