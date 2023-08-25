import style from './FormComponent.module.css';
// import Button from '../ButtonComponent/Button';
import {useRef, useState, useEffect } from 'react';
import { Oval } from 'react-loader-spinner';


const FormComponent = (props)=>{
    const inputRef = useRef();
    const [query, setQuery] = useState(undefined);
    const [shortCode, setShortCode] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    const formSubmitted = (event)=>{
        event.preventDefault();
        // shorten()
        // console.log('form sbmitted successfully');
        setQuery(inputRef.current.value);
        // console.log(inputRef.current.value);
        setLoading(true);
    }
    useEffect(()=>{
        query && fetch(`https://api.shrtco.de/v2/shorten?url=${query}/very/long/link.html`).then(data=>{
            setLoading(false);
            return data.json();
        }).then(data=>{
            setShortCode(data.result);
            return data;
        }).then((data)=>{
            props.getShortCode(data);
        }).catch((error)=>{
            setError(error.message);
        })
        
        
      }, [query])
    return <form onSubmit={formSubmitted} className={style.form}>
            <div className={style.form_input_container}>
                <input ref={inputRef} placeholder='Shorten a link here...' className={style.form_input} />
            </div>
            <button className={`submit_button ${style.form_button}`}> {loading ? (
                <div className={style.ovalContainer}>
                    <Oval
                    height={20}
                    width={20}
                    color="#06010f"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#ffffff"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                />
                </div>
                
            ) : 'Shorten It!'}</button>
    </form>
}
export default FormComponent;