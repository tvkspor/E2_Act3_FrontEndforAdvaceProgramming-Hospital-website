import { Upload } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled.h1`
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-shadow: var(--text-shadow);
    text-transform: uppercase;
    color: var(--green); /* Màu chữ xám đậm */
    font-size: 3rem;
    letter-spacing: .4rem;
    // background-color:rgb(39, 174, 96);
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
`