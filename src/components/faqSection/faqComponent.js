export const Faq = ({header, header2, note2, href, hrefTitle, children}) => {
    return (
      <section id="faq" className="bg-gray-100 flex items-center">
        <div className="container mx-auto my-24 max-w-6xl">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-extralight mb-4">{header}</h1>
          </div>
          <div className="flex flex-wrap mt-16 mb-6">
            {children}
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-center text-3xl font-extralight mb-4">{header2}</h1>
            <p className="text-center text-sm font-normal">
                {note2}
            </p>
            <a className="mt-12 px-8 py-4 text-white bg-dark-red-pantone hover:bg-red-500 rounded" href={href}>
                {hrefTitle}
            </a>
          </div>
        </div>
      </section>
    );
};

export const FaqItem = ({title, description}) => {
    return(
        <div className="mb-12">
            <h1 className="text-start text-xl font-semibold mb-4">{title}</h1>
            <p className="text-start text-sm font-normal justify-start">
            {description}
            </p>
        </div>
    );
};


