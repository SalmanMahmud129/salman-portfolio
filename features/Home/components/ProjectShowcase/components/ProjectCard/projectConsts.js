import { LogosNextjsIcon } from "@/features/common/Icons/NextjsIcon"
import { ChakraIcon } from "@/features/common/Icons/ChakraIcon"
import { LogosTailwindcssIcon } from "@/features/common/Icons/TailwindIcon"
import { LogosReact } from "@/features/common/Icons/ReactIcon"
import { LogosRails } from "@/features/common/Icons/RubyIcon"


export const projects = [
    ,
    {
        id: 'project-1',
        name: "Real Estate Next",
        image: '/RealEstate.PNG',
        description: 'My introduction to Next.js and Chakra ui. Mock front-end for a real estate company with data pulled from Bayut Api',
        github: "https://github.com/SalmanMahmud129/real-estate-next",
        deployment: "https://real-estate-next-iota.vercel.app/",
        icons: [LogosNextjsIcon, ChakraIcon ]
    },
    
    {
        id: 'project-2',
        name: "My Portfolio",
        image: "/Portfolio.PNG",
        description: "The website you are on currently! Built with Next.js and Tailwind CSS.",
        github: "https://github.com/SalmanMahmud129/salman-portfolio",
        deployment: "https://salman-portfolio-two.vercel.app/",
        icons: [LogosNextjsIcon, LogosTailwindcssIcon ]
    },
    {
        id: 'project-3',
        name: "Flatiron Dealership",
        image: '/CarDealer.PNG',
        description: 'My Capstone project for Flatiron School. A mock E-commerce dealership. React front-end and Rails back-end',
        github: "https://github.com/SalmanMahmud129/Phase-5-Car-Dealer",
        icons: [LogosReact, LogosRails ],
        demo: "https://www.youtube.com/watch?v=m8Ovmxonpqo"
    },
    {
        id: 'project-4',
        name: "Flatiron Brewery",
        image: "/BreweryThumb.PNG",
        description: "Intro to React/React-Router, front-end that pulls data from a mock JSON back-end and displays them. Ability to add/remove beverages. ",
        github: "https://github.com/SalmanMahmud129/flatiron-brewery",
        icons: [LogosReact]
        
    }
]