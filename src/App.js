import logo from './assets/img/logo.svg';
import screen from './assets/img/1.png';
import screen2 from './assets/img/4.png';
import {
  Hero,
  Nav,
  Li,
  LiExternal,
  LiButton,
  HeaderTexts,
  About,
  AboutItems,
  AboutItem,
  Trial,
  Testimonial,
  Features,
  FeaturesList
} from './components';
import './App.css';
import './fonts.css';
// import './base.css';

function App() {
  return (
    <div className="App">
      <Hero logo={logo}>
        <Nav>
          <LiExternal href="#" iconClass={"icon-resize-full-3"}></LiExternal>
          <Li href={`#`} title={`About`}></Li>
          <Li href={`#`} title={`Features`}></Li>
          <Li href={`#`} title={`Gallery`}></Li>
          <Li href={`#`} title={`Pricing`}></Li>
          <Li href={`#`} title={`Faq`}></Li>
          <LiButton href={`#`} title={`Login`} iconName={`lock`} ></LiButton>
          <Li href={`#`} title={`Contact Us`}></Li>
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

    </div>
  );
}

export default App;
