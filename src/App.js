import React, {Fragment, useState} from 'react';
import Nav from './components/NavComponent/Nav';
import MainComponent from './components/MainComponent/MainComponent';
import HeroComponent from './components/MainComponent/HeroComponent';
import FormComponent from './components/MainComponent/FormComponent';
import Testimonial from './components/MainComponent/Testimonial';
import ActionArticle from './components/MainComponent/ActionArticle';
import Wrapper from './components/MainComponent/Wrapper';
import Footer from './components/MainComponent/Footer';
import ShortCode from './components/MainComponent/ShortCode';

const App = (props)=>{
  const [codes, setCodes] = useState([]);
  const [reveal, setReveal] = useState(false);

  const shortCodes = (code)=>{
    const dataObj = {'original_link': code.result.original_link.replace('/very/long/link.html', ''), 'short_link': code.result.full_short_link}
    setReveal(true);
    setCodes(previous=>[...previous, dataObj]);
    console.log(codes);
  }
  console.log(codes);

  return <Fragment>
    <Wrapper>
      <Nav></Nav>
    </Wrapper>
    <HeroComponent></HeroComponent> 
    <MainComponent>
      <FormComponent getShortCode={shortCodes} ></FormComponent>
      {reveal && <ShortCode codes={codes}  ></ShortCode>}
      <Testimonial></Testimonial>
    </MainComponent>
    <ActionArticle></ActionArticle>
    <Footer></Footer>
  </Fragment>
};
export default App;