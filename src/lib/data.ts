type Features = {
  type: "sectionFlex" | "sectionAbsolute"
  title: string
  text: string
  image: string
  color?: string
}

type Testimonial = {
  name: string
  text: string
  image: string
  job: string
}


export const featuresData: Features[] = [
  {
    type: 'sectionFlex',
    title: 'Transform your brand',
    text: 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
    image: 'image-transform.jpg',
    color: "bg-primary-200"
  },
  {
    type: 'sectionFlex',
    title: 'Stand out to the right audience',
    text: 'Using a collaborative formula of designers, researchers, photographers, videographers, copywriters, we’ll build and extend your brand in digital places',
    image: 'image-stand-out.jpg',
    color: "bg-primary-100"
  },
  {
    type: 'sectionAbsolute',
    title: 'Graphic design',
    text: 'Great design makes you memorable. We deliver artwork that underscores your brand message captures potential clients’ attention',
    image: 'image-graphic-design.jpg',
    color: "text-primary-300"
  },
  {
    type: 'sectionAbsolute',
    title: 'Photography',
    text: 'Increase your credibility by getting the most stunning, high-quality photos that your business image',
    image: 'image-photography.jpg',
    color: "text-primary-400"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    name: "Emily R.",
    text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and were always hit",
    image: "/images/image-emily.jpg",
    job: "Marketing Director"
  },
  {
    name: "Thomas S.",
    text: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it satisfying and enjoyable experience",
    image: "/images/image-thomas.jpg",
    job: "Chief Operating Officer"
  },
  {
    name: "Jennie F.",
    text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. recommended",
    image: "/images/image-jennie.jpg",
    job: "Business Owner"
  }
]
