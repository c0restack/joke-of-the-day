import axios from "axios";
import {useState,useEffect} from "react";

const URL = 'https://api.jokes.one/jod';


export default function App(){

  useEffect(()=> {
    axios.get(URL)
        .then((response)=>{
            const joke = response.data.contents.jokes[0].joke;
            setTitle(joke.title);
            setText(joke.text);
        }).catch(error =>{
            alert(error);
        });

}, [])

    const [title,setTitle] = useState('');
    const [text,setText] = useState('');


    return(
        <div style={{margin: 50}}>
            <h1>Joke of the day with axios</h1>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>

    );   

}
