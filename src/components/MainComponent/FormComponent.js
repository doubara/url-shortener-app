import style from './FormComponent.module.css';
import Button from '../ButtonComponent/Button';
import {useRef, useState, useEffect } from 'react';


const FormComponent = (props)=>{
    const inputRef = useRef();
    const [query, setQuery] = useState(undefined);
    const [shortCode, setShortCode] = useState([]);
    
    const formSubmitted = (event)=>{
        event.preventDefault();
        // shorten()
        // console.log('form sbmitted successfully');
        setQuery(inputRef.current.value);
        // console.log(inputRef.current.value);
    }
    useEffect(()=>{
        query && fetch(`https://api.shrtco.de/v2/shorten?url=${query}/very/long/link.html`).then(data=>{
            console.log(query);
            return data.json();
        }).then(data=>{
            console.log(data);
            setShortCode(data.result);
            return data;
        }).then((data)=>{
            props.getShortCode(data);
        })
        
        
      }, [query])
    return <form onSubmit={formSubmitted} className={style.form}>
            <div className={style.form_input_container}>
                <input ref={inputRef} placeholder='Shorten a link here...' className={style.form_input} />
            </div>
            <Button classname={`submit_button ${style.form_button}`}>Shorten It!</Button>
    </form>
}
export default FormComponent;