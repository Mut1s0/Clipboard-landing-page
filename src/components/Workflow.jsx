/* eslint-disable react/prop-types */

import { stats } from "../constants";

const StatsCard = ({ icon, title, text }) => (

    <div className="w-[350px] h-[250px]">

        <img src={icon} alt="icon" className="w-[60px] h-[50%] object-contain mx-auto" />

        <h2 className="text-darkGrayish font-semiBold text-[20px] sm:text-[23px] mb-3">{ title }</h2>

        <p className="text-grayishBlue font-regular text-[15px]">{ text }</p>

    </div>
)

function Workflow() {

    return(

        <section className="text-center pt-[80px] px-[20px] lg:px-[200px]">

            <h1 className="text-darkGrayish font-semiBold text-[27px] sm:text-[35px]">Supercharge your <br className="block sm:hidden" /> workflow</h1>

            <p className="text-grayishBlue font-regular text-[13px] sm:text-[18px] mt-5">We have the tools to boost your productivity.</p>

            <div className="flex flex-wrap justify-center items-center gap-10 mt-[70px] md:mt-[50px]">

                {stats.map((stat, index) => (

                    <StatsCard key={stat.id} {...stat} index={index} />

                ))}

            </div>

        </section>

    );
}

export default Workflow;