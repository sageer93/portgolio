import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper';
import cos1 from '../images/cos1.jpg';
import cos2 from '../images/cos2.jpg';
import cos3 from '../images/cos3.jpg';
import cos4 from '../images/cos4.jpg';
import cos5 from '../images/cos5.jpg';
import cos6 from '../images/cos6.jpg';
import longBnr from '../images/longBnr.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slide1 from '../images/topbrand.jpg';
import slide2 from '../images/topbrand1.jpg';
import slide3 from '../images/topbrand2.jpg';
import { SidebarContext } from "@context/SidebarContext";
import bnr1 from '../images/newbnr2.jpg'
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import offerImg from '../images/shop-min.jpg';
import offerImg1 from '../images/6036860.jpg';
import bnr12 from '../images/7756748.jpg';
import pdr1 from '../images/pdr1.webp'; 
import pdr2 from '../images/pdr2.webp'; 
import pdr3 from '../images/pdr3.webp'; 
import pdr4 from '../images/pdr4.webp'; 
import pdr5 from '../images/pdr5.webp'; 
import pdr6 from '../images/pdr6.webp'; 
import pdr7 from '../images/pdr7.webp'; 
//internal import
import Layout from "@layout/Layout";
import Banner from "@component/banner/Banner";
import CardTwo from "@component/cta-card/CardTwo";
import OfferCard from "@component/offer/OfferCard";
import StickyCart from "@component/cart/StickyCart";
import ProductServices from "@services/ProductServices";
import ProductCard from "@component/product/ProductCard";
import MainCarousel from "@component/carousel/MainCarousel";
import FeatureCategory from "@component/category/FeatureCategory";
import Loading from "@component/preloader/Loading";
import AttributeServices from "@services/AttributeServices";
import Link from "next/link";

const Home = ({ popularProducts, discountProducts, attributes }) => {
  const [populerProductMore , setPopulerProductMore] = useState(1)
  const [deiscountProductMore , setDisCountProductMore] = useState(1)
  const { t } = useTranslation();
  const router = useRouter();

  const topbrand = [

    {
      "prices": {
          "discount": 0,
          "originalPrice": 155.19,
          "price": 155.19
      },
      "categories": [
          "632ab0334d87ff24942109c1",
          "632ab0564d87ff24942109df"
      ],
      "image": [
          cos1
      ],
      "tag": [
          "[\"juice\",\"organic\"]"
      ],
      "variants": [],
      "status": "show",
      "_id": "644500c2839a5e0c2f5",
      "slug": "wow-skin-science-foaming-ubtan-face-wash",
      "sku": "",
      "barcode": "",
      "productId": "",
      "title": {
          "en": "Organic Red Rajma (Nature-Land)"
      },
      "description": {
          "en": "juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice."
      },
      "category": {
          "_id": "632ab0564d87ff24942109df",
          "name": {
              "en": "Juice"
          }
      },
      "stock": 91,
      "isCombination": false,
      "__v": 0,
      "createdAt": "2023-04-23T09:56:18.440Z",
      "updatedAt": "2023-04-23T09:56:18.440Z"
  },
  {
    "prices": {
        "discount": 0,
        "originalPrice": 1200,
        "price": 1200
    },
    "categories": [
        "632ab0334d87ff24942109c1",
        "632ab0564d87ff24942109df"
    ],
    "image": [
      cos2
    ],
    "tag": [
        "[\"juice\",\"organic\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "6400c2839a5e0c2f5c177fdtydtyd",
    "slug": "wow-skin-science-foaming-ubtan-face-wash",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
        "en": "Organic Rajma Chitra (Nature-Land)"
    },
    "description": {
        "en": "juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice."
    },
    "category": {
        "_id": "632ab0564d87ff24942109df",
        "name": {
            "en": "Juice"
        }
    },
    "stock": 91,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-23T09:56:18.440Z",
    "updatedAt": "2023-04-23T09:56:18.440Z"
},
{
  "prices": {
      "discount": 0,
      "originalPrice": 1400,
      "price": 1400
  },
  "categories": [
      "632ab0334d87ff24942109c1",
      "632ab0564d87ff24942109df"
  ],
  "image": [
      cos3
  ],
  "tag": [
      "[\"juice\",\"organic\"]"
  ],
  "variants": [],
  "status": "show",
  "_id": "644500c2839a5e0c2f5c177",
  "slug": "wow-skin-science-foaming-ubtan-face-wash",
  "sku": "",
  "barcode": "",
  "productId": "",
  "title": {
      "en": "Organic Chana Besan (Nature-Land)"
  },
  "description": {
      "en": "juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice."
  },
  "category": {
      "_id": "632ab0564d87ff24942109df",
      "name": {
          "en": "Organic Chana/Bengal Gram "
      }
  },
  "stock": 91,
  "isCombination": false,
  "__v": 0,
  "createdAt": "2023-04-23T09:56:18.440Z",
  "updatedAt": "2023-04-23T09:56:18.440Z"
},
{
  "prices": {
      "discount": 0,
      "originalPrice": 1300,
      "price": 1300
  },
  "categories": [
      "632ab0334d87ff24942109c1",
      "632ab0564d87ff24942109df"
  ],
  "image": [
      cos4
  ],
  "tag": [
      "[\"juice\",\"organic\"]"
  ],
  "variants": [],
  "status": "show",
  "_id": "644500c2839a5e0c2f5c1f",
  "slug": "wow-skin-science-foaming-ubtan-face-wash",
  "sku": "",
  "barcode": "",
  "productId": "",
  "title": {
      "en": "Organic Chana/Bengal Gram "
  },
  "description": {
      "en": "juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice."
  },
  "category": {
      "_id": "632ab0564d87ff24942109df",
      "name": {
          "en": "Juice"
      }
  },
  "stock": 91,
  "isCombination": false,
  "__v": 0,
  "createdAt": "2023-04-23T09:56:18.440Z",
  "updatedAt": "2023-04-23T09:56:18.440Z"
},
{
  "prices": {
      "discount": 0,
      "originalPrice": 155.19,
      "price": 155.19
  },
  "categories": [
      "632ab0334d87ff24942109c1",
      "632ab0564d87ff24942109df"
  ],
  "image": [
      cos5
  ],
  "tag": [
      "[\"juice\",\"organic\"]"
  ],
  "variants": [],
  "status": "show",
  "_id": "644500c2839a5e0c2f177f",
  "slug": "wow-skin-science-foaming-ubtan-face-wash",
  "sku": "",
  "barcode": "",
  "productId": "",
  "title": {
      "en": "Organic Rajma Jammu (Nature-Land)"
  },
  "description": {
      "en": "juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice."
  },
  "category": {
      "_id": "632ab0564d87ff24942109df",
      "name": {
          "en": "Juice"
      }
  },
  "stock": 91,
  "isCombination": false,
  "__v": 0,
  "createdAt": "2023-04-23T09:56:18.440Z",
  "updatedAt": "2023-04-23T09:56:18.440Z"
},
{
  "prices": {
      "discount": 0,
      "originalPrice": 155.19,
      "price": 1600
  },
  "categories": [
      "632ab0334d87ff24942109c1",
      "632ab0564d87ff24942109df"
  ],
  "image": [
      cos6
  ],
  "tag": [
      "[\"juice\",\"organic\"]"
  ],
  "variants": [],
  "status": "show",
  "_id": "644500c2839a5e0c2f5c17711f",
  "slug": "wow-skin-science-foaming-ubtan-face-wash",
  "sku": "",
  "barcode": "",
  "productId": "",
  "title": {
      "en": "Organic Rajma Red (OrgaSatva)"
  },
  "description": {
      "en": "juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice."
  },
  "category": {
      "_id": "632ab0564d87ff24942109df",
      "name": {
          "en": "Juice"
      }
  },
  "stock": 91,
  "isCombination": false,
  "__v": 0,
  "createdAt": "2023-04-23T09:56:18.440Z",
  "updatedAt": "2023-04-23T09:56:18.440Z"
}
    
  ]

  const item = [

    {
      "prices": {
          "discount": 0,
          "originalPrice": 155.19,
          "price": 155.19
      },
      "categories": [
          "632ab0334d87ff24942109c1",
          "632ab0564d87ff24942109df"
      ],
      "image": [
          pdr4
      ],
      "tag": [
          "[\"juice\",\"organic\"]"
      ],
      "variants": [],
      "status": "show",
      "_id": "644500c2839a5e0c2f5c17f",
      "slug": "wow-skin-science-foaming-ubtan-face-wash",
      "sku": "",
      "barcode": "",
      "productId": "",
      "title": {
          "en": "Organic Red Rajma (Nature-Land)"
      },
      "description": {
          "en": "juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice."
      },
      "category": {
          "_id": "632ab0564d87ff24942109df",
          "name": {
              "en": "Juice"
          }
      },
      "stock": 91,
      "isCombination": false,
      "__v": 0,
      "createdAt": "2023-04-23T09:56:18.440Z",
      "updatedAt": "2023-04-23T09:56:18.440Z"
  },
  {
    "prices": {
        "discount": 0,
        "originalPrice": 1200,
        "price": 1200
    },
    "categories": [
        "632ab0334d87ff24942109c1",
        "632ab0564d87ff24942109df"
    ],
    "image": [
      pdr3
    ],
    "tag": [
        "[\"juice\",\"organic\"]"
    ],
    "variants": [],
    "status": "show",
    "_id": "6445c2839a5e0c2f5c177f",
    "slug": "wow-skin-science-foaming-ubtan-face-wash",
    "sku": "",
    "barcode": "",
    "productId": "",
    "title": {
        "en": "Organic Rajma Chitra (Nature-Land)"
    },
    "description": {
        "en": "juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice."
    },
    "category": {
        "_id": "632ab0564d87ff24942109df",
        "name": {
            "en": "Juice"
        }
    },
    "stock": 91,
    "isCombination": false,
    "__v": 0,
    "createdAt": "2023-04-23T09:56:18.440Z",
    "updatedAt": "2023-04-23T09:56:18.440Z"
},
{
  "prices": {
      "discount": 0,
      "originalPrice": 1400,
      "price": 1400
  },
  "categories": [
      "632ab0334d87ff24942109c1",
      "632ab0564d87ff24942109df"
  ],
  "image": [
      pdr2
  ],
  "tag": [
      "[\"juice\",\"organic\"]"
  ],
  "variants": [],
  "status": "show",
  "_id": "644500c2839a5e0c2f",
  "slug": "wow-skin-science-foaming-ubtan-face-wash",
  "sku": "",
  "barcode": "",
  "productId": "",
  "title": {
      "en": "Organic Chana Besan (Nature-Land)"
  },
  "description": {
      "en": "juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice."
  },
  "category": {
      "_id": "632ab0564d87ff24942109df",
      "name": {
          "en": "Organic Chana/Bengal Gram "
      }
  },
  "stock": 91,
  "isCombination": false,
  "__v": 0,
  "createdAt": "2023-04-23T09:56:18.440Z",
  "updatedAt": "2023-04-23T09:56:18.440Z"
},
{
  "prices": {
      "discount": 0,
      "originalPrice": 1300,
      "price": 1300
  },
  "categories": [
      "632ab0334d87ff24942109c1",
      "632ab0564d87ff24942109df"
  ],
  "image": [
      pdr1
  ],
  "tag": [
      "[\"juice\",\"organic\"]"
  ],
  "variants": [],
  "status": "show",
  "_id": "644500c2839",
  "slug": "wow-skin-science-foaming-ubtan-face-wash",
  "sku": "",
  "barcode": "",
  "productId": "",
  "title": {
      "en": "Organic Chana/Bengal Gram "
  },
  "description": {
      "en": "juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice."
  },
  "category": {
      "_id": "632ab0564d87ff24942109df",
      "name": {
          "en": "Juice"
      }
  },
  "stock": 91,
  "isCombination": false,
  "__v": 0,
  "createdAt": "2023-04-23T09:56:18.440Z",
  "updatedAt": "2023-04-23T09:56:18.440Z"
},
{
  "prices": {
      "discount": 0,
      "originalPrice": 155.19,
      "price": 155.19
  },
  "categories": [
      "632ab0334d87ff24942109c1",
      "632ab0564d87ff24942109df"
  ],
  "image": [
      pdr5
  ],
  "tag": [
      "[\"juice\",\"organic\"]"
  ],
  "variants": [],
  "status": "show",
  "_id": "644500c2839a5e0c2f5c17744f",
  "slug": "wow-skin-science-foaming-ubtan-face-wash",
  "sku": "",
  "barcode": "",
  "productId": "",
  "title": {
      "en": "Organic Rajma Jammu (Nature-Land)"
  },
  "description": {
      "en": "juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice."
  },
  "category": {
      "_id": "632ab0564d87ff24942109df",
      "name": {
          "en": "Juice"
      }
  },
  "stock": 91,
  "isCombination": false,
  "__v": 0,
  "createdAt": "2023-04-23T09:56:18.440Z",
  "updatedAt": "2023-04-23T09:56:18.440Z"
},
{
  "prices": {
      "discount": 0,
      "originalPrice": 155.19,
      "price": 1600
  },
  "categories": [
      "632ab0334d87ff24942109c1",
      "632ab0564d87ff24942109df"
  ],
  "image": [
      pdr6
  ],
  "tag": [
      "[\"juice\",\"organic\"]"
  ],
  "variants": [],
  "status": "show",
  "_id": "644500c2830c2f5c177f",
  "slug": "wow-skin-science-foaming-ubtan-face-wash",
  "sku": "",
  "barcode": "",
  "productId": "",
  "title": {
      "en": "Organic Rajma Red (OrgaSatva)"
  },
  "description": {
      "en": "juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice."
  },
  "category": {
      "_id": "632ab0564d87ff24942109df",
      "name": {
          "en": "Juice"
      }
  },
  "stock": 91,
  "isCombination": false,
  "__v": 0,
  "createdAt": "2023-04-23T09:56:18.440Z",
  "updatedAt": "2023-04-23T09:56:18.440Z"
}
    
  ]
  // console.log("data", products);

  const { isLoading, setIsLoading } = useContext(SidebarContext);

  useEffect(() => {
    if (router.asPath === "/") {
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [router]);


  
  return (
    <>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <Layout>
          <div className="min-h-screen" >
            <StickyCart />
            <div className="bg-white">
              <div className="mx-auto py-5 max-w-screen-2xl px-3 sm:px-10">
                <div className="flex w-full">
                  <div className="flex-shrink-0 xl:pr-6 lg:block w-full lg:w-3/5">
                    <MainCarousel />
                  </div>
                  <div className="w-full hidden lg:flex">
                    {/* <OfferCard /> */}
                    <div className="">
                    <Image
                        src={bnr12}
                        alt="offer"
                        width="500"
                        height="170"
                      />
                    <Image
                        src={offerImg1}
                        alt="offer"
                        width="500"
                        height="170"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-orange-100 px-10 py-6 rounded-lg mt-6 hidden lg:block">
                  <Banner />
                </div>
              </div>
            </div>

            {/* feature category's */}
            <div className="bg-gray-100 lg:py-16 py-10">
              <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
                <div className="mb-2 flex justify-center">
                  <div className=" w-full ">
                      {/* {t("common:Featured-title")} */}
                      <h1 className="subheading font-serif text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none  lg:line-clamp-none  lg:text-3xl font-bold text-gray-800">
                  {/* {t(`common:${item.title}`)} */}
                  Shop By Category
                </h1>
                    <p className="para text-base font-sans text-gray-600 leading-6">
                      {t("common:Featured-sub-title")}
                    </p>
                  </div>
                </div>
                <FeatureCategory />
              </div>
            </div>
            <div className="bannerContainer">
                <div
            className="h-full relative rounded-lg overflow-hidden"
          >
            <div className="text-sm text-gray-600 hover:text-emerald-dark">
              <Image
                layout="responsive"
                width={950}
                height={200}
                src={bnr1}
                alt={"banner"}
                className="object-cover"
              />
            </div>
            <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center">
              <div className="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
                <h1 className="whiteColor heading mb-2 font-serif text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none  lg:line-clamp-none  lg:text-3xl font-bold text-gray-800">
                  {/* {t(`common:${item.title}`)} */}
                  The Best Quality Product Gauranteed!
                </h1>
                <p className="whiteColor para text-base leading-6 text-gray-600 font-sans line-clamp-1  md:line-clamp-none lg:line-clamp-none">
                Dramatically facilitate effective total linkage for go forward processes...
                </p>
                <Link href={'/'}>
                  <a className="hidden sm:inline-block lg:inline-block text-sm leading-6 font-serif font-medium mt-6 px-6 py-2 bg-emerald-500 text-center rounded-md text-white hover:bg-emerald-600">
                    {t("common:Slider-btn")}
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="shopByCategoryContainer">
              <div>
              <h1 className="subheading mt-10 mb-3 font-serif text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none  lg:line-clamp-none  lg:text-3xl font-bold text-gray-800">
                  {/* {t(`common:${item.title}`)} */}
                  Top Brands
                </h1>
                <div className="shopByCategory">
                <div className="flex">
                <div className="w-full">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                    {item.map((product,i) =>
                      {
                        return(
                      <ProductCard
                        key={i}
                        product={product}
                        attributes={attributes}
                      />)
                      })}
                  </div>
                </div>
              </div>
                </div>
              </div>
          </div>
                
            </div>
            <div className='sliders'>
            <Swiper

        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
          <SwiperSlide
            className="h-full relative rounded-lg overflow-hidden"
          >
            <div className="text-sm text-gray-600 hover:text-emerald-dark">
              <Image
                layout="responsive"
                height={800}

                src={slide1}
                alt={'banner'}
                className="object-cover"
              />
            </div>
            {/* <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center">
              <div className="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
                <h1 className="heading mb-2 font-serif text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none  lg:line-clamp-none  lg:text-3xl font-bold text-gray-800">
                  {t(`common:${item.title}`)}
                </h1>
                <p className="para text-base leading-6 text-gray-600 font-sans line-clamp-1  md:line-clamp-none lg:line-clamp-none">
                  {t(`common:${item.info}`)}
                </p>
                <Link href={"/"}>
                  <a className="hidden sm:inline-block lg:inline-block text-sm leading-6 font-serif font-medium mt-6 px-6 py-2 bg-emerald-500 text-center rounded-md text-white hover:bg-emerald-600">
                    {t("common:Slider-btn")}
                  </a>
                </Link>
              </div>
            </div> */}
          </SwiperSlide>
          <SwiperSlide
            className="h-full relative rounded-lg overflow-hidden"
          >
            <div className="text-sm text-gray-600 hover:text-emerald-dark">
              <Image
                layout="responsive"
                height={800}

                src={slide2}
                alt={'banner'}
                className="object-cover"
              />
            </div>
            {/* <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center">
              <div className="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
                <h1 className="heading mb-2 font-serif text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none  lg:line-clamp-none  lg:text-3xl font-bold text-gray-800">
                  {t(`common:${item.title}`)}
                </h1>
                <p className="para text-base leading-6 text-gray-600 font-sans line-clamp-1  md:line-clamp-none lg:line-clamp-none">
                  {t(`common:${item.info}`)}
                </p>
                <Link href={"/"}>
                  <a className="hidden sm:inline-block lg:inline-block text-sm leading-6 font-serif font-medium mt-6 px-6 py-2 bg-emerald-500 text-center rounded-md text-white hover:bg-emerald-600">
                    {t("common:Slider-btn")}
                  </a>
                </Link>
              </div>
            </div> */}
          </SwiperSlide>
      </Swiper>
            </div>
            <div className="topbrands">
                <div className="flex">
                <div className="w-full">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                    {topbrand.map((product,i) =>
                      {
                        return(
                      <ProductCard
                        key={i}
                        product={product}
                        attributes={attributes}
                      />)
                      })}
                  </div>
                </div>
              </div>
                </div>

                <div className='bnrs'>
                    <Image src={longBnr} alt='banner'/>
                </div>
            {/* popular products */}
            <div className="bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10">
              <div className="mb-10 flex justify-center">
                <div className="text-center w-full lg:w-2/5">
                  <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                    {t("common:popular-products-title")}
                  </h2>
                  <p className="para text-base font-sans text-gray-600 leading-6">
                    {t("common:popular-products-sub-title")}
                  </p>
                </div>
              </div>
              {/* <div className="">
                  <h3 className="text-xl lg:text-2xl mb-2 font-serif font-semibold"></h3>
              </div> */}
              <div className="flex">
                <div className="w-full">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                    {popularProducts?.slice(0, populerProductMore*12).map((product,i) =>
                      {
                        return(
                      <ProductCard
                        key={i}
                        product={product}
                        attributes={attributes}
                      />)
                      })}
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center mt-10 moreBtnContainer">
                <button onClick={()=>setPopulerProductMore(populerProductMore +1)}>Show More</button>
              </div>
            </div>

            {/* promotional banner card */}
            <div className="bannerContainer">
                <div
            className="h-full relative rounded-lg overflow-hidden"
          >
            <div className="text-sm text-gray-600 hover:text-emerald-dark">
              <Image
                layout="responsive"
                width={950}
                height={200}
                src={bnr1}
                alt={"banner"}
                className="object-cover"
              />
            </div>
            <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center">
              <div className="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
                <p className="subheading whiteColor">Organic Products and Food</p>
                <h1 className="whiteColor heading mb-2 font-serif text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none  lg:line-clamp-none  lg:text-3xl font-bold text-gray-800">
                  {/* {t(`common:${item.title}`)} */}
                  Quick Delivery to <span className="text-emerald-500">Your Home</span>
                </h1>
                <p className="whiteColor para text-base leading-6 text-gray-600 font-sans line-clamp-1  md:line-clamp-none lg:line-clamp-none">
                There are many products you will find our shop, Choose your daily necessary product from our Rechesm shop and get some special offer. See Our latest discounted products from here and get a special discount.
                </p>
                <Link href={'/'}>
                  <a className="hidden sm:inline-block lg:inline-block text-sm leading-6 font-serif font-medium mt-6 px-6 py-2 bg-emerald-500 text-center rounded-md text-white hover:bg-emerald-600">
                    {t("common:Slider-btn")}
                  </a>
                </Link>
              </div>
            </div>
          </div>
                
            </div>


            {/* discounted products */}
            <div
              id="discount"
              className="bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10"
            >
              <div className="mb-10 flex justify-center">
                <div className="text-center w-full lg:w-2/5">
                  <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                    {t("common:discounted-products-title")}
                  </h2>
                  <p className="para text-base font-sans text-gray-600 leading-6">
                    {t("common:discounted-products-paragraph-text")}
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="w-full">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                    {discountProducts?.slice(0, deiscountProductMore * 12).map((product,i) => (
                      <ProductCard
                        key={i}
                        product={product}
                        attributes={attributes}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center mt-10 moreBtnContainer">
                <button onClick={()=>setDisCountProductMore(deiscountProductMore +1)}>Show More</button>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { cookies } = context.req;
  const { query, _id } = context.query;

  const [data, attributes] = await Promise.all([
    ProductServices.getShowingStoreProducts({
      category: _id ? _id : "",
      title: query ? query : "",
    }),

    AttributeServices.getShowingAttributes(),
  ]);

  const popularProducts = data?.products.filter((p) => p.prices.discount < 1);


  const discountProducts = data?.products.filter(
    (p) => p.prices?.discount >= 1
  );

  return {
    props: {
      popularProducts: popularProducts.slice(0, 50),
      discountProducts: discountProducts,
      cookies: cookies,
      attributes,
    },
  };
};

export default Home;
