import Link from 'next/link';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const socials = [
    {icon: <FaGithub/>, path: 'https://github.com/Sarthak1408'},
    {icon: <FaLinkedin/>, path: 'https://www.linkedin.com/in/sarthak-mathur1408/'},
    {icon: <SiLeetcode/>, path: 'https://leetcode.com/u/sarthakmathur1408/'},
    {icon: <BsTwitterX/>, path: 'https://x.com/SarthakMathur20'},
];

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link href={item.path} key={index} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    )
}
export default Social
