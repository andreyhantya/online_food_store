import * as React from 'react';
import Menu from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import { StyledCatalogButton, StyledDrawer } from './StyledCatalogButton';

interface ICatalogButtonProps {
    openCatalog(): void;
    open: boolean;
}

export const CatalogButton = ({ openCatalog, open }: ICatalogButtonProps): JSX.Element => {
    return (
        <Stack direction="row" spacing={2}>
            <StyledCatalogButton
                onClick={openCatalog}
                variant="outlined"
                className="wqewqeewq"
                startIcon={<Menu />}>
                Каталог
            </StyledCatalogButton>
        </Stack>
    );
};
