import style from './MainComponent.module.css';

const MainComponent = (props)=>{

    return <main className={style.main}>{props.children}</main>
};

export default MainComponent;