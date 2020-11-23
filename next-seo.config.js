const title = 'IBM Systems Training Search';
const description = 'Quick search for IBM Power Systems, IBM Storage and IBM Z technical content.';

const SEO = {
  title,
  description,
  canonical: 'https://systemstraining.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://systemstraining.vercel.app',
    image: 'https://systemstraining.vercel.app/static/images/storage.jpeg',
    title,
    description,
    images: [
      {
        url: 'https://systemstraining.vercel.app/static/images/storage.jpeg',
        alt: 'IBM Training',
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@__upen',
    site: 'https://twitter.com/__upen',
    cardType: 'summary_large_image'
  }
};

export default SEO;
