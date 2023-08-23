import { IconType } from 'react-icons';
import Swiper from 'swiper';

type Props = {
  swiper: Swiper | null;
  Icon: IconType;
  position: string;
};

export const ChangeProductImage = ({ swiper, Icon, position }: Props) => {
  const nextImage = () => {
    swiper?.slideNext();
  };

  const prevImage = () => {
    swiper?.slidePrev();
  };

  return (
    <button
      type="button"
      onClick={position === 'top' ? prevImage : nextImage}
      className="flex"
    >
      <div className="inline-block rounded-full bg-white p-[6px] shadow-2xl">
        <Icon className="h-4 w-4 text-gray-600" />
      </div>
    </button>
  );
};
