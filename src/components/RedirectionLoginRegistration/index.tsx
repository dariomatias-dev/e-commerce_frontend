import Link from 'next/link';

type Props = {
  message: string;
  pathName: string;
  linkName: string;
};

const RedirectionLoginRegistration = ({
  message,
  pathName,
  linkName,
}: Props) => {
  return (
    <div className="mt-8 flex justify-center gap-1">
      <span className="text-gray-700">{message}</span>

      <Link href={pathName} legacyBehavior>
        <div className="group flex cursor-pointer flex-col">
          <a className="font-semibold">{linkName}</a>
          <span
            className={`inline-block w-0 group-hover:w-full ${
              pathName === '/cadastro' ? 'h-px' : 'h-[2px]'
            } -mt-1 bg-gray-700 transition-all duration-300`}
          />
        </div>
      </Link>
    </div>
  );
};

export default RedirectionLoginRegistration;
