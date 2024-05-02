import { Upload } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled.h1`
    color: #000;
    font-size: 14px;
`;

export const WrapperUploadFile = styled(Upload)`
    & .ant-upload.ant-upload-select.ant-upload-select-picture-card {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    & .ant-upload-list-item-info {
        display: none
    }
    & .ant-upload-list-item {
        display: none;
    }
`;

export const WrapperLabel = styled.label`
  color: #000;
  font-size: 12px;
  line-height: 30px;
  width: 80px;
  text-align: left;
`;

export const WrapperInput = styled.div`
  display: flex;
  align-items: cemter;
  gap: 20px;
`;