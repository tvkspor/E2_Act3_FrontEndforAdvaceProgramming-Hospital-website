import styled from "styled-components"
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
export const WrapperSection = styled.section`
    padding: 1.5rem 0%;
`
export const WrapperHeadingSpan = styled.span`
    text-transform: uppercase;
    color: var(--green);
`
export const WrapperHeading = styled.h1`
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-shadow: var(--text-shadow);
    text-transform: uppercase;
    color: var(--black);
    font-size: 5rem;
    letter-spacing: .4rem;
`;

export const WrapperDoctorsBoxContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
    gap : 2rem;
    padding: 5rem 9%;
`;
export const WrapperDoctorsBoxContainerBox = styled.div`
    text-align: center;
    background: #fff;
    border-radius: .5rem;
    border:var(--border);
    box-shadow: var(--box-shadow);
    padding: 2rem;
 `;

export const WrapperDoctorsBoxContainerBoxImg = styled.img`
    height: 20rem;
    border-radius: .5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
 `;

export const WrapperDoctorsBoxContainerBoxH3 = styled.h3`
    color: var(--black);
    font-size: 2.5rem;
 `;

export const WrapperDoctorsBoxContainerBoxSpan = styled.span`
    color: var(--green);
    font-size: 1.5rem;
 `;

export const WrapperDoctorsBoxContainerBoxShare = styled.div`
    padding-top: 2rem;
`;

export const WrapperDoctorsBoxContainerBoxShareA = styled.a`
    height: 5rem;
    width: 5rem;
    line-height: 4.5rem;
    font-size: 2rem;
    color:var(--green);
    border-radius: .5rem;
    margin: .3rem;

    &:hover {
        background: var(--green);
        color: #fff;
        box-shadow: var(--box-shadow);
    }
`;

//! services
export const WrapperServicesBoxContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap : 2rem;
`

export const WrapperServicesBoxContainerBox = styled.div`
    background:#fff;
    border-radius: .5rem;
    // box-shadow: var(--box-shadow);
    // border:var(--border);
    padding: 2.5rem;

    `
export const WrapperDoctorsBoxContainerBtn = styled.span`
    display: flex;
    margin-top: 1rem;
    padding: 0.5rem;
    padding-left: 1rem;
    border: var(--border);
    border-radius: 0.5rem;
    // box-shadow: var(--green);
    // color: var(--green);
    cursor: pointer;
    font-size: 1.7rem;
    background: #fff;

    padding: 0.7rem 1rem;
    border-radius: 0.5rem;
    // background: var(--green);
    color: #fff;
    margin-left: 0.5rem;
`




//! Chuyên gia - bác sĩ

export const WrapperTextCenter = styled.div`
    display: block;
    unicode-bidi: isolate;
    text-align: center;
    margin-top: 20px;
    
    
`
export const WrapperH1 = styled.h1`
    display: inline-block;
    position: relative;
    color: #16a085;
    font-size: 40px !important;
    font-family: "HelveticaNeue";
    text-transform: uppercase;
    text-align: center;
`

export const WrapperAfter = styled.h1`
    position: absolute;
    content: "";
    left: 0;
    top: 6.5rem;
    bottom: 0;
    border-bottom: 5px solid #5D5D5D;
    width: 405px;
    height: 1px;


`
export const WrapperFilterForm = styled.form`
    display: block;
    margin-top: 0em;
    unicode-bidi: isolate;  
`
export const WrapperFilterChuyenGIa = styled.div`
    margin-bottom: 30px; 
    display: block;
    unicode-bidi: isolate;       
`
export const WrapperContainer = styled.div`
    padding-right: 10px;
    padding-left: 10px;
    margin-right: auto;
    margin-left: auto;
`
export const WrapperContainerRow = styled.div`
    margin-left: -5px;
    margin-right: -5px;
`
export const WrapperContainerRowDiv = styled.div`
    width: 100%;
    text-align: center;
    padding-bottom: 15px;
    margin-bottom: 15px;
    white-space: nowrap;
    overflow-y: auto;
    padding: 0;
`
export const WrapperLabel = styled.label`
    min-width: 100px;
    box-shadow: 0 1px 2px #ccc!important;
    border: 0px solid #eee;
    margin-left: 3px;
    margin-right: 3px;
    color: #333333;
    background: #F0F2F1;

    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
    border-radius: 10px;

    text-transform: uppercase;
    max-width: 100%;
    font-family: "HelveticaNeue";
}

    &:hover {
    background: #16a085;
    color: #fff;

    background-image: none;
    outline: 0;
    -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,.125);
    box-shadow: inset 0 3px 5px rgba(0,0,0,.125);
    }
`

export const WrapperContainerRowDiv2 = styled.div`
    width: 100%;
    position: relative;
    min-height: 1px;
    padding-right: 10px;
    padding-left: 10px;
    float: left;
`
export const WrapperContainerRowFlexMobile = styled.div`
    margin-left: -5px;
    margin-right: -5px;
    display: flex;
    flex-direction: row
    flex-wrap: nowrap
    align-content: normal
    justify-content: normal
    align-items: center 

    
}
`
export const WrapperContainerRowFlexMobileDiv = styled.div`
    padding-left: 5px;
    padding-right: 5px;
    margin-bottom: 10px;
    width: 25%;
    float: left;
`
export const WrapperSelect = styled.select`
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 10px;
    min-height: 30px;
    padding-left: 0 !important;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    text-transform: none;
    margin: 0;
    font: inherit;
    color: inherit;
    overflow: visible !important;


    letter-spacing: normal;
    word-spacing: normal;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
`
export const WrapperDivDoiTac = styled.div`
    margin-top: 20px;
    overflow: hidden;
    color: #fff;
    display: flex;
`
export const WrapperDivHeThong = styled.div`
    text-align: right;
    position: relative;
    color: #fff;
    width: 50%;
`

export const WrapperHeThongImg = styled.img`
    width: 100%;
    overflow: hidden;
    color: #fff;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border: 0;
`

export const WrapperImgInf = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 30px;
    text-align: center;
`

export const WrapperInfTP = styled.div`
    margin-bottom: 5px;
    font-size: 20px !important;
`
export const WrapperInfTPA = styled.a`
    color: #fff;
    text-decoration: none;
    outline: none;
    background-color: transparent;
`
export const WrapperInfTPI = styled.i`
    display: inline-block;
    font: normal normal normal 14px / 1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`

export const WrapperInfTPIDiv = styled.div`
    margin-top: 5px;
    font-size: 30px !important;
    font-family: "HelveticaNeue-Bold";
    font-weight: normal;
    line-height: 1.3;
`

export const WrapperInfTPIDivA = styled.a`
    text-decoration: none;
    outline: none;
    background-color: transparent;
    color: #fff;
    box-sizing: border-box;
`
//!

export const WrapperSlide = styled.div`
    overflow: hidden;
    display: block;

`

export const WrapperProducts = styled.div`
    gap: 20px;
    margin-top: 20px;
    flex-wrap: wrap;
    align-items: center;
`;

export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover {
    color: #fff;
    background: #9255fd;
    span {
    color: #fff;
    }
}
    width: 100%;
    color: #9255fd;
    text-align: center;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointers")};
`;

export const WrapperSearch = styled.div`
margin-bottom: 20px;
margin-left: 500px;
margin-right:500px;
`;

export const sortContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '5px',
    margin: '20px 0',
  };