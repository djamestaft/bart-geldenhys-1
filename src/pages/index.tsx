import type { ReactElement } from 'react'
import Layout from '../templates/Layout'
import Banner from '../components/Archetypes/Banner/Banner'
import Blurb from '../components/Archetypes/Blurb/Blurb'
import type { NextPageWithLayout } from './_app'
import { StaticImageData } from 'next/image'

// TODO: Images to come from CMS
import img from '../../public/assets/images/banner-image.jpg';
import img2 from '../../public/assets/images/banner-image-2.jpg';
import img3 from '../../public/assets/images/banner-image-3.jpg';
import img4 from '../../public/assets/images/banner-image-4.jpg';

// TODO: Mock data to come from CMS
const imageArray: Array<StaticImageData> = [img, img2, img3, img4];
const blurbText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore  labore sed do eiusmod tempor incididunt ut labore  labore sed do eiusmod tempor incididunt ut labore'

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <Banner bannerImages={imageArray} overlay={false}></Banner>
      <Blurb blurbText={blurbText}></Blurb>
      <div className='section-heading'>
        <h2 className='text-center'>Treatments and Massages</h2>
      </div>
    </div>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
    </Layout>
  )
}

export default Page