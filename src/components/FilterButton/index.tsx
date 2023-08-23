import * as Popover from '@radix-ui/react-popover';
import { Dispatch, SetStateAction, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

type Props = {
  title: string;
  standardFilter: string;
  filters: string[];
};

const FilterButton = ({ title, standardFilter, filters }: Props) => {
  const [filter, setFilter] = useState(standardFilter);
  const [popupOpen, setPopupOpen] = useState(false);

  const renderPopupContent = () => {
    if (filters.length < 6) {
      return (
        <ul>
          <PopupLi
            filters={filters}
            setPopupOpen={setPopupOpen}
            setFilter={setFilter}
          />
        </ul>
      );
    } else {
      const halfOfTheArray = Math.ceil(filters.length / 2);

      return (
        <>
          <ul>
            <PopupLi
              filters={filters.slice(0, halfOfTheArray)}
              setPopupOpen={setPopupOpen}
              setFilter={setFilter}
            />
          </ul>
          <ul>
            <PopupLi
              filters={filters.slice(halfOfTheArray)}
              setPopupOpen={setPopupOpen}
              setFilter={setFilter}
            />
          </ul>
        </>
      );
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-gray text-end text-xs text-gray-200">{title}</h3>

      <Popover.Root
        open={popupOpen}
        onOpenChange={() => setPopupOpen(!popupOpen)}
      >
        <Popover.Trigger className="flex items-center justify-center gap-2 rounded-md border border-zinc-200 bg-black px-6 py-1 text-[13px] font-bold uppercase text-gray-100 transition duration-300 hover:border-zinc-100 hover:bg-white hover:text-black">
          {filter}
          <MdKeyboardArrowDown
            style={{
              transform: `rotate(${popupOpen ? 180 : 0}deg)`,
            }}
            className="-mx-1 h-6 w-6 duration-500"
          />
        </Popover.Trigger>

        <Popover.Content
          align="start"
          style={{ opacity: popupOpen ? 1 : 0 }}
          className="mt-2 flex gap-4 overflow-hidden rounded-md border border-gray-800 bg-black transition-opacity duration-300"
        >
          {renderPopupContent()}
        </Popover.Content>
      </Popover.Root>
    </div>
  );
};

type PopupLiProps = {
  filters: string[];
  setPopupOpen: Dispatch<SetStateAction<boolean>>;
  setFilter: Dispatch<SetStateAction<string>>;
};

const PopupLi = ({ filters, setPopupOpen, setFilter }: PopupLiProps) => {
  const handleClick = (filter: string) => {
    setPopupOpen(false);
    setFilter(filter);
  };

  return filters.map((filter, index) => {
    return (
      <li key={index}>
        <button
          type="button"
          onClick={() => handleClick(filter)}
          className={`w-full min-w-[80px] whitespace-nowrap p-2 text-start text-xs hover:bg-green-600 ${
            index !== filters.length - 1 ? 'border-b border-gray-500' : ''
          } transition duration-300`}
        >
          {filter}
        </button>
      </li>
    );
  });
};

export default FilterButton;
