import Link from "next/link";

const homepage =() => {
    return(
        <div>
            <ul>
            <li>
            <Link href="/About" target="_blank">About</Link>
            </li>

            <li>
            <Link href="/Contact" target="_blank">Contact</Link>
            </li>

            <li>
            <Link href="/Home" target="_blank">Home</Link>
            </li>

            <li>
            <Link href="/Service" target="_blank">Service</Link>
            </li>
            
            
            
             
            </ul>
        </div>
    )
};

export default homepage;

