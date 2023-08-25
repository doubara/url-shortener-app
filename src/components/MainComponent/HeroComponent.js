import img from '../../images/illustration-working.svg';
import Button from '../ButtonComponent/Button';
import style from './HeroComponent.module.css';

const HeroComponent = (props)=>{

    return <section className={style.hero}>
        <div className={style.heroImageContainer}>
            <img src={img} alt='illustration working'/>
        </div>
        <article className={style.hero_article}>
            <h1>More than just <br />shorter links</h1>
            <p>Build your brand’s recognition and get detailed insights on how your links are performing.
            </p>
            <button>Get Started</button>
        </article>
    </section>
}
export default HeroComponent;