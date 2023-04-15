import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";
import { useState } from "react";

function App(){
    
    const [images, setImages] = useState([]);

    const handleSubmit = async (term) =>{
        // array of objects is 'result'
        // need to get that value into ImageList component 
        // we will combine state system and props system to do this 
        const result = await searchImages(term);
        setImages(result);

    };

    return (
      <div>
        <SearchBar onSubmit={handleSubmit} />
        <ImageList images={images} />

    
      </div>
    );
}

export default App;