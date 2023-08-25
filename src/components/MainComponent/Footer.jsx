import style from './footer.module.css';
import logo from '../../images/logo.svg';
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";

const Footer = (props)=>{
    return <footer className={style.footer}>
        <div className={style.logoContainer}>
            <img src={logo} alt="" />
        </div>
        <div>
            <h3>Features</h3>
            <ul className={style.footer_list}>
                <li>Url Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
            </ul>
        </div>
        <div>
            <h3>Resources</h3>
            <ul className={style.footer_list}>
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
            </ul>
        </div>
        <div>
            <h3>Company</h3>
            <ul className={style.footer_list}>
                <li>About</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>
        </div>
        <ul className={style.social_icons}>
            <li>
                <img src={facebook} alt="" />
            </li>
            <li>
                <img src={twitter} alt="" />
            </li>
            <li>
                <img src={pinterest} alt="" />
            </li>
            <li>
                <img src={instagram} alt="" />
            </li>
        </ul>
    </footer>
}

export default Footer;