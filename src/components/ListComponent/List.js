import style from '../NavComponent/Nav.module.css';

const List = (props)=>{

    return (
        <ul className={style.list}>
            {
            props.listElements.map(
                (elements, id)=>{
                return <li key={id+(Math.random()*100)}>{elements}</li>
            })
            }
        </ul>
    )
};

export default List;