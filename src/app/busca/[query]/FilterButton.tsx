import { useState, Dispatch, SetStateAction } from "react";
import * as Popover from '@radix-ui/react-popover';
import { MdKeyboardArrowDown } from "react-icons/md";

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
            )
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
            )
        }
    };

    return (
        <div className="flex flex-col gap-1">
            <h3 className="text-gray-200 text-end text-xs text-gray">
                {title}
            </h3>

            <Popover.Root
                open={popupOpen}
                onOpenChange={() => setPopupOpen(!popupOpen)}
            >
                <Popover.Trigger
                    className="flex justify-center items-center gap-2 bg-black hover:bg-white text-gray-100 hover:text-black text-[13px] font-bold uppercase px-6 py-1 border border-zinc-200 hover:border-zinc-100 rounded-md transition duration-300"
                >
                    {filter}
                    <MdKeyboardArrowDown
                        style={{ transform: `rotate(${popupOpen ? 180 : 0}deg)` }}
                        className="-mx-1 w-6 h-6 duration-500"
                    />
                </Popover.Trigger>

                <Popover.Content
                    align="start"
                    style={{ opacity: popupOpen ? 1 : 0 }}
                    className="flex gap-4 bg-black border border-gray-800 mt-2 rounded-md overflow-hidden transition-opacity duration-300"
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
    setFilter: Dispatch<SetStateAction<string>>
}

const PopupLi = ({ filters, setPopupOpen, setFilter }: PopupLiProps) => {
    const handleClick = (filter: string) => {
        setPopupOpen(false);
        setFilter(filter);
    };

    return (
        filters.map((filter, index) => {
            return (
                <li key={index}>
                    <button
                        type="button"
                        onClick={() => handleClick(filter)}
                        className={`w-full min-w-[80px] hover:bg-green-600 text-start text-xs whitespace-nowrap p-2 ${index !== filters.length - 1 ? "border-b border-gray-500" : ""} transition duration-300`}
                    >
                        {filter}
                    </button>
                </li>
            )
        })
    );
};

export default FilterButton;
