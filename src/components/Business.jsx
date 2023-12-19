/* eslint-disable react/prop-types */
import { features } from "../constants";
import { computer } from "../images";

const FeatureCard = ({ title, content }) => (

    <div className="pt-[30px] mt-[40px] md:text-left">

        <h3 className="text-darkGrayish font-semiBold text-[20px] mb-3">{title}</h3>
        <p className="text-grayishBlue font-regular text-[15px] max-w-[300px] mx-auto md:ml-0">{content}</p>

    </div>
)

function Business() {

    return(

        <section className="text-center pt-[50px] pb-[100px]">

            <h1 className="text-darkGrayish font-semiBold text-[27px] mb-5">Keep track of your snippets</h1>

            <p className="text-grayishBlue font-regular text-[15px] mb-16">Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help organize everything.</p>

            {/* Work on The Image Position */}

            <div className="md:flex md:justify-center md:items-center md:gap-5">

                <div className="">

                    <img src={computer} alt="computer" className="w-full" />

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