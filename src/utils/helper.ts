export enum MenuType {
  Home = "Home",
  About = "About Us",
  TermsConditions = "Terms And Conditions",
  Packages = "Packages",
  OurBenefits = "Our Unique Benefits",
}

export interface ICabInfo {
  title: string;
  description: string;
  image: string;
}

export interface ICar {
  name: string;
  image: string;
  type?: string;
  facilities: ICarFacility[];
}

export interface ICarFacility {
  ac: boolean;
  seats: number;
  bags: number;
}
export interface ICallProps {
  phoneNumber: string;
  message?: string;
}

const CAB_LIST: ICar[] = [
  {
    name: "WagonR",
    image: "wagonr.jpeg",
    type: "Hatchback",
    facilities: [
      {
        ac: true,
        seats: 4,
        bags: 2,
      },
    ],
  },

  {
    name: "Swift Dezire",
    image: "swift_dezire.jpeg",
    type: "Sedan",
    facilities: [
      {
        ac: true,
        seats: 4,
        bags: 3,
      },
    ],
  },
  {
    name: "Etios",
    image: "etios.jpeg",
    type: "Premium Sedan",
    facilities: [
      {
        ac: true,
        seats: 4,
        bags: 3,
      },
    ],
  },
  {
    name: "Ertiga",
    image: "ertiga.jpeg",
    type: "MPV",
    facilities: [
      {
        ac: true,
        seats: 6,
        bags: 2,
      },
    ],
  },
  {
    name: "Innova Crysta",
    image: "innova.jpeg",
    type: "Premium MPV",
    facilities: [
      {
        ac: true,
        seats: 6,
        bags: 5,
      },
    ],
  },
];

export const DEFAULT_WHATSAPP_MSG = `Name: ?\nDate: ?\nTime: ?\nNumber of Passengers: ?\nPickup: ?\nDrop: ?`;

export interface ITourPackage {
  name: string;
  image: string;
  cars: ICar[];
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
// Sample data for the packages

export const COMMERCIAL_TOUR_PACKAGES: ITourPackage[] = [
  {
    name: "Pune To Mumbai",
    image: "mumbai_airport.jpg",
    cars: [...CAB_LIST],
  },
  {
    name: "Pune To Nashik",
    image: "nashik_airport.jpg",
    cars: [...CAB_LIST],
  },
  {
    name: "Pune to shirdi",
    image: "shirdi_airport.jpg",
    cars: [...CAB_LIST],
  },
  {
    name: "Mumbai to pune",
    image: "pune_airport.jpg",
    cars: [...CAB_LIST],
  },
  {
    name: "Mumbai to Nashik",
    image: "nashik_airport.jpg",
    cars: [...CAB_LIST],
  },
  {
    name: "Mumbai to Shirdi",
    image: "shirdi_airport.jpg",
    cars: [...CAB_LIST],
  },
  {
    name: "Nashik to Pune",
    image: "pune_airport.jpg",
    cars: [...CAB_LIST],
  },
  {
    name: "Nashik to Mumbai",
    image: "mumbai_airport.jpg",
    cars: [...CAB_LIST],
  },
  {
    name: "Nashik to Shirdi",
    image: "shirdi_airport.jpg",
    cars: [...CAB_LIST],
  },
];

export const HOLIDAY_TOUR_PACKAGES: ITourPackage[] = [
  {
    name: "Mahabaleshwar",
    image: "Mahableswar.jpg",
    cars: [...CAB_LIST],
  },
  {
    name: "Kaas Pathar",
    image: "kaas.jpg",
    cars: [...CAB_LIST],
  },
  {
    name: "Matheran",
    image: "matheran.jpg",
    cars: [...CAB_LIST],
  },
  {
    name: "Tamahini",
    image: "Tamhini.jpg",
    cars: [...CAB_LIST],
  },
  {
    name: "Lonavala",
    image: "Lonavala.jpg",
    cars: [...CAB_LIST],
  },
  {
    name: "Lavasa city",
    image: "lavasa.jpg",
    cars: [...CAB_LIST],
  },
  {
    name: "Tapola",
    image: "Tapola.jpg",
    cars: [...CAB_LIST],
  },
  {
    name: "Igatpuri",
    image: "igatpuri.jpg",
    cars: [...CAB_LIST],
  },
  {
    name: "Silvassa",
    image: "silvassa.jpg",
    cars: [...CAB_LIST],
  },
  {
    name: "Amboli",
    image: "amboli.jpg",
    cars: [...CAB_LIST],
  },
  {
    name: "Goa",
    image: "goa.jpg",
    cars: [...CAB_LIST],
  },
];

export const DEVOTIONAL_TOUR_PACKAGES: ITourPackage[] = [
  {
    name: "Shirdi Darshan",
    image: "saibaba.jpg",
    cars: [...CAB_LIST],
  },
  {
    name: "Bhimashankar Panchvati-Trimbakeshwar Darshan",
    image: "bhimashankar.jpg",
    cars: [...CAB_LIST],
  },
  {
    name: "Shanishingnapur Darshan",
    image: "shanishinganapur.jpg",
    cars: [...CAB_LIST],
  },
  {
    name: "Ashtvinayak Darshan",
    image: "ashtavinayak.jpg",
    cars: [...CAB_LIST],
  },
  {
    name: "Tuljabhawani Darshan",
    image: "Tuljabhawani.jpg",
    cars: [...CAB_LIST],
  },
  {
    name: "Akkalkot-Gangapur-Pandharpur",
    image: "akkalkot.jpg",
    cars: [...CAB_LIST],
  },
  {
    name: "Jejuri Darshan",
    image: "Jejuri.jpg",
    cars: [...CAB_LIST],
  },
  {
    name: "Ambabai Devi Darshan Kolhapur",
    image: "Amba_bai_darshgan.jpg",
    cars: [...CAB_LIST],
  },
];
