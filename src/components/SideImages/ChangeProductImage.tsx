import { IconType } from 'react-icons';
import Swiper from 'swiper';

type Props = {
  swiper: Swiper | null;
  Icon: IconType;
  position: string;
};

export const ChangeProductImage = ({ swiper, Icon, position }: Props) => {
  const handleClick = () => {
    position === 'top' ? prevImage() : nextImage();
  };

  const nextImage = () => {
    swiper?.slideNext();
  };

  const prevImage = () => {
    swiper?.slidePrev();
  };

  return (
    <button type="button" onClick={handleClick} className="flex">
      <div className="inline-block rounded-full bg-white p-[6px] shadow-2xl disabled:bg-gray-200">
        <Icon className="h-4 w-4 text-gray-600" />
      </div>
    </button>
  );
};
