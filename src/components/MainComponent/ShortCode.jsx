import style from './short_code.module.css';
// import ClipboardJS from 'clipboard';


const ShortCode = ({codes}) =>{
    // const clipboard = new ClipboardJS('#copy');
    // clipboard.on('success', (e)=>{
    //     alert(e.text);
    // })
    console.log(codes);
    return <div className={style.short_code_container}>
        {codes.map(code=>{
            return <div className={style.short_code}>
                <p className={style.original_link}>{code.original_link}</p>
                <p className={style.short_link}>{code.short_link}</p>
                <button id="copy" className={style.copy_link} >Short it!</button>
            </div>
        })}
        
    </div>
}

export default ShortCode;