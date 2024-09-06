import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '1k+', label: 'Shops' },
    { value: '10M+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Travis Scott",
        price: "$1265.00",
    },
    {
        imgURL: shoe5,
        name: "Nike Black Phantom",
        price: "$700.00",
    },
    {
        imgURL: shoe6,
        name: "Nike Nocta",
        price: "$450.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Dunk Low",
        price: "$370.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Shop with ease and enjoy our free, fast shipping on all orders."
    },
    {
        imgURL: shieldTick,
        label: "Trusted Payment",
        subtext: "Make secure and reliable transactions with our trusted payment methods."
    },
    {
        imgURL: support,
        label: "Customer Support",
        subtext: "We're here to help—reach out to our team anytime for assistance."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Thanh Dat Vu',
        rating: 4.8,
        feedback: "These Nike shoes are so fast, I’m convinced they’ll outrun my excuses for skipping the gym!"
    },
    {
        imgURL: customer2,
        customerName: 'Hoang Anh Pham',
        rating: 5.0,
        feedback: "Bought these Nikes, and now I’m 100% sure I’m ready for the Olympics... or at least the walk to the fridge."
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Jordan 1 Off White", link: "/" },
            { name: "Jordan 1 Travis Scott", link: "/" },
            { name: "Jordan 1 Lost and Found", link: "/" },
            { name: "Nike Black Phantom", link: "/" },
            { name: "Nike Nocta", link: "/" },
            { name: "Nike Dunk Low", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "thanhdatvu.203@gmail.com", link: "mailto:thanhdatvu.203@gmail.com" },
            { name: "+1 7406076217", link: "tel:+1 7406076217" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];