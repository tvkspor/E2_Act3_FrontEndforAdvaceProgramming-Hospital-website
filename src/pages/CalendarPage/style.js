import styled from "styled-components";

export const WrapperCalendar = styled.div`
  .ant-picker-calendar {
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
  }

  ${'' /* .ant-picker-cell-in-view {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  } */}

  .ant-picker-cell-today .ant-picker-cell-inner {
    border: 2px solid #1890ff;
    ${'' /* border-radius: 50%; */}
  }

  .note {
    display: flex;
    align-items: center;
  }

  ${'' /* .note .ant-badge-status {
    margin-right: 8px;
  } */}
`;
