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
    heading: string;
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
      headers.set('Authorization', `Bearer 17f7534f694dfc985500bb70249d8a3c57be03e5b14ecef18559ad3f16bc9cccf0569fc717b2013250baba449864cc0a3ecee59f9d378efe4eff456b03e96c226ea663349afabc0c676253d43d314f11891af7fe54df70b0f40558d1b4ac64ca714d806ed82b28252ee7f85c7ea33b4276e78c531d70e5aa44e8acbff5554a2d`)
    const blurbTypes = await fetch('http://127.0.0.1:1337/api/product-items?populate=%2A ', {
        headers,
    })
    return await blurbTypes.json()
}

async function getBlurbs(): Promise<BlurbTypesObject> {
    const fetch = getFetch()
      const headers = new Headers()
      headers.set('Authorization', `Bearer 17f7534f694dfc985500bb70249d8a3c57be03e5b14ecef18559ad3f16bc9cccf0569fc717b2013250baba449864cc0a3ecee59f9d378efe4eff456b03e96c226ea663349afabc0c676253d43d314f11891af7fe54df70b0f40558d1b4ac64ca714d806ed82b28252ee7f85c7ea33b4276e78c531d70e5aa44e8acbff5554a2d`)
    const productTypes = await fetch('http://127.0.0.1:1337/api/home-blurb', {
        headers,
    })
    return await productTypes.json()
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
  });
