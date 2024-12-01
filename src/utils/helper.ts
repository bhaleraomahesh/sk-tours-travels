export enum MenuType {
  Home = "Home",
  PrivacyPolicy = "Privacy Policy",
  About = "About Us",
  TermsConditions = "TermsConditions",
  Packages = "Packages",
}
export interface ICabInfo {
  title: string;
  description: string;
  image: string;
}

export const CAB_INFO: ICabInfo[] = [
  {
    title: "Clean & Comfortable",
    description:
      "We prioritize your comfort and safety with every ride. Our cabs come equipped with clean interiors, a Bisleri bottle, tissue paper, and essential medicines, ensuring you enjoy a comfortable and stress-free journey. Rest assured, your ride will be smooth and secure, allowing you to relax and enjoy your time on the road.",
    image: "comfort_trip.jpg",
  },
  {
    title: "Timely & Safe Arrivals",
    description:
      "Punctuality is key. Our cabs always reach your location on time, ensuring a timely and safe arrival at your destination. With our reliable service, you won't need to worry about taking alternate routes—just sit back, relax, and enjoy the ride with peace of mind.",
    image: "ontime_trip.jpg",
  },
  {
    title: "Knowledgeable & Trustworthy Drivers",
    description:
      "We take pride in hiring drivers who are well-informed about the best routes and have a deep knowledge of the area. Each driver is thoroughly vetted, so you can trust them to get you to your destination safely. You can rely on our drivers to provide a smooth, reliable journey with a high level of professionalism.",
    image: "cab1.jpg",
  },
  {
    title: "Enjoy Your Ride",
    description:
      "From start to finish, our goal is to make your travel experience enjoyable and stress-free. Choose us for a safe, comfortable, and punctual ride every time.",
    image: "enjoy_trip.jpg",
  },
];
