type Props = {
  text: string;
};

const SubmitFormButton = ({ text }: Props) => {
  return (
    <button
      type="submit"
      className="w-full hover:bg-black hover:text-white font-semibold uppercase px-4 py-2 border border-black rounded-md transition duration-300"
    >
      {text}
    </button>
  );
};

export default SubmitFormButton;
