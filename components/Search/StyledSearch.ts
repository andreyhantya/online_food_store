import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

export const SearchWrapper = styled.div`
    position: relative;
    width: 375px;
    height: 40px;

    margin-left: 16px;
`;

export const StyledSearch = styled.input`
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    position: relative;
    border: 1px solid #70c05b;
    border-radius: 4px;
    padding-left: 16px;
`;

export const StyledSearchIcon = styled(SearchIcon)`
    position: absolute;
    top: 6.5px;
    right: 8.5px;
    color: #414141;
`;
