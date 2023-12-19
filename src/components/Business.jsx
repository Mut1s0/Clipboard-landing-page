/* eslint-disable react/prop-types */
import { features } from "../constants";
import { computer } from "../images";

const FeatureCard = ({ title, content }) => (

    <div className="pt-[30px] md:pt-0 mt-[40px] md:mt-[30px] md:text-left">

        <h3 className="text-darkGrayish font-semiBold text-[20px] mb-3">{title}</h3>
        <p className="text-grayishBlue font-regular text-[15px] max-w-[330px] mx-auto md:ml-0">{content}</p>

    </div>
)

function Business() {

    return(

        <section className="text-center pt-[50px] pb-[100px] md:pb-[250px] px-[20px] lg:px-[200px]">

            <h1 className="text-darkGrayish font-semiBold text-[27px] sm:text-[35px] mb-5">Keep track of your <br className="block sm:hidden"/> snippets</h1>

            <p className="text-grayishBlue font-regular text-[13px] sm:text-[18px] mb-16 sm:max-w-[710px] sm:mx-auto">Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help organize everything.</p>

            {/* Work on The Image Position */}

            <div className="md:grid md:grid-cols-2 md:grid-flow-col md:justify-stretch md:content-center md:gap-10 md:relative">

                <div className="w-full h-[100%]">

                    <img src={computer} alt="computer" className="w-full md:w-[660px] md:h-[500px] md:absolute md:top-[-20px] md:left-[-215px]" />

                </div>

                <div className="">

                    {features.map((feature, index) => (

                        <FeatureCard key={feature.id} {...feature} index={index} />

                    ))}

                </div>

            </div>

        </section>

    )
}

export default Business;