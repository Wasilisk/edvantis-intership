import styled from "styled-components";

export const FormFieldStyles = styled.div`
  position: relative;
  
  .label {
    margin-bottom: 6px;

    .label-text {
      line-height: 1.5;
      letter-spacing: .05em;
      color: #707070;
    }
    .label-required {
      margin-left: 5px;
      color: #cc3833;
    }
  }
  
  .error {
    position: absolute;
    bottom: -32px;
    color: #cc3833;
    font-size: 12px;
  }
`;