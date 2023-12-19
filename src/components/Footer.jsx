import { logo, facebook, twitter , instagram } from "../images";
import { footerLinks } from "../constants";

function Footer() {

    return(

        <footer className="bg-grayishBlue/[.09]">

            <div className="flex flex-col sm:flex-row justify-between items-center gap-[100px] py-[70px]">

                <div className="flex-none">

                    <img src={logo} alt="logo" className="w-[80px]" />

                </div>

                <div className="flex-1 w-80 flex flex-col sm:flex-row flex-wrap gap-[30px] sm:gap-[100px] justify-start items-center">

                    {footerLinks.map((footerLink) => (

                        <div key={footerLink.id} className="">

                            <ul className="">

                                {footerLink.title}

                            </ul>

                        </div>

                    ))}

                </div>

                <div className="">

                    <ul className="flex justify-start items-center gap-[50px]">

                        <li>

                            <img src={facebook} alt="facebook" className="" />

                        </li>

                        <li>

                            <img src={twitter} alt="twitter" className="" />

                        </li>

                        <li>

                            <img src={instagram} alt="instagram" className="" />

                        </li>

                    </ul>

                </div>

            </div>

        </footer>
        
    )
}

export default Footer;