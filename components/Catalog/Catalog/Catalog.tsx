import { CatalogWrapper, CatalogList, CatalogListItem } from './StyledCatalog';

interface CatalogProps {
    open: boolean;
}

export const Catalog = ({ open }: CatalogProps): JSX.Element => {
    return open ? (
        <CatalogWrapper>
            <CatalogList>
                <CatalogListItem>Молоко сыр, яйцо</CatalogListItem>
                <CatalogListItem>Хлеб</CatalogListItem>
                <CatalogListItem>Фрукты и овощи</CatalogListItem>
                <CatalogListItem>Замороженные продукты</CatalogListItem>
            </CatalogList>

            <CatalogList>
                <CatalogListItem>Напитки</CatalogListItem>
                <CatalogListItem>Кондитерские изделия</CatalogListItem>
                <CatalogListItem>Чай, кофе</CatalogListItem>
            </CatalogList>
            <CatalogList>
                <CatalogListItem>Бакалея</CatalogListItem>
                <CatalogListItem>Здоровое питание</CatalogListItem>
                <CatalogListItem>Зоотовары</CatalogListItem>
            </CatalogList>
            <CatalogList>
                <CatalogListItem>Непродовольственные товары</CatalogListItem>
                <CatalogListItem>Детское питание</CatalogListItem>
                <CatalogListItem>Мясо, птица, колбоса</CatalogListItem>
            </CatalogList>
        </CatalogWrapper>
    ) : (
        <></>
    );
};
