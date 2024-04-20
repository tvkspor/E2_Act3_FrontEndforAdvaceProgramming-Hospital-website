import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const h3 = styled.h3`
font-size: 18px;
font-weight: bold;
margin-top: 12px;
color: #333;
`;

export const WrapperImg = styled.div`
display: flex;
align-items: center;
justify-content: center;
 `;

 export const WrapperProductCard = styled.div`
 display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  height: inherit;
 box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
 transition: box-shadow 0.3s ease;

 &:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
 `;

export const WrapperPrice = styled.div`
font-size: 16px;
color: #007bff;
margin-top: 8px;
 `; 
 
 export const WrapperKhung = styled.div`
 display: grid;
 grid-template-columns: repeat(2, minmax(0, 1fr));
 gap: 0.5rem;
 @media (min-width: 768px) {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.625rem;
 }
  `;  
  export const WrapperProduct = styled.div`
  height: 100%;
  padding: 12px;
  background-color: var(--white);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in;
  border: 1px solid var(--white);
  `;  
  
  export const a = styled.a`
  color: inherit;
  text-decoration: inherit;
  `;  
  export const WrapperRibbon = styled.div`
  height: 44px;
  position: relative;
  margin-top: -6px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  `;  
  export const WrapperRibbonTopLeft = styled.div`
  position: relative;
  padding: 4px 12px 4px 8px;
  background: var(--blue-100);
  border-radius: 0 12px 12px 0px;
  margin-left: -16px;
  display: -webkit-inline-box;
  `;  

  export const WrapperContent = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  margin-top: 10px;
  `;  
  export const WrapperLink = styled.div`
  height: 60px;
    margin-bottom: 4px;
  `;  
  export const WrapperAttention = styled.div`
    color: var(--gray-600);
    height: 40px;
    margin: 4px 0px 8px 0px;
padding-top: .25rem;
padding-bottom: .25rem;
padding-left: .5rem;
padding-right: .5rem;
text-align: center;
  `;  
  export const WrapperProductPrice = styled.div`
  margin-top: 12px;

`; 
export const WrapperNew = styled.div`
color: var(--blue-500);
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
font-weight: 600;
font-size: 20px;
    line-height: 24px;
`; 

export const WrapperDungLuong = styled.div`
margin: 4px 0px 8px 0px;

`; 
export const p = styled.p`
display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
`; 
export const WrapperThanhphan = styled.div`
margin-top: auto;
font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.95rem;
    letter-spacing: 0.02rem;
    margin-top: 2px;
    color: var(--gray-700);
`; 

export const WrapperNgoaiKhung = styled.div`

`;
export const WrapperKhungChinh = styled.div`
    display: grid;
    grid-template-columns: 289px 907fr;
    gap: 1.25rem;
    flexWrap: wrap;
`;
export const WrapperKhungBen = styled.div`
tab-size: 4;
font-feature-settings: normal;
font-family: '__Inter_b36e76', '__Inter_Fallback_b36e76'!important;
line-height: inherit;
font-size: var(--root-font-size);
box-sizing: border-box;
border: 0 solid #e5e7eb;
display: block;
`;
export const WrapperKhungBenBenTrong = styled.div`
padding-bottom: 1rem;
background-color: var(--white);
border-radius: .75rem;
top: .75rem;
position: sticky;
`;
export const WrapperBoLoc = styled.div`
color: var(--gray-1000);
    padding-top: .75rem;
    padding-bottom: .5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-color: var(--gray-200);
    border-bottom-width: 5px;
    align-items: center;
    display: flex;
    border-radius: 10px;
`;
export const WrapperIcon = styled.div`
    width: 30px;
    height: 30px;
`;
export const svg = styled.svg`
display: block;
vertical-align: middle;
`;
export const WrapperKhungDuoiBoLoc = styled.div`
scrollbar-gutter: stable;
padding-left: 1rem;
padding-right: 1rem;
overflow: auto;
max-height: calc(100vmin - 45px - 2* 12px - 16px);
`;
export const WrapperDoiTuongSuDung = styled.div`
    padding-top: 1rem;
    border-top-width: 0;
    padding-top: .75rem;
    padding-bottom: .5rem;
    border-color: var(--gray-200);
    border-top-width: 1px;
`;
export const WrapperChuDoiTuongSuDung = styled.div`
  gap: .75rem;
  cursor: pointer;
  display: flex;
`;
export const span = styled.span`
display: inline-block;
vertical-align: -0.125em;
`;
export const WrapperNutDoiTuongSuDung = styled.div`
flex-shrink: 0;
    width: 1.5rem;
    height: 1.5rem;
    margin-left: auto;
    align-items: center;
`;
export const WrapperPhanLoaiDoiTuongSuDung = styled.div`
grid-template-rows: 1fr;
    display: grid;
    grid-template-rows: 0fr;
    grid-template-rows: 1fr;
    display: grid;
    grid-template-rows: 0fr;
    transition-property: grid-template-rows;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;
`;
export const WrapperPhanLoaiDoiTuongSuDungA = styled.div`
diplay: flex;
`;
export const label = styled.div`
boxSizing: 'border-box',
margin: 0,
padding: 0,
color: 'rgba(0, 0, 0, 0.88)',
fontSize: '14px',
lineHeight: 1.5714285714285714,
listStyle: 'none',
fontFamily: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, \'Noto Sans\', sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\', \'Noto Color Emoji\'',
display: 'inline-flex',
alignItems: 'baseline',
cursor: 'pointer',
    
`;

export const WrapperButtonMore = styled(ButtonComponent)`
 &:hover {
    color: #fff;
    background: rgb(13, 92, 182);
    span{
        color: #fff;
    }
 }
 width: 100%;
 text-align: center;
`;

