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

export interface ICallProps {
  phoneNumber: string;
  message?: string;
}

export const DEFAULT_WHATSAPP_MSG = `Name: ?\nDate: ?\nTime: ?\nNumber of Passengers: ?\nPickup: ?\nDrop: ?`;

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

export interface ICarFacilities {
  title: string;
  seats: number;
  bags: number;
}

export interface ICar {
  name: string;
  image: string;
  type?: string;
  facilities: ICarFacilities[];
}

export interface ITourPackage {
  name: string;
  image: string;
  cars: ICar[];
}

// Sample data for the packages

export const COMMERCIAL_TOUR_PACKAGES: ITourPackage[] = [
  {
    name: "Pune To Mumbai Airport",
    image: "airport1.jpg",
    cars: [
      {
        name: "Ertiga",
        image: "ertiga.jpeg",
        type: "MVP",
        facilities: [
          {
            title: "AC",
            seats: 6,
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
            title: "AC",
            seats: 4,
            bags: 3,
          },
        ],
      },
      {
        name: "Innova Crysta",
        image: "innova.jpeg",
        type: "Premium MVP",
        facilities: [
          {
            title: "AC",
            seats: 6,
            bags: 5,
          },
        ],
      },
      {
        name: "Etios",
        image: "etios.jpeg",
        type: "Premium Sedan",
        facilities: [
          {
            title: "AC",
            seats: 4,
            bags: 3,
          },
        ],
      },
      {
        name: "WagonR",
        image: "wagonr.jpeg",
        type: "Hatchback",
        facilities: [
          {
            title: "AC",
            seats: 4,
            bags: 2,
          },
        ],
      },
    ],
  },
  {
    name: "Pune To Nashik Airport",
    image: "airport2.jpg",
    cars: [
      {
        name: "Ertiga",
        image: "ertiga.jpeg",
        type: "MVP",
        facilities: [
          {
            title: "AC",
            seats: 6,
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
            title: "AC",
            seats: 4,
            bags: 3,
          },
        ],
      },
      {
        name: "Innova Crysta",
        image: "innova.jpeg",
        type: "Premium MVP",
        facilities: [
          {
            title: "AC",
            seats: 6,
            bags: 5,
          },
        ],
      },
      {
        name: "Etios",
        image: "etios.jpeg",
        type: "Premium Sedan",
        facilities: [
          {
            title: "AC",
            seats: 4,
            bags: 3,
          },
        ],
      },
      {
        name: "WagonR",
        image: "wagonr.jpeg",
        type: "Hatchback",
        facilities: [
          {
            title: "AC",
            seats: 4,
            bags: 2,
          },
        ],
      },
    ],
  },
];

export const HOLIDAY_TOUR_PACKAGES: ITourPackage[] = [
  {
    name: "Goa",
    image: "holiday1.jpg",
    cars: [
      {
        name: "Ertiga",
        image: "ertiga.jpeg",
        type: "MVP",
        facilities: [
          {
            title: "AC",
            seats: 6,
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
            title: "AC",
            seats: 4,
            bags: 3,
          },
        ],
      },
      {
        name: "Innova Crysta",
        image: "innova.jpeg",
        type: "Premium MVP",
        facilities: [
          {
            title: "AC",
            seats: 6,
            bags: 5,
          },
        ],
      },
      {
        name: "Etios",
        image: "etios.jpeg",
        type: "Premium Sedan",
        facilities: [
          {
            title: "AC",
            seats: 4,
            bags: 3,
          },
        ],
      },
      {
        name: "WagonR",
        image: "wagonr.jpeg",
        type: "Hatchback",
        facilities: [
          {
            title: "AC",
            seats: 4,
            bags: 2,
          },
        ],
      },
    ],
  },
  {
    name: "Kerala",
    image: "holiday2.jpg",
    cars: [
      {
        name: "Ertiga",
        image: "ertiga.jpeg",
        type: "MVP",
        facilities: [
          {
            title: "AC",
            seats: 6,
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
            title: "AC",
            seats: 4,
            bags: 3,
          },
        ],
      },
      {
        name: "Innova Crysta",
        image: "innova.jpeg",
        type: "Premium MVP",
        facilities: [
          {
            title: "AC",
            seats: 6,
            bags: 5,
          },
        ],
      },
      {
        name: "Etios",
        image: "etios.jpeg",
        type: "Premium Sedan",
        facilities: [
          {
            title: "AC",
            seats: 4,
            bags: 3,
          },
        ],
      },
      {
        name: "WagonR",
        image: "wagonr.jpeg",
        type: "Hatchback",
        facilities: [
          {
            title: "AC",
            seats: 4,
            bags: 2,
          },
        ],
      },
    ],
  },
  {
    name: "Humpy",
    image: "holiday3.jpg",
    cars: [
      {
        name: "Ertiga",
        image: "ertiga.jpeg",
        type: "MVP",
        facilities: [
          {
            title: "AC",
            seats: 6,
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
            title: "AC",
            seats: 4,
            bags: 3,
          },
        ],
      },
      {
        name: "Innova Crysta",
        image: "innova.jpeg",
        type: "Premium MVP",
        facilities: [
          {
            title: "AC",
            seats: 6,
            bags: 5,
          },
        ],
      },
      {
        name: "Etios",
        image: "etios.jpeg",
        type: "Premium Sedan",
        facilities: [
          {
            title: "AC",
            seats: 4,
            bags: 3,
          },
        ],
      },
      {
        name: "WagonR",
        image: "wagonr.jpeg",
        type: "Hatchback",
        facilities: [
          {
            title: "AC",
            seats: 4,
            bags: 2,
          },
        ],
      },
    ],
  },
  {
    name: "Lonavala",
    image: "holiday4.jpg",
    cars: [
      {
        name: "Ertiga",
        image: "ertiga.jpeg",
        type: "MVP",
        facilities: [
          {
            title: "AC",
            seats: 6,
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
            title: "AC",
            seats: 4,
            bags: 3,
          },
        ],
      },
      {
        name: "Innova Crysta",
        image: "innova.jpeg",
        type: "Premium MVP",
        facilities: [
          {
            title: "AC",
            seats: 6,
            bags: 5,
          },
        ],
      },
      {
        name: "Etios",
        image: "etios.jpeg",
        type: "Premium Sedan",
        facilities: [
          {
            title: "AC",
            seats: 4,
            bags: 3,
          },
        ],
      },
      {
        name: "WagonR",
        image: "wagonr.jpeg",
        type: "Hatchback",
        facilities: [
          {
            title: "AC",
            seats: 4,
            bags: 2,
          },
        ],
      },
    ],
  },
];

export const DEVOTIONAL_TOUR_PACKAGES: ITourPackage[] = [
  {
    name: "Pune To Shirdi",
    image: "sai_baba.jpeg",
    cars: [
      {
        name: "Ertiga",
        image: "ertiga.jpeg",
        type: "MVP",
        facilities: [
          {
            title: "AC",
            seats: 6,
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
            title: "AC",
            seats: 4,
            bags: 3,
          },
        ],
      },
      {
        name: "Innova Crysta",
        image: "innova.jpeg",
        type: "Premium MVP",
        facilities: [
          {
            title: "AC",
            seats: 6,
            bags: 5,
          },
        ],
      },
      {
        name: "Etios",
        image: "etios.jpeg",
        type: "Premium Sedan",
        facilities: [
          {
            title: "AC",
            seats: 4,
            bags: 3,
          },
        ],
      },
      {
        name: "WagonR",
        image: "wagonr.jpeg",
        type: "Hatchback",
        facilities: [
          {
            title: "AC",
            seats: 4,
            bags: 2,
          },
        ],
      },
    ],
  },
  {
    name: "Pune To Mahabaleshwar",
    image: "mahabaleshwar.jpeg",
    cars: [
      {
        name: "Ertiga",
        image: "ertiga.jpeg",
        type: "MVP",
        facilities: [
          {
            title: "AC",
            seats: 6,
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
            title: "AC",
            seats: 4,
            bags: 3,
          },
        ],
      },
      {
        name: "Innova Crysta",
        image: "innova.jpeg",
        type: "Premium MVP",
        facilities: [
          {
            title: "AC",
            seats: 6,
            bags: 5,
          },
        ],
      },
      {
        name: "Etios",
        image: "etios.jpeg",
        type: "Premium Sedan",
        facilities: [
          {
            title: "AC",
            seats: 4,
            bags: 3,
          },
        ],
      },
      {
        name: "WagonR",
        image: "wagonr.jpeg",
        type: "Hatchback",
        facilities: [
          {
            title: "AC",
            seats: 4,
            bags: 2,
          },
        ],
      },
    ],
  },
];
