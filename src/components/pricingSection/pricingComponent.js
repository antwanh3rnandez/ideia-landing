export const Pricing = ({header, description, note, children}) => {
    return (
      <section id="pricing" className="pricing text-center my-24">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-extralight mb-6">{header}</h1>
            <p className="lead">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap justify-center mt-16 mb-8">
            {children}
          </div>
          <div className="flex justify-center">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-2/3 xl:w-2/3">
              <p className="text-sm" dangerouslySetInnerHTML={{ __html: note }}>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };

export const PricingItem = ({title, price, time, href, hrefTitle, children}) => {
    return(
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mr-10">
            <div className="bg-white border-4 border-dark-blue rounded-md relative w-full max-w-full table mx-auto pb-8">
                <h6 className="bg-dark-blue text-white text-2xl py-5 font-extralight">{title}</h6>
                <div className="text-dark-blue mt-8 mb-5">
                    <span className="text-md left-0 relative top-[-50px]">$</span>
                    <span className="font-extralight text-8xl">{price}<span className="text-3xl">/{time}</span ></span>
                </div>
                <ul className="mb-8">
                    {children}
                </ul>
                <a className="px-6 py-2 text-white bg-dark-red-pantone hover:bg-red-500 rounded" href={href}>{hrefTitle}</a>
            </div>
        </div>
    );
};

export const PricingList = ({text}) => {
    return(
        <li>{text}</li>
    );
};
  