import style from './Testimonial.module.css';
import TestimonialCard from './TestimonialCard';



const Testimonial = (props)=>{
    return <section className={style.testimonials}>
        <article>
            <h2>Advanced Statistics</h2>
            <p>Track how your links are performing across the web with <br /> our advanced statistics dashboard.
            </p>
        </article>
        <div className={style.testimonial_card_container}>
            {[
                {id: 'sr445e',
                src: 'brand_img',
                title: 'Brand Recognition',
                body: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
                class: 'offset1',
            },
            {id: 'kf673e',
                src: 'records_img',
                title: 'Detailed Records',
                body: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
                class: 'offset2',
            },
            {id: 'dlpr07',
                src: 'customizable_img',
                title: 'Fully Customizable',
                body: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
                class: 'offset3',
            }].map((value)=>{
                return <TestimonialCard 
                src={value.src} 
                title={value.title} 
                body={value.body} 
                key={value.id} 
                classname={value.class} ></TestimonialCard>
            })}
        </div>
    </section>
};

export default Testimonial;