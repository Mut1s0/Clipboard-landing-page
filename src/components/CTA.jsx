/* eslint-disable react-refresh/only-export-components */

import Buttons from "./Buttons";

function CTA() {

    return(

        <section className="pb-[100px] pt-[20px]">

            <div className="text-center mb-[40px]">

                <h1 className="text-darkGrayish font-semiBold text-[27px] sm:text-[35px] mb-5">Clipboard for iOS and <br className="block sm:hidden" /> Mac OS</h1>

                <p className="text-grayishBlue font-regular text-[13px] sm:text-[18px]">Available for free on the App Store. <br className="block sm:hidden"/> Download for Mac or iOS, sync with <br className="block sm:hidden"/> iCloud and <br className="hidden sm:block"/> you are ready to start adding to <br className="block sm:hidden"/> your clipboard.</p>

            </div>

            <div>

                <Buttons />

            </div>

        </section>
        
    )
}

export default CTA;