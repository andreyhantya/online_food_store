import styled from 'styled-components';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';

export const StyledCatalogButton = styled(Button)`
    width: 140px;
    height: 40px;
    padding: 8px;
    border-radius: 4px;
    border: none !important;
    color: #fff;
    cursor: pointer;
    background-color: #70c05b !important;
    color: #fff !important;
    text-transform: capitalize;
`;

export const StyledDrawer = styled(Drawer)`
    top: 20px !important;
    & .MuiPaper-root {
        top: 60px;
    }
    & .MuiBackdrop-root {
        opacity: 0;
    }
`;
