type Props = {
  text: string;
};

const SubmitFormButton = ({ text }: Props) => {
  return (
    <button
      type="submit"
      className="w-full rounded-md border border-black px-4 py-2 font-semibold uppercase transition duration-300 hover:bg-black hover:text-white"
    >
      {text}
    </button>
  );
};

export default SubmitFormButton;
