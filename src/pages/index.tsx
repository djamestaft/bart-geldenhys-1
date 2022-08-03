import type { NextPageWithLayout } from './_app'
import { StaticImageData } from 'next/image'

// Components
import Layout from '../templates/Layout'
import Banner from '../components/Archetypes/Banner/Banner'
import Blurb from '../components/Archetypes/Blurb/Blurb'
import ProductCard from '../components/Archetypes/ProductCard/ProductCard'
import UpcomingWorkshops from '../components/Organisms/UpcomingWorkshops/UpcomingWorkshops'

// TODO: Images to come from CMS
import img from '../../public/assets/images/banner-image.jpg';
import img2 from '../../public/assets/images/banner-image-2.jpg';
import img3 from '../../public/assets/images/banner-image-3.jpg';
import img4 from '../../public/assets/images/banner-image-4.jpg';
import { trpc } from '../utils/trpc'
import Link from 'next/link'

// TODO: Mock data to come from CMS
const imageArray: Array<StaticImageData> = [img, img2, img3, img4]


const Page: NextPageWithLayout = () => {
  const pageSettings = trpc.useQuery(['strapi.pageSettings'])  
  const blurbTypes = trpc.useQuery(['strapi.blurbTypes'])
  const productTypes = trpc.useQuery(['strapi.productItems'])  
  const workshops = trpc.useQuery(['strapi.workshops'])  

  const homeBlurb = blurbTypes.status === 'success' ? blurbTypes.data.blurbTypes.data.attributes.blurb : ''
  const products = productTypes.status === 'success' ? productTypes.data.productsTypes.data : []
  const pSettings = pageSettings.status === 'success' ? pageSettings.data.pageSettings.data.attributes.pageSettings : {}
  const workshopsAll = workshops.status === 'success' ? workshops.data.workshops.data : []
  
  const {
    sectionHeading,
    buttonText,
    linkText,
    callToActionTitleText,
    workshopsTitle,
  } = pSettings

  return (
    <div>
      <Banner bannerImages={imageArray} overlay={false}></Banner>

      <Blurb blurbText={homeBlurb} />

      <div className='section-heading'>
        <h2 className='text-center'>{sectionHeading}</h2>
      </div>

      <div className="product-section flex justify-center">
        {products.map(({ attributes }, i: number) => {
          return (
            <ProductCard 
              key={i}
              backgroundImage={attributes.productItem.data.attributes.url}
              productTitle={attributes.Heading}
              productDescription={attributes.description}
              productPrice={attributes.productPrice}
            >
            </ProductCard>
          );
        })}
      </div>

      <div className="cta-section flex justify-center flex-col m-auto">
        <h2 className='find-your-balance flex justify-center border-black border-t border-b'>{callToActionTitleText}</h2>
        <button className='cta-button uppercase flex justify-center'>{buttonText}</button>

        <Link className='cta-link capatilize flex justify-center' href='/contact'><a className='justify-center'>{linkText}</a></Link>
      </div>

      <UpcomingWorkshops  
        workshopsTitle={workshopsTitle}
        workshops={workshopsAll}
      />
       
      <div className="random-image">
      </div>
    </div>
  );
}

Page.getLayout = function getLayout() {
  return (
    <Layout>
    </Layout>
  )
}

export default Page