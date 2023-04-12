import axios from "axios";

const searchImages = async (term) => {

    const response = await axios.get('https://api.unsplash.com/search/photos', 
    {
        headers: {
            Authorization: 'Client-ID Du4WDxcV7I-MTofWeC-k3PrgLwYJYfayyMRKiYbF4qQ'
        },
        params: {
            query: term
        }
    });
    
    return response.data.results;
};

export default searchImages;