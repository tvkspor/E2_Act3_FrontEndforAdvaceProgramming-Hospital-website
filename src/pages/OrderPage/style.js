import { Checkbox } from "antd";
import styled  from "styled-components";

export const WrapperHeader = styled.h1`
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-shadow: var(--text-shadow);
    text-transform: uppercase;
    color: var(--green); /* Màu chữ xám đậm */
    font-size: 4rem;
    letter-spacing: .4rem;
    //background-color:  #d9eed3; /* Màu nền xanh lá cây nhạt */
`;
export const WrapperStyleHeader = styled.div`
  background: rgb(255, 255, 255);
  padding: 9px 16px;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 10px;
  z-index: 1;
  span {
    color: rgb(36, 36, 36);
    font-weight: 600;
    font-size: 20px;
  }
`
export const WrapperStyleHeaderDilivery = styled.div`
  background: rgb(255, 255, 255);
  padding: 9px 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  span {
    color: rgb(36, 36, 36);
    font-weight: 400;
    font-size: 13px;
  };
  margin-bottom: 4px;
`

export const WrapperLeft = styled.div`
  width: 70%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
`

export const WrapperListOrder = styled.div`
  max-height: 300px;
  overflow-y: auto;
  padding-bottom: 10px;
`

export const WrapperItemOrder = styled.div`
  display: flex;
  align-items: center;
  padding: 9px 16px;
  background: #fff;
  margin-top: 12px;
`

export const WrapperPriceDiscount = styled.span`
  color: #999;
  font-size: 12px;
  text-decoration: line-through;
  margin-left: 4px;
`
export const WrapperCountOrder  = styled.div`
  display: flex;
  align-items: center;
  width: 84px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const WrapperRight = styled.div`
  width: 40%;
  margin-left: 20px;
  display: flex ;
  flex-direction: column; 
  gap: 10px; 
  align-items: center;
  padding: 40px;
  padding-bottom: 10px;
  position: sticky;
  top: 10px;
  z-index: auto;
  align-self: flex-start;
  font-size: 20px;
`

export const WrapperInfo = styled.div`
  padding: 17px 20px;
  border-bottom: 1px solid #f5f5f5;
  background: #fff;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  width: 100%;
`

export const WrapperTotal = styled.div`
  display: flex;
   align-items: flex-start; 
   justify-content: space-between;
    padding: 17px 20px;
    background: #fff ;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
`

export const CustomCheckbox = styled(Checkbox)`
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #9255FD;
    border-color: #9255FD;
  }
  .ant-checkbox:hover .ant-checkbox-inner {
    border-color: #9255FD;
  }
`
export const WrapperTitle = styled.h1`
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    //text-shadow: var(--text-shadow);
    text-transform: uppercase;
    color: var(--green); /* Màu chữ xám đậm */
    font-size: 2rem;
    letter-spacing: .4rem;
    // background-color:  #d9eed3; /* Màu nền xanh lá cây nhạt */
`;