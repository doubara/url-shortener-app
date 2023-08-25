import style from './TestimonialCard.module.css';

// images imports
import brand_img from '../../images/brand_img.svg';
import records_img from '../../images/icon-detailed-records.svg';
import customizable_img from '../../images/icon-fully-customizable.svg'

const TestimonialCard = (props)=>{
    const imgObject = {brand_img, records_img, customizable_img}
    const classname = props.classname
return <div className={`${style.testimonial_card}`}>
        <div className={style.card_img_container}>
            {/* <img src={props.value.img} alt=""/> */}
        <img src={imgObject[props.src]}/>
        </div>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
    </div>
};

export default TestimonialCard;