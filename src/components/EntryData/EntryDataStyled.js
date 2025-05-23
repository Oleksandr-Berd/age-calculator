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

  @media (min-width: 1280px) {
    justify-content: flex-start;

    & label {
      display: block;

      margin-bottom: 8px;

      font-size: 14px;
    }

    & > div:not(:last-child) {
      margin-right: 32px;
    }
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
  border: 1px solid #dcdcdc;

  box-shadow: none;

  &:focus {
    outline: none;
  }

  @media (min-width: 1280px) {
    width: 160px;

    padding-left: 24px;

    font-size: 32px;
  }
`;

export const ButtonConCustom = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const ButtonCustom = styled.button`
  position: relative;

  padding: 20px;

  background-color: #854dff;

  border-radius: 50%;

  transition: background-color 0.3s linear;

  &:active,
  &:hover,
  &:focus {
    background: #000;
    cursor: pointer;
    transition: background-color 0.3s linear;
  }

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

  @media (min-width: 1280px) {
    text-align: right;

    & > img {
      width: 40px;
      height: 40px;
    }

    &::after {
      content: "";
    }
  }
`;
