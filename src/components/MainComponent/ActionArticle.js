import Button from "../ButtonComponent/Button"
import style from '../MainComponent/ActionArticle.module.css';

const ActionArticle = (props)=>{
    return <section className={style.action_article}>
        <h3>Boost your links today</h3>
        <Button>Get Started</Button>
    </section>
}

export default ActionArticle;