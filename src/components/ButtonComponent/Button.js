const Button = (props)=>{
    return <button type='button' className={`button ${props.classname}`}>{props.children}</button>
};

export default Button;