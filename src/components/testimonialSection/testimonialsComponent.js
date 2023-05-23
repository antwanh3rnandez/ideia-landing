export const Testimonials = ({header, description, href, hrefTitle, children}) => {
    return(
        <section className="justify-center mt-32 mb-24">
            <div className="container mx-auto">
               <div className="flex flex-row items-center px-40">
                  <div className="w-1/3 mr-24">
                     <h3 className="text-3xl font-extralight mb-4" dangerouslySetInnerHTML={{ __html: header }}>
                     </h3>
                     <p className='font-extralight mb-6'>{description}</p>
                     <a className="but scroll px-6 py-2 text-white bg-dark-red-pantone hover:bg-red-500 rounded" href={href}>{hrefTitle}</a>
                  </div>
                  <div className="w-2/3">
                     <div className="block-content testi">
                        {children}
                     </div>
                  </div>
               </div>
            </div>
         </section>
    );
};

export const TestimonialItem = ({side, image, name, position, testimonial}) => {
    return (
        <div className="block-testi mb-8">
            <div className={`testi-img ${(side == 'right' ? 'left' : 'right')} rounded-full`}>
                <img src={image} alt=""/>
            </div>
            <div className={`testi-details ${side}`}>
                <h5>{name} - {position}</h5>
                <blockquote className='font-extralight'>“{testimonial}“</blockquote>
            </div>
        </div>
    );
};