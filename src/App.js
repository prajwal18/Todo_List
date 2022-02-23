import React from "react";
import { DataProvider } from "./context/DataContext";
import Header from "./components/HeaderFooter/Header";
import Footer from "./components/HeaderFooter/Footer";
import Search from "./components/Search/Search";
import DisplayBox from "./components/Display/DisplayBox";



function App() {
    return(
        <>
            <Header />
            <DataProvider>
                <Search />
                <DisplayBox />
                <Footer />
            </DataProvider>
        </>
    );
}

export default App;