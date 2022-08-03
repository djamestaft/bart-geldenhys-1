import { createRouter } from "./context";
import { getFetch } from "@trpc/client";

export interface BlurbAttributes {
    blurb: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
}

export interface BlurbData {
    id: number;
    attributes: BlurbAttributes;
}

export interface BlurbMeta {
}

export interface BlurbTypesObject {
    data: BlurbData;
    meta: BlurbMeta;
}

export interface productAttributes {
    Heading: string;
    productPrice: number;
    productItem: productImageItem;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
}

interface productImageItem {
    data: {
        attributes: {
            url: string
        }
    }
}

export interface ProductData {
    id: number;
    attributes: productAttributes;
}

export interface ProductMeta {
}

export interface ProductTypesObject {
    data: Array<ProductData>;
    meta: ProductMeta;
}

getProducts

async function getProducts(): Promise<ProductTypesObject> {
    const fetch = getFetch()
      const headers = new Headers()
      headers.set('Authorization', `Bearer ac75024efcb0fd727a8b6efc51e1cf9dd9f6797331ea47bc8940ec5c6e7b52b8f63ca1284641705285bb2a105d76b9b47cd5d28d4220c5c97d053b518487b72e95665c038a9a600740f63435f2efe51f682f66f6833400bf7a3a27a148f860c7856a731f7b9ad24df1af1fd638dd4e9b1f8ae2b54fc4082815f12e54c60e412e`)
    const blurbTypes = await fetch('https://bart-geldenhys-cms-production.up.railway.app/api/product-items?populate=%2A ', {
        headers,
    })
    return await blurbTypes.json()
}

async function getBlurbs(): Promise<BlurbTypesObject> {
    const fetch = getFetch()
      const headers = new Headers()
      headers.set('Authorization', `Bearer ac75024efcb0fd727a8b6efc51e1cf9dd9f6797331ea47bc8940ec5c6e7b52b8f63ca1284641705285bb2a105d76b9b47cd5d28d4220c5c97d053b518487b72e95665c038a9a600740f63435f2efe51f682f66f6833400bf7a3a27a148f860c7856a731f7b9ad24df1af1fd638dd4e9b1f8ae2b54fc4082815f12e54c60e412e`)
    const productTypes = await fetch('https://bart-geldenhys-cms-production.up.railway.app/api/home-blurb', {
        headers,
    })
    return await productTypes.json()
}

async function getPageSettings(): Promise<any> {
    const fetch = getFetch()
      const headers = new Headers()
      headers.set('Authorization', `Bearer ac75024efcb0fd727a8b6efc51e1cf9dd9f6797331ea47bc8940ec5c6e7b52b8f63ca1284641705285bb2a105d76b9b47cd5d28d4220c5c97d053b518487b72e95665c038a9a600740f63435f2efe51f682f66f6833400bf7a3a27a148f860c7856a731f7b9ad24df1af1fd638dd4e9b1f8ae2b54fc4082815f12e54c60e412e`)
    const pageSettings = await fetch('https://bart-geldenhys-cms-production.up.railway.app/api/page-setting', {
        headers,
    })
    return await pageSettings.json()
}

async function getWorkshops(): Promise<any> {
    const fetch = getFetch()
      const headers = new Headers()
      headers.set('Authorization', `Bearer ac75024efcb0fd727a8b6efc51e1cf9dd9f6797331ea47bc8940ec5c6e7b52b8f63ca1284641705285bb2a105d76b9b47cd5d28d4220c5c97d053b518487b72e95665c038a9a600740f63435f2efe51f682f66f6833400bf7a3a27a148f860c7856a731f7b9ad24df1af1fd638dd4e9b1f8ae2b54fc4082815f12e54c60e412e`)
    const workshops = await fetch('https://bart-geldenhys-cms-production.up.railway.app/api/workshops', {
        headers,
    })
    return await workshops.json()
}

export const strapiRouter = createRouter().query("blurbTypes", {
  async resolve() {
      
    const blurbs = await getBlurbs();
    
    return {
        blurbTypes: blurbs,
    };
  },
})
.query("productItems", {
    async resolve() {
        
      const products = await getProducts();
      
      return {
          productsTypes: products,
      };
    },
  }).query("pageSettings", {
    async resolve() {
        
      const pageSettings = await getPageSettings();
      
      return {
          pageSettings: pageSettings,
      };
    },
  }).query("workshops", {
    async resolve() {
        
      const workshops = await getWorkshops();
      
      return {
          workshops: workshops,
      };
    },
  });
