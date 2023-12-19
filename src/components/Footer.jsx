import { logo, facebook, twitter , instagram } from "../images";
import { footerLinks } from "../constants";

function Footer() {

    return(

        <footer className="bg-grayishBlue/[.09] px-[200px]">

            <div className="flex flex-col lg:flex-row justify-between items-center gap-[100px] py-[60px]">

                <div className="sm:flex-none">

                    <img src={logo} alt="logo" className="w-[80px]" />

                </div>

                <div className="w-[600px] flex flex-col lg:flex-row flex-wrap gap-[40px] sm:gap-[20px] justify-start items-center">

                    {footerLinks.map((footerLink) => (

                        <div key={footerLink.id}>

                            <ul className="lg:mr-[70px] hover:text-strongCyan cursor-pointer hover:text-semiBold">

                                {footerLink.title}

                            </ul>

                        </div>

                    ))}

                </div>

                <div className="w-[250px]">

                    <ul className="flex justify-center lg:justify-start items-center gap-[50px]">

                        <li>

                            <img src={facebook} alt="facebook" className="hover:fill-strongCyan cursor-pointer" />

                        </li>

                        <li>

                            <img src={twitter} alt="twitter" className="hover:fill-strongCyan cursor-pointer" />

                        </li>

                        <li>

                            <img src={instagram} alt="instagram" className="hover:fill-strongCyan cursor-pointer" />

                        </li>

                    </ul>

                </div>

            </div>

        </footer>
        
    )
}

export default Footer;