import styled from "styled-components";

export const WrapperDoctorsBoxContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
    gap : 2rem;
    padding: 1.5rem 9%;
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