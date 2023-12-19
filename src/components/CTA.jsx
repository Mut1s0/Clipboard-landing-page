/* eslint-disable react-refresh/only-export-components */

import Buttons from "./Buttons";

function CTA() {

    return(

        <section className="pb-[100px] pt-[20px]">

            <div className="text-center mb-[40px]">

                <h1 className="text-darkGrayish font-semiBold text-[27px] mb-5">Clipboard for iOS and <br className="block sm:hidden" /> Mac OS</h1>

                <p className="text-grayishBlue font-regular text-[15px]">Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you are ready to start adding to your clipboard.</p>

            </div>

            <div>

                <Buttons />

            </div>

        </section>
        
    )
}

export default CTA;