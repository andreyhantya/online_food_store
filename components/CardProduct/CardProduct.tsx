import Image from 'next/image';
import {
    CardImageWrapper,
    CardDiscount,
    CardButton,
    CardWrapper,
    CardInfo,
} from './StyledCardProduct';

interface ICardData {
    discount: number | null;
    discountPrice: number | null;
    oldPrice: number;
    name: string;
    producer: string | null;
    rate: number;
}

interface ICardDataProps {
    cardData: ICardData;
}

export const CardProduct = ({ cardData }: ICardDataProps): JSX.Element => {
    const { discount, discountPrice, oldPrice, name, producer, rate, image } = cardData;
    return (
        <CardWrapper>
            <CardImageWrapper>
                <Image src={image} width="272" height={160} alt="cardImage" />
                <CardDiscount>-{discount}%</CardDiscount>
            </CardImageWrapper>
            <CardInfo>
                <div>
                    <div>
                        <b>{discountPrice}</b>
                        <span>Скартой</span>
                    </div>
                    <div>
                        <span>{oldPrice}</span>
                        <span>Обычная</span>
                    </div>
                </div>
                <div>{name}</div>
                <div>{producer}</div>
                <CardButton>В корзину</CardButton>
            </CardInfo>
        </CardWrapper>
    );
};
