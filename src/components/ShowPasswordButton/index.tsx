import { Dispatch, SetStateAction } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

type Props = {
    showPassword: boolean;
    setShowPassword: Dispatch<SetStateAction<boolean>>;
};

const ShowPasswordButton = ({ showPassword, setShowPassword }: Props) => {
    return (
        <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/4 right-2 mt-[2px]"
        >
            {showPassword ?
                <BsEyeFill className="w-5 h-5" />
                :
                <BsEyeSlashFill className="w-5 h-5" />
            }
        </button>
    );
};

export default ShowPasswordButton;
