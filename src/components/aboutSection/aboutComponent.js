export const About = ({header, description, children}) => {
    return (
        <section id="about" className="pt-120 pb-120 mb-32">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <div className="w-full md:w-8/12 sm:w-10/12">
                        <div className="text-center">
                            <h1 className="text-3xl md:text-2xl lg:text-4xl font-extralight mb-6 mt-48" dangerouslySetInnerHTML={{ __html: header }}></h1>
                            <p className="mx-auto md:w-8/12 sm:w-10/12 text-sm md:text-md lg:text-lg leading-relaxed mb-16 font-light">{description}</p>
                        </div>
                    </div>
                </div>
            {children}
            </div>
        </section>
    );
};

export const AboutItems = ({children}) => {
    return (
        <div className="flex flex-wrap justify-center">
            {children}
        </div>
    );
};

export const AboutItem = ({iconClass, header, description}) => {
    return (
        <div className="max-w-sm md:w-4/12 sm:w-1/2 m-4">
            <div className="feature">
                <div className="ico"><i className={`icon-${iconClass}`}></i></div>
                <div className="desc">
                    <h4 className="text-lg font-bold">{header}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};