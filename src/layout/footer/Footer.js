import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import useTranslation from "next-translate/useTranslation";
import { FacebookIcon, LinkedinIcon, PinterestIcon, TwitterIcon, WhatsappIcon } from "react-share";

//internal import
import { UserContext } from "@context/UserContext";

const Footer = () => {
  const { t } = useTranslation();
  const {
    state: { userInfo },
  } = useContext(UserContext);

  return (
    <div className="pb-10 lg:pb-0 xl:pb-0 foote_container">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
        <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-2 sm:gap-9 lg:gap-6 xl:gap-7 py-10 lg:py-16 justify-between">
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-1 lg:col-span-3 ">
            <h3 className="text-md lg:leading-7 font-medium mb-3 sm:mb-5 lg:mb-2 pb-0 listHeading">
              {t("common:footer-menu-title")}
            </h3>
            <ul className="text-sm flex flex-col space-y-2">
              <li className="flex items-baseline">
                <Link href="/about-us">
                  <a className="text-gray-600 inline-block w-full hover:text-emerald-500 footerLink">
                    {t("common:footer-about-us")}
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="/contact-us">
                  <a className="text-gray-600 footerLink inline-block w-full hover:text-emerald-500">
                    {t("common:footer-contact-us")}
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="#">
                  <a className="text-gray-600 footerLink inline-block w-full hover:text-emerald-500">
                    {t("common:footer-careers")}
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="#">
                  <a className="text-gray-600 footerLink inline-block w-full hover:text-emerald-500">
                    {t("common:footer-news")}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-1 lg:col-span-3">
            <h3 className="text-md lg:leading-7 listHeading font-medium mb-0 sm:mb-5 lg:mb-2 pb-0.5">
              {t("common:footer-top-category")}
            </h3>
            <ul className="text-sm lg:text-15px flex flex-col space-y-3">
              <li className="flex items-baseline">
                <Link href="/search?Category=fish--meat">
                  <a className="text-gray-600 inline-block footerLink w-full hover:text-emerald-500">
                    {t("common:footer-top-category-fish-meat")}
                  </a>
                </Link>
              </li>

              <li className="flex items-baseline">
                <Link href="/search?Category=drinks">
                  <a className="text-gray-600 inline-block footerLink w-full hover:text-emerald-500">
                    {t("common:footer-top-category-soft-drinks")}
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="search?Category=baby-care">
                  <a className="text-gray-600 inline-block footerLink w-full hover:text-emerald-500">
                    {t("common:footer-top-category-baby-care")}
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="search?Category=beauty--health">
                  <a className="text-gray-600 inline-block w-full footerLink hover:text-emerald-500">
                    {t("common:footer-top-category-beauty-health")}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="pb-3 sm:pb-0 col-span-1 md:col-span-1 lg:col-span-3">
            <h3 className="text-md listHeading lg:leading-7 font-medium mb-0 sm:mb-5 lg:mb-2 pb-0.5">
              {t("common:footer-my-account-title")}
            </h3>
            <ul className="text-sm lg:text-15px flex flex-col space-y-3">
              <li className="flex items-baseline">
                <Link href={`${userInfo?.email ? "/user/dashboard" : "#"}`}>
                  <a className="text-gray-600 inline-block footerLink w-full hover:text-emerald-500">
                    {t("common:footer-my-account-dashboard")}
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href={`${userInfo?.email ? "/user/my-orders" : "#"}`}>
                  <a className="text-gray-600 inline-block footerLink w-full hover:text-emerald-500">
                    {t("common:footer-my-account-myOrders")}
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href={`${userInfo?.email ? "/user/dashboard" : "#"}`}>
                  <a className="text-gray-600 inline-block footerLink w-full hover:text-emerald-500">
                    {t("common:footer-my-account-recentOrders")}
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href={`${userInfo?.email ? "/user/update-profile" : "#"}`}>
                  <a className="text-gray-600 inline-block footerLink w-full hover:text-emerald-500">
                    {t("common:footer-my-account-updatedProfile")}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="sm:pb-0 col-span-1 md:col-span-1 lg:col-span-3">
            <h3 className="text-md listHeading lg:leading-7 font-medium sm:mb-5 lg:mb-0 pb-0.5">
              {t("common:footer-contact-us")}
            </h3>
            <p className="leading-7 font-sans text-sm text-gray-600 footerLink mt-0">
              <span className="footerLink">{t("common:footer-address")}</span>
              <br />
              <span className="footerLink">{t("common:footer-tell")}</span>
              <br />
              <span className="footerLink">{t("common:footer-email")}</span>
            </p>
          </div>
        </div>

        <hr className="hr-line"></hr>

        <div className="mx-auto max-w-screen-2xl px-4 sm:px-10 bg-gray-50 shadow-sm border border-gray-50 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-8 items-center justify-between">
            {/* <div className="col-span-1">
              {/* <span className="text-base leading-7 font-medium block mb-2 pb-0.5">
                {t("common:footer-follow-us")}
              </span>
              <ul className="text-sm flex">
                <li className="flex items-center mr-3 transition ease-in-out duration-500">
                  <Link href="https://www.facebook.com">
                    <a
                      aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center mx-auto text-gray-500 hover:text-white"
                    >
                      <FacebookIcon size={34} round />
                    </a>
                  </Link>
                </li>
                <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                  <Link href="https://twitter.com">
                    <a
                      aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center mx-auto text-gray-500 hover:text-white"
                    >
                      <TwitterIcon size={34} round />
                    </a>
                  </Link>
                </li>
                <li className="flex items-center mr-3 transition ease-in-out duration-500">
                  <Link href="https://www.pinterest.com">
                    <a
                      aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center mx-auto text-gray-500 hover:text-white"
                    >
                      <PinterestIcon size={34} round />
                    </a>
                  </Link>
                </li>
                <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                  <Link href="https://www.linkedin.com">
                    <a
                      aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center mx-auto text-gray-500 hover:text-white"
                    >
                      <LinkedinIcon size={34} round />
                    </a>
                  </Link>
                </li>
                <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                  <Link href="https://www.whatsapp.com">
                    <a
                      aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center mx-auto text-gray-500 hover:text-white"
                    >
                      <WhatsappIcon size={34} round />
                    </a>
                  </Link>
                </li>
              </ul> */}
            {/* </div> */} 
            {/* <div className="col-span-1 text-center hidden lg:block md:block">
              <p className="text-base leading-7 font-medium block">{t("common:footer-call-us")}</p>
              <h5 className="text-2xl font-bold text-emerald-500 leading-7">+012345-67900</h5>
            </div> */}
            {/* <div className="col-span-1 hidden lg:block md:block">
              <ul className="lg:text-right">
                <li className="px-1 mb-2 md:mb-0 transition hover:opacity-80 inline-flex">
                  <Image
                    width={274}
                    height={85}
                    className="w-full"
                    src="/payment-method/payment-logo.png"
                    alt="payment method"
                  />
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
{/* 
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 flex justify-center py-4">
        <p className="text-sm text-gray-500 leading-6">
          Copyright 2022 @{" "}
          <Link href="https://themeforest.net/user/htmllover">
            <a target="_blank" rel="noopener noreferrer" className="text-emerald-500">
              HtmlLover
            </a>
          </Link>
          , All rights reserved.
        </p>
      </div> */}
    </div>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
