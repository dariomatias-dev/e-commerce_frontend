import { MdKeyboardArrowDown } from "react-icons/md";

type Props = {
    title: string;
    content: string;
};

const FilterButton = ({ title, content }: Props) => {
    return (
        <div className="flex flex-col gap-1">
            <h3 className="text-gray-200 text-end text-xs text-gray">
                {title}
            </h3>
            <button
                type="button"
                className="flex justify-center items-center gap-2 bg-black hover:bg-white text-gray-100 hover:text-black text-[13px] font-bold uppercase px-6 py-1 border border-zinc-200 hover:border-zinc-100 rounded-md transition duration-300"
            >
                {content}
                <MdKeyboardArrowDown className="-mx-1 w-6 h-6" />
            </button>
        </div>
    );
};

export default FilterButton;
