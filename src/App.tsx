import React from "react";
import ImageModal from "./components/ImageDialog";
import ImageGallery from "./components/ImageGallery";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { ImagesProvider } from "./contexts/ImagesContext";

function App() {
    return (
        <div className="App">
            <Navbar />
            <ImagesProvider>
                <Search />
                <ImageGallery />
            </ImagesProvider>
        </div>
    );
}

export default App;
