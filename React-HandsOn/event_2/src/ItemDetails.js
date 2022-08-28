import './App.css';
import React from 'react';
import{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function Item() {
    
    const params = useParams();
    useEffect(()=>{
        fetchItem();
    }, []);

    const [item, setItem] = useState({});
   
    const fetchItem = async() =>{

       const fetchItem = await fetch(`https://fortnite-api.com/v1/playlists/${params.id}`);
       
       
       const item = await fetchItem.json();
       setItem(item);
       console.log(item);
    

    };
  return (
    <div >
    <h1>
        ITEM: {item.data.name}
    </h1>
    </div>
  );
}

export default Item;
