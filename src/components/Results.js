import React, {useEffect, useState} from "react";
import Photo from "./Photo";

const Results = ({match}) =>{
    let tag = match.params.tags;
    const [urls, setUrls] = useState([]);
 
    useEffect(
        () => {

            fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=177c93519feabcf04748161f1a6f85e5&tags=${tag}&per_page=24&format=json&nojsoncallback=1`)
            .then(res => res.json())
            .then(res => res.photos.photo.map(
               photo => ({url:`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`, 
                          id: photo.id}))
            )
            .then(res => setUrls(res))
            .catch(err => console.error('failed to fetch', err));        
        }
    , [tag]);
 
    
    return (
        <div>
            {urls.map(
                photo => <Photo url={photo.url} key={photo.id}/>   
            )}
        </div>

    );
}


export default Results;