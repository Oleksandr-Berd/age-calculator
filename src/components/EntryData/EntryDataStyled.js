import styled from "@emotion/styled";
import { Field } from "formik";
import line from "../../assets/images/Frame 29.png";

export const DataConCustom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-bottom: 32px;

  text-align: left;

  & label {
    display: inline-block;
    margin-bottom: 4px;

    text-transform: uppercase;
    color: #716f6f;
    font-family: "Poppins", Arial, sans-serif;
    font-size: 12px;
    letter-spacing: 3px;
  }

  & > div:not(:last-child) {
    margin-right: 16px;
  }
`;

export const FieldCustom = styled(Field)`
  width: 88px;

  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 15px;

  font-size: 20px;
  font-family: "Poppins", Arial, sans-serif;

  box-sizing: border-box;
  border-radius: 12px;
border: 1px solid  #dcdcdc;

  box-shadow: none;

   &:focus {
    outline: none;
  }
`;

export const ButtonCustom = styled.button`
  position: relative;

  padding: 20px;

  background-color: #854dff;

  border-radius: 50%;

  & > img {
    width: 24px;
    height: 24px;
  }

  &::before {
    position: absolute;
    top: 50%;
    left: 0;

    transform: translateX(-100%) translateY(-50%);

    content: url(${line});
  }

  &::after {
    position: absolute;
    top: 50%;
    right: 0;

    transform: translateX(100%) translateY(-50%);

    content: url(${line});
  }
`;
