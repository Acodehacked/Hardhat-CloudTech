import {useState} from "react";
import LongApplicationLogo from "../Common/LongApplicationLogo";

const [navIdex, setNavIdex] = useState(0);
export default function UserNavbar(){
    return <nav className={'flex '}>
        <LongApplicationLogo />
    </nav>
}
