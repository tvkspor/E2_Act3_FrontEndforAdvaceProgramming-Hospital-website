import styled from "styled-components";

export const WrapperContainerLeft = styled.div`
    flex: 1;
    padding: 40px 45px 24px;
    display: flex;
    flex-direction: column;
`;
export const WrapperButton = styled.button`
    background-color: #16a085;
    font-size: medium;
    color: #fff;
    padding: 10px 20px;
    width: 100%;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover{
      opacity: 0.8;
    }
`;
export const WrapperContainerRight = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
export const WrapperTextLight = styled.span`
    color: rgb(13, 92, 182);
    font-size: 13px;
    cursor: pointer;
`;