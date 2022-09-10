import Link from 'next/link';
import Image from 'next/image';
import { StyledHeader, LogoWrapper } from './StyledHeader';
import logo from '../../public/logo.png';
import { CatalogButton } from '../Catalog/CatalogButton';
import { Catalog } from '../Catalog/Catalog';
import { useState } from 'react';
import { Search } from '../Search';

export const Header = () => {
    const [open, setOpen] = useState(false);

    const openCatalog = () => {
        setOpen(!open);
    };

    return (
        <>
            <StyledHeader>
                <LogoWrapper>
                    <Link href="/Dashboard">
                        <Image src={logo} alt="logo" />
                    </Link>
                </LogoWrapper>

                <CatalogButton openCatalog={openCatalog} open={open} />
                <Search />
            </StyledHeader>
            <Catalog open={open} />
        </>
    );
};
