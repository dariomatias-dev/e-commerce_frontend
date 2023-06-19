'use client'

import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Products from "@/components/Products";
import Categories from "@/components/Categories";

const Home = () => {
    return (
        <>
            <Header />
            <NavBar />
            <Products />
            <Categories />
        </>
    );
};

export default Home;
