import Link from "next/link";

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
        <div className="flex justify-center gap-1 mt-8">
            <span className="text-gray-700">{message}</span>

            <Link href={pathName} legacyBehavior>
                <div className="flex flex-col cursor-pointer group">
                    <a className="font-semibold">{linkName}</a>
                    <span
                        className={`inline-block w-0 group-hover:w-full ${
                            pathName === "/cadastro" ? "h-px" : "h-[2px]"
                        } bg-gray-700 -mt-1 transition-all duration-300`}
                    />
                </div>
            </Link>
        </div>
    );
};

export default RedirectionLoginRegistration;
