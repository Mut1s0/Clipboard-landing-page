import { logo } from "../images";
import { Buttons } from "../components"

function Hero() {

    return(

        <header className="w-full h-[660px] sm:h-[550px] flex flex-col justify-evenly px-[20px] lg:px-[200px]">

            <div className="flex flex-col justify-center items-center text-center">

                <img src={logo} alt="logo" className="w-[100px] h-[100%] mb-10" />

                <h1 className="text-darkGrayish font-semiBold text-[27px] sm:text-[45px] max-w-[290px] sm:max-w-[100%] mb-10">A history of everything you copy</h1>

                <p className="text-grayishBlue font-regular text-[15px] sm:text-[18px] max-w-[300px] sm:max-w-[650px]">Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</p>

            </div>

            <div>

                <Buttons />

            </div>

        </header>
        
    )
}

export default Hero;