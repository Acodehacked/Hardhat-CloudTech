import { ImgHTMLAttributes, SVGAttributes } from 'react';

export default function ApplicationLogo(props: ImgHTMLAttributes<HTMLElement>) {
    return (
        <img src={"storage/logo.jpg"} {...props} alt={'Hardhat-CloudTech'} height={'80px'} />
    );
}
