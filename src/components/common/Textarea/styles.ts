import styled from "styled-components";
import {InputStyles} from "../Input/styles";

export const TextareaStyles = styled(InputStyles).attrs({
    as: "textarea"
})`
  resize: none;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`