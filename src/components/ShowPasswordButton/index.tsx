import { Dispatch, SetStateAction } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

type Props = {
  showPassword: boolean;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
};

const ShowPasswordButton = ({ showPassword, setShowPassword }: Props) => {
  return (
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-2 top-1/4 mt-[2px]"
    >
      {showPassword ? (
        <BsEyeFill className="h-5 w-5" />
      ) : (
        <BsEyeSlashFill className="h-5 w-5" />
      )}
    </button>
  );
};

export default ShowPasswordButton;
