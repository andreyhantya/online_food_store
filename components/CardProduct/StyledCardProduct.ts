import styled from 'styled-components';

export const CardWrapper = styled.div`
    width: 272px;
    background-color: #fff;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
`;

export const CardInfo = styled.div`
    padding: 8px;
`;

export const CardImageWrapper = styled.div`
    position: relative;
`;

export const CardDiscount = styled.span`
    background-color: #ff6633;
    padding: 4px 8px;
    border-radius: 4px;
    color: #fff;
    font-weight: 400;
    font-size: 16px;
    font-family: 'arial', sans-serif;
    position: absolute;
    bottom: 10px;
    left: 10px;
`;

export const CardDiscountPrice = styled.div`
    width: 272px;
`;

export const CardTitle = styled.div`
    width: 272px;
`;

export const CardButton = styled.button`
    width: 100%;
    height: 40px;
    color: #70c05b;
    background-color: #fff;
    border: 1px solid #70c05b;
    border-radius: 4px;
    font-family: 'Arial', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        background: #ff6633;
        color: #fff;
        border: none;
    }
`;
