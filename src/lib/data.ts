type Features = {
  type: "sectionFlex" | "sectionAbsolute"
  title: string
  text: string
  image: string
  color?: string
}

export const sectionsFeaturesData: Features[] = [
  {
    type: 'sectionFlex',
    title: 'Transform your brand',
    text: 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
    image: '/images/mobile/image-transform.jpg',
    color: "primary-200"
  },
  {
    type: 'sectionFlex',
    title: 'Stand out to the right audience',
    text: 'Using a collaborative formula of designers, researchers, photographers, videographers, copywriters, we’ll build and extend your brand in digital places',
    image: '/images/mobile/image-stand-out.jpg',
    color: "primary-100"
  },
  {
    type: 'sectionAbsolute',
    title: 'Graphic design',
    text: 'Great design makes you memorable. We deliver artwork that underscores your brand message captures potential clients’ attention',
    image: '/images/mobile/image-graphic-design.jpg',
    color: "primary-300"
  },
  {
    type: 'sectionAbsolute',
    title: 'Photography',
    text: 'Increase your credibility by getting the most stunning, high-quality photos that your business image',
    image: '/images/mobile/image-photography.jpg',
    color: "primary-400"
  }
];
