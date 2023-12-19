
function Buttons() {

    return(

        <div className="flex flex-col sm:flex-row w-full items-center justify-center gap-5">

            <button className="bg-strongCyan text-white font-semiBold py-3 px-10 rounded-[100px]
            cursor-pointer">Download for iOS</button>

            <button className="bg-lightBlue text-white font-semiBold py-3 px-10 rounded-[100px]
            cursor-pointer">Download for Mac</button>

        </div>

    );
}

export default Buttons;