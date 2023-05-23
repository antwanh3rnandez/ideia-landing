// import logo from '../../assets/img/logo.svg';
import screen from '../../../src/assets/img/1.png';

export const Hero = ({ hero, description, action, screen, urlYoutube, logoTopBar, children }) => {
  return (
    <section className="hero bg-dark-blue">
      <header className="header default">
        <div className="left-part">
          <a href="#">
            <img src={logoTopBar} className="max-h-16" />
          </a>
        </div>
        <div className="right-part">
          <nav className="main-nav">
            <div className="toggle-mobile-but">
              <a className="mobile-but" href="">
                <div className="lines"></div>
              </a>
            </div>
            <ul>
              {children}
            </ul>
          </nav>
        </div>
      </header>
      <div className="bottom-0 left-0 absolute right-0 top-0 h-full">
        <div className="container text-white relative text-center top-1/2 transform -translate-y-1/4 mt-16 mx-auto max-w-3xl">
          <div className="text-center">
            <div className="mx-auto">
              <h1 className="text-6xl md:text-4xl lg:text-6xl text-white font-extralight">{hero}</h1>
              <p className="mx-auto max-w-md text-white text-lg md:text-ml lg:text-xl leading-relaxed mt-4 font-light">{description}</p>
              <a href="#" className="inline-block rounded-sm relative bg-dark-red-pantone text-white hover:bg-red-500 px-9 py-5 text-base mt-4">{action}</a>
            </div>
          </div>
          <div className="mt-16">
            <div className="block-media page mx-auto">
              <div className="mb-64">
                <img className='rounded-md shadow-xl shadow-gray-400' src={screen} alt="" />
              </div>
              <a href={urlYoutube} className="play-btn rounded-full" data-type="youtube"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export const Nav = ({children}) => {
  return(
    <nav className="main-nav">
      <div className='toggle-mobile-but'>
        <a className='mobile-but' href=''>
          <div className='lines'></div>
        </a>
      </div>
      <ul>
        {children}
      </ul>
    </nav>
  );
};

export const Li = ({href, title}) => {
  return(
    <li>
      <a className='scroll' href={href}>{title}</a>
    </li>
  );
};

export const LiExternal = ({href, iconClass}) => {
  return(
    <li>
      <a className="external" href={href}>
        {/* icon-resize-small-2 */}
        <i className={`${iconClass}`}></i>
      </a>
    </li>
  );
};

export const LiButton = ({href, title, iconName}) => {
  return(
    <li>
      <a className='but login scroll' href={href}>
        {title}
        <i className={`icon-${iconName}`}></i>
      </a>
    </li>
  );
};

export const HeaderTexts = ({hero, description, action, screen, urlYoutube}) => {
  return(
    <div className="bottom-0 left-0 absolute right-0 top-0 h-full">
      <div className="container text-white relative text-center top-1/2 transform -translate-y-1/4 mt-16 mx-auto max-w-3xl">
        <div className="text-center">
          <div className="mx-auto">
            <h1 className="text-6xl md:text-4xl lg:text-6xl text-white font-extralight">{hero}</h1>
            <p className="mx-auto max-w-md text-white text-lg md:text-ml lg:text-xl leading-relaxed mt-4 font-light">{description}</p>
            <a href="#" className="inline-block rounded-sm relative bg-dark-red-pantone text-white hover:bg-red-500 px-9 py-5 text-base mt-4">{action}</a>
          </div>
        </div>
        <div className="mt-16">
          <div className="block-media page mx-auto">
            <div className="mb-64">
              <img className='rounded-md shadow-xl shadow-gray-400' src={screen} alt="" />
            </div>
            <a href={urlYoutube} className="play-btn rounded-full" data-type="youtube"></a>
          </div>
        </div>
      </div>
    </div>
  );
};