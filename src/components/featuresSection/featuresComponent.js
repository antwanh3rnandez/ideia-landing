import { Children } from 'react';
import screen2 from '../../../src/assets/img/4.png';

export const Features = ({img, header, href, hrefTitle, children}) => {
    return(
        <section id="features" className="bg-gray-200 pt-120 pb-120">
            {/* Container */}
            <div className="container mx-auto justify-center">
                {/* Row */}
                <div className="flex items-center">
                    <div className="w-1/2 md:w-1/2 py-24">
                        <div className="block-shot">
                            <img className='w-96 mx-auto' src={img} alt="" />
                        </div>
                    </div>
                    <div className="w-1/2 md:w-1/2 md:ml-8">
                        <h3 className="text-3xl font-light" dangerouslySetInnerHTML={{ __html: header }}>
                        </h3>
                        <ul className="mt-6 mb-8">
                            {children}
                        </ul>
                        <a href={href} className="px-6 py-3 text-white bg-dark-red-pantone hover:bg-red-500 rounded">
                        {hrefTitle}
                        </a>
                    </div>
                </div>
                {/* End Row */}
            </div>
            {/* End Container */}
        </section>
            );
};

export const FeaturesList = ({iconColor, iconClass, description}) => {
    return (
        <li className='font-light mb-2 text-sm'><i className={`${iconColor} icon-${iconClass}`}></i>{description}</li>
    );
};