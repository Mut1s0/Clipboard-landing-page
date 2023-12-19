import { clients } from "../constants";

function Clients() {

    return(

        <section className="w-full flex flex-wrap justify-center items-center gap-[80px] py-[100px]">

            {clients.map((client) => (

                <img src={client.logo} key={client.id} alt="logo" className="w-auto h-auto" />

            ))}

        </section>

    )
}

export default Clients;