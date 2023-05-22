export const Trial = ({header, buttonText, notice, href, hrefTitle}) => {
    return(
        <section className="trial bg-dark-blue items-center py-14">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-white text-4xl font-light text-start ml-36">{header}</h1>
                    </div>
                    <div className="w-full md:w-1/2 mr-24">
                        <div className="form">
                            <form method="post" className="trial-form" action="#">
                                <input placeholder="Your name" value="" id="name" name="name" type="text" className="input" />
                                <input placeholder="Your email" value="" id="email" name="email" type="text" className="input" />
                                <input value={buttonText} className="bg-white border-none text-darkbg-dark-blue hover:bg-red-500 hover:text-white" type="submit" />
                            </form>
                            <p className="text-start mt-4">
                                * {notice} - <a href={href}>{hrefTitle}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    );
};