import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
SwiperCore.use([Autoplay, Navigation, Pagination]);

import logo from './assets/img/logo.svg';
import screen from './assets/img/1.png';
import screen2 from './assets/img/4.png';
import testi from './assets/img/testimonials/1.png';
import testi2 from './assets/img/testimonials/2.png';
import testi3 from './assets/img/testimonials/3.png';
import testi4 from './assets/img/testimonials/4.png';
import slider from './assets/img/5.png';
import slider2 from './assets/img/3.png';
import {
  Hero,
  Nav,
  Li,
  LiExternal,
  LiButton,
  About,
  AboutItems,
  AboutItem,
  Trial,
  Features,
  FeaturesList,
  Testimonials,
  TestimonialItem,
  Gallery,
  Slider,
  SliderItem,
  Pricing,
  PricingItem,
  PricingList
} from './components';
import './App.css';
import './fonts.css';
// import './base.css';

function App() {
  return (
    <div className="App">
      <Hero 
        hero={`Simple modern easy to use`}
        description={`Beautiful simple and modern responsive landing page to generate revenues for your business.`}
        action={`Purchase now`}
        screen={screen}
        urlYoutube={`https://youtu.be/Mk6aW39bMtg`}
        logoTopBar={logo}>
          <Nav>
            <LiExternal 
              href="#" 
              iconClass={"icon-resize-full-3"}
            />
            <Li 
              href={`#`} 
              title={`About`}
            />
            <Li 
              href={`#`} 
              title={`Features`}
            />
            <Li 
              href={`#`} 
              title={`Gallery`}
            />
            <Li 
              href={`#`} 
              title={`Pricing`}
            />
            <Li 
              href={`#`} 
              title={`Faq`}
            />
            <LiButton 
              href={`#`} 
              title={`Login`} 
              iconName={`lock`}
            />
            <Li 
              href={`#`} 
              title={`Contact Us`}
            />
          </Nav>
      </Hero>
      <About 
        header={`Beautiful & simple easy to use<br />landing page`} 
        description={`At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occae.`}>
        <AboutItems>{/*Maximo 3 items x row*/}
          <AboutItem 
            iconClass={`mobile-6`} 
            header={`Great For Mobile`} 
            description={`A mobile browser is a web browser designed for use on a mobile device such as a mobile phone or PDA.`} />
          <AboutItem 
            iconClass={`clock-7`} 
            header={`Easy To Setup`} 
            description={`A mobile browser is a web browser designed for use on a mobile device such as a mobile phone or PDA.`} />
          <AboutItem 
            iconClass={`lightbulb-3`} 
            header={`For Marketing`} 
            description={`A mobile browser is a web browser designed for use on a mobile device such as a mobile phone or PDA.`} />
        </AboutItems>
        <AboutItems>{/*Maximo 3 items x row*/}
          <AboutItem 
            iconClass={`cloud-7`} 
            header={`Light Design`} 
            description={`A mobile browser is a web browser designed for use on a mobile device such as a mobile phone or PDA.`} />
          <AboutItem 
            iconClass={`beaker-1`} 
            header={`Multipurpose`} 
            description={`A mobile browser is a web browser designed for use on a mobile device such as a mobile phone or PDA.`} />
          <AboutItem 
            iconClass={`paper-plane-3`} 
            header={`Great Support`} 
            description={`A mobile browser is a web browser designed for use on a mobile device such as a mobile phone or PDA.`} />
        </AboutItems>
      </About>
      <Trial 
        header={`Start your 30 day free trial`} 
        buttonText={`Sign up now`}
        notice={`We don’t share your information with anyone`}
        href={`#`}
        hrefTitle={`Privacy policy`}>
      </Trial>
      <Features 
        img={screen2}
        header={`Take a quick look at some<br>great features !`}
        href={`#`}
        hrefTitle={`Pricing info`}>
          <FeaturesList 
            iconColor={`text-green-500`}
            iconClass={`check-1`} 
            description={`Sed ut perspiciatis unde omnis.`}  
          />
          <FeaturesList 
            iconColor={`text-green-500`}
            iconClass={`check-1`} 
            description={`Ut enim ad minima veniam, quis nostrum exercitationem.`}  
          />
          <FeaturesList 
            iconColor={`text-green-500`}
            iconClass={`check-1`} 
            description={`Esse quam nihil molestiae consequatur`}  
          />
          <FeaturesList 
            iconColor={`text-green-500`}
            iconClass={`check-1`} 
            description={`Accusantium doloremque laudantium, totam rem aperiam.`}  
          />
          <FeaturesList 
            iconColor={`text-green-500`}
            iconClass={`check-1`} 
            description={`Neque porro quisquam est, qui dolorem ipsum quia.`}  
          />
          <FeaturesList 
            iconColor={`text-green-500`}
            iconClass={`check-1`} 
            description={`Excepteur sint occaecat cupidatat non proiden.`}  
          />
          <FeaturesList 
            iconColor={`text-green-500`}
            iconClass={`check-1`} 
            description={`Sed ut perspiciatis unde omnis`}  
          />
      </Features>
      <Testimonials 
        header={`Why customers love <br>our great product`}
        description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.`}
        href={`#`}
        hrefTitle={`Pricing info`}>
          <TestimonialItem
            side={`right`} //only right or left
            image={testi}
            name={`Hana Doe`}
            position={`Mutation Media`}
            testimonial={`Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.`}
          />
          <TestimonialItem
            side={`left`}
            image={testi2}
            name={`Jenna Doe`}
            position={`Mutation Media`}
            testimonial={`Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.`}
          />
          <TestimonialItem
            side={`right`}
            image={testi3}
            name={`Cari Doe`}
            position={`Mutation Media`}
            testimonial={`Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.`}
          />
          <TestimonialItem
            side={`left`}
            image={testi4}
            name={`Adam Doe`}
            position={`Mutation Media`}
            testimonial={`Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.`}
          />
      </Testimonials>
      <Gallery
        header={`We are excited about our new product<br />Here's a sneak peek`}
      >
        <Swiper
            spaceBetween={5}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }} // Configuración del autoplay
        >
            <SwiperSlide>
            <img src={slider} alt={`alt`} />
            </SwiperSlide>
            <SwiperSlide>
            <img src={slider2} alt={`alt`} />
            </SwiperSlide>
        </Swiper>
      </Gallery>
      <Pricing
        header={`Quick look at our scalable plans & pricing`}
        description={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.`}
        note={`Not sure which plan is right for you? Feel free to <a className="text-dark-red-pantone" href="#contact">contact us</a> for more info and details.`}
      >
        <PricingItem
          title={`Standard`}
          price={`10`}
          time={`mo`}
          href={`#`}
          hrefTitle={`Sign up now`}
        >
          <PricingList text={`250 templates`} />
          <PricingList text={`Web event tracking`} />
          <PricingList text={`Campaign consulting`} />
          <PricingList text={`250 templates`} />
        </PricingItem>
        <PricingItem
          title={`Professional`}
          price={`30`}
          time={`mo`}
          href={`#`}
          hrefTitle={`Sign up now`}
        >
          <PricingList text={`250 templates`} />
          <PricingList text={`Web event tracking`} />
          <PricingList text={`Campaign consulting`} />
          <PricingList text={`250 templates`} />
        </PricingItem>
        <PricingItem
          title={`Entreprise`}
          price={`40`}
          time={`mo`}
          href={`#`}
          hrefTitle={`Sign up now`}
        >
          <PricingList text={`250 templates`} />
          <PricingList text={`Web event tracking`} />
          <PricingList text={`Campaign consulting`} />
          <PricingList text={`250 templates`} />
        </PricingItem>
      </Pricing>
    </div>
  );
}

export default App;
