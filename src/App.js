import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme';
import TopHeader from './components/TopHeader/TopHeader';
import HeroImg from './components/HeroImg/HeroImg';
import Counter from './components/CounterSection/Counter';
import Searchbar from './components/Searchbar/Searchbar';
import Sliders from './components/Sliders/Sliders';
import sliderIcon from "./images/slider2.png"
import SliderHeading from './components/Sliders/SliderHeading';
import sliderImg1 from "./images/slider11.png"
import sliderImg2 from "./images/slider12.png"
import sliderImg3 from "./images/slider13.png"
import sliderImg4 from "./images/slider14.png"
import sliderImg5 from "./images/slider15.png"
import sliderImg6 from "./images/slider16.png"
import sliderImg7 from "./images/slider17.png"
import sliderImg8 from "./images/slider18.png"
import sliderImg9 from "./images/slider19.png"
import Services from './components/Services/Services';
import SermonBook from './components/SermonBook/SermonBook';
import MiddleSection from './components/middleSection/MiddleSection';
import Plans from './components/Plans/Plans';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopHeader></TopHeader>
      <HeroImg></HeroImg>
      <Counter/>
      <Searchbar/>
      <SliderHeading  sliderName="Sermon Prep" sliderIcon={sliderIcon}/>
      <Sliders sliderImg1={sliderImg1} sliderImg2={sliderImg2} sliderImg3={sliderImg3} caption1="SERMON OUTLINE" caption2="SERMON SERIES" caption3="SERMON OUTLINE"/>
      <SliderHeading  sliderName="Sermon Prep" sliderIcon={sliderIcon}/>
      <Sliders sliderImg1={sliderImg4} sliderImg2={sliderImg5} sliderImg3={sliderImg6} caption1="Background" caption2="MOTION BACKGROUND" caption3="COUNTDOWN"/>
      <SliderHeading  sliderName="Sermon Prep" sliderIcon={sliderIcon}/>
      <Sliders sliderImg1={sliderImg7} sliderImg2={sliderImg8} sliderImg3={sliderImg9} caption1="TRAINING" caption2="TRAINING" caption3="JOB DESCRIPTIONs"/>
      <About/>
      <Services/>
      <SermonBook/>
      <MiddleSection/>
      <Plans/>
      <Footer/>
      {/* <Demo/> */}
      {/* <Button variant="contained" size="large">TRY IT FREE</Button>

      <Typography variant="h1" color="secondary.light" fontFamily={typography.fontFamily.poppinsBold}>
       What are you looking for? 
      </Typography>
      <Button variant="contained" size="small" fontFamily="openSansLight">BECOME A MEMBER</Button> */}
    {/* <Demo/> */}
    </ThemeProvider>
  );
}

export default App;
