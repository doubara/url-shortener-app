import List from "../ListComponent/List";
import Button from '../ButtonComponent/Button';
import logo from '../../images/logo.svg';
import style from './Nav.module.css';
import hamburger from '../../images/icon-fully-customizable.svg';
import {useState} from 'react';

const Nav = (props)=>{
    const [menuClick, setMenuClick] = useState(false);
    const showList = (event)=>{
        if(!menuClick){
            setMenuClick(true);
            return;
        }
        setMenuClick(false);
    };
    return <nav className={style.nav}>
        <div className={style.logoContainer}>
            <img src={logo} alt="shortly, the companies name"/>
        </div>
        <button onClick={showList} type='button' className={style.hamBurger}>
            <div className={style.line1}></div>
            <div className={style.line2}></div>
            <div className={style.line3}></div>
        </button>
        <div className={`${style.listContainer} ${menuClick && style.show}`}>
            <List listElements={['Features', 'Pricing', 'Resources']}></List>
            <div className={style.buttonContainer}>
                <Button classname='login-btn'>Login</Button>
                <Button classname='singup-btn'>Sign up</Button>
            </div>
        </div>
    </nav>
}

export default Nav;