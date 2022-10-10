import React, {useEffect, useState} from "react";
import Photo from "./Photo";
import SearchForm from "./SearchForm";
import Nav from "./Nav";
import NotFound from "./NotFound";
import loadingGIF from "../loading.gif";

const Results = ({match}) =>{
    let tag = match.params.tags;
    const [urls, setUrls] = useState([]);
    const [isFound, setIsFound] = useState(true);
    {/* Initial loading state */}
    const [loading, setLoading] = useState(false);
 
    useEffect(
        () => {
            setLoading(true);

            fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=177c93519feabcf04748161f1a6f85e5&tags=${tag}&per_page=24&format=json&nojsoncallback=1`)
            .then(res => res.json())
            .then(res => res.photos.photo.map(
                   photo => ({url:`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`, 
                          id: photo.id}))
            )
            .then(
                res => {
                  setLoading(false);
                  if(res.length === 0){
                     setIsFound(false);                  
                  }else{
                     setIsFound(true);
                     setUrls(res);
                  }
                }
            )  
            .catch(err => console.error('failed to fetch', err));        
        }
    , [tag]);
    
    return (
        <div>
            <SearchForm />
            <Nav />

            {/* show loading gif */}
            {
                loading ? <img src={loadingGIF} alt="loading"/> : null
            }

            {/* hide loading gif when data is founded */}
            {
                isFound && !loading ? 
                <div className="photo-container">       
                    <ul>
                        {urls.map(
                            photo => <Photo url={photo.url} key={photo.id}/>   
                        )}
                    </ul>
                </div> : null
            }

            {/* render NotFound page */}    
            {
                !isFound && !loading ? <NotFound /> : null
            }
        </div>

    );
}


export default Results;