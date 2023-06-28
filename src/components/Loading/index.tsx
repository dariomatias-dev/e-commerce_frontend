'use client'

import { GooSpinner } from "react-spinners-kit";

const Loading = () => {
    return (
        <div className="h-full flex justify-center my-24">
            <GooSpinner
                size={100}
                color="#e4e4e7"
            />
        </div>
    );
};

export default Loading;
