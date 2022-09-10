import styled from 'styled-components';

export const CatalogWrapper = styled.div`
    padding: 40px 116px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100%;
`;

export const CatalogList = styled.ul`
    width: 272px;
    padding: 0;
`;

export const CatalogListItem = styled.li`
    list-style: none;
    color: #414141;
    font-family: 'Arial', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 24px;
    &:nth-last-child(1) {
        margin-bottom: 0;
    }
    &:hover {
        color: #ff6633;
        cursor: pointer;
    }
`;
