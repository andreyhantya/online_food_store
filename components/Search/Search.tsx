import { StyledSearch, StyledSearchIcon, SearchWrapper } from './StyledSearch';

export const Search = (): JSX.Element => {
    return (
        <SearchWrapper>
            <StyledSearch type="text" placeholder="Найти товар" />
            <StyledSearchIcon />
        </SearchWrapper>
    );
};
