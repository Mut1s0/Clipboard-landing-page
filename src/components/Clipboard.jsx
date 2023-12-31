import { devices } from "../images";

function Clipboard() {

    return(

        <section className="md:max-w-[700px] mx-auto">

            <div className="text-center">

                <h1 className="text-darkGrayish font-semiBold text-[27px] sm:text-[35px] mb-6">Access Clipboard <br className="block sm:hidden" /> Anywhere</h1>

                <p className="text-grayishBlue font-regular text-[13px] sm:text-[18px] mb-10">Whether you are on the go, or at your <br className="block sm:hidden" /> computer, you can access all your <br className="block sm:hidden" /> Clipboard snippets in a few simple clicks.</p>

            </div>

            <img src={devices} alt="devices" className="w-full" />

        </section>

    )
}

export default Clipboard;