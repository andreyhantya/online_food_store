import { AppLayout } from '../components/AppLayout';
import { CardProduct } from '../components/CardProduct';
import { StyledMain } from './StyledPages/StyledMain';
import Card1 from '../public/card1.png';

const Main = (): JSX.Element => {
    const cardData = {
        discount: 50,
        discountPrice: 44.5,
        oldPrice: 50.5,
        name: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...',
        image: Card1,
        producer: null,
        rate: 2,
    };

    return (
        <AppLayout>
            <StyledMain>
                <CardProduct cardData={cardData} />
            </StyledMain>
        </AppLayout>
    );
};

export default Main;
