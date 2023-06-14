'use client'

import { useEffect, useState } from "react";
import Image from 'next/image';

const Home = () => {
    const [products, setProducts] = useState<ProductProps[]>([]);

    const fetchData = async () => {
        const response = await fetch("http://localhost:3333/products");
        const data = await response.json();
        setProducts(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (!products.length) return <></>;

    return (
        <div className="grid grid-cols-3">
            {
                products[2].imageUrlIds.map(id => {
                    return (
                        <div className="border boder-black p-8">
                            <Image
                                src={`https://live.staticflickr.com/65535/${id}.jpg`}
                                width={500}
                                height={500}
                                priority={true}
                                style={{ width: '100%', maxWidth: "20rem", height: 'auto', objectFit: "contain" }}
                                alt=""
                            />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Home;
