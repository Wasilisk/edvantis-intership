import styled from "styled-components";
import {FormFieldStyles} from "../common/FormField/styles";

export const FeedbackFormStyles = styled.form`
  
  & > ${FormFieldStyles} {
    margin-bottom: 24px;
  }
`;