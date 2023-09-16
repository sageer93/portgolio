import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/outline";
import SettingServices from "@services/SettingServices";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import fish from "../../images/cos1.jpg";
import Image from "next/image";
//internal import
import Category from "@component/category/Category";
import { notifyError } from "@utils/toast";

const NavbarPromo = () => {
  const { t } = useTranslation();

  const router = useRouter();
  const { locale } = router;
  const [data, setData] = useState([]);
  const [currentLang, setCurrentLang] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const res = await SettingServices.getShowingLanguage();
        setData(res);

        const result = res?.find((lang) => lang?.iso_code === locale);
        setCurrentLang(result);
      } catch (err) {
        notifyError(err);
        // console.log("error on getting lang", err);
      }
    })();
  }, []);

  return (
    <>
      <div className="hidden lg:block xl:block bg-white border-b">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 h-12 flex justify-between items-center">
          <div className="inline-flex">
            <div className="relative">
              <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center md:justify-start md:space-x-10">
                  <div
                    className="md:flex space-x-2 items-center"
                  >
                    <div className="relative font-serif topnavCategoryToggleBtn">
                      <div className="group inline-flex items-center hoverEffectListCategory px-4 py-3 hover:text-emerald-600 focus:outline-none ">
                        <span className="font-serif text-sm font-medium">
                          {t("common:Categories")}
                        </span>
                        <ChevronDownIcon
                          className="ml-1 h-3 w-3 group-hover:text-emerald-600"
                          aria-hidden="true"
                        />
                      </div>

                      {/* <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      > */}
                        
                      {/* </Transition> */}
                      <div className="absolute z-10 -ml-1 transform w-screen max-w-xs bg-white topNavCategoryToggle">
                          <div className="rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-scroll flex-grow scrollbar-hide w-full h-full">
                            <Category />
                          </div>
                        </div>
                    </div>

                    <div className="openListContainer" >
                      <a className="font-serif hoverEffectListCategory px-2 mx-0 py-2 text-sm font-medium hover:text-emerald-600">
                        {/* {t("common:About Us")} */}
                        Daily Need
                      </a>
                      <div className="container">
                        <ul>
                          <li className="uLheading">Organic Grocery & Gourments</li>
                          <li className="parafont">Friuts & Vagetables</li>
                          <li className="parafont">Cooking & Assential</li>
                          <li className="parafont">BisCuits & Cake</li>
                          <li className="parafont">House Hold Tool</li>
                          <li className="parafont">Pet Car</li>
                        </ul>
                        <ul>
                        <li className="uLheading">Beauty & Health</li>
                          <li className="parafont">Jem & Jelly</li>
                          <li className="parafont">Milk & Dairy</li>
                          <li className="parafont">Drinks</li>
                          <li className="parafont">Pet Car</li>
                          <li className="parafont">Daily Need</li>
                        </ul>
                        <ul>
                          <li className="uLheading">Organic Grocery & Gourments</li>
                          <li className="parafont">Friuts & Vagetables</li>
                          <li className="parafont">Cooking & Assential</li>
                          <li className="parafont">BisCuits & Cake</li>
                          <li className="parafont">House Hold Tool</li>
                          <li className="parafont">Pet Car</li>
                        </ul>
                        <div>
                        <div>
                        <div className="bannerContainer1">
                        </div>
                        </div>
                        <div>
                        <div className="bannerContainer2">
                        </div>
                        </div>
                        </div>
                      </div>
                    </div>
                    <div className="openListContainer" >
                      <a className="font-serif hoverEffectListCategory px-2 mx-0 py-2 text-sm font-medium hover:text-emerald-600">
                        {/* {t("common:About Us")} */}
                        Beauty & Health
                      </a>
                      <div className="container">
                        <ul>
                          <li className="uLheading">Organic Grocery & Gourments</li>
                          <li className="parafont">Friuts & Vagetables</li>
                          <li className="parafont">Cooking & Assential</li>
                          <li className="parafont">BisCuits & Cake</li>
                          <li className="parafont">House Hold Tool</li>
                          <li className="parafont">Pet Car</li>
                        </ul>
                        <ul>
                        <li className="uLheading">Beauty & Health</li>
                          <li className="parafont">Jem & Jelly</li>
                          <li className="parafont">Milk & Dairy</li>
                          <li className="parafont">Drinks</li>
                          <li className="parafont">Pet Car</li>
                          <li className="parafont">Daily Need</li>
                        </ul>
                        <ul>
                          <li className="uLheading">Organic Grocery & Gourments</li>
                          <li className="parafont">Friuts & Vagetables</li>
                          <li className="parafont">Cooking & Assential</li>
                          <li className="parafont">BisCuits & Cake</li>
                          <li className="parafont">House Hold Tool</li>
                          <li className="parafont">Pet Car</li>
                        </ul>
                        <div>
                        <div>
                        <div className="bannerContainer1">
                        </div>
                        </div>
                        <div>
                        <div className="bannerContainer2">
                        </div>
                        </div>
                        </div>
                      </div>
                    </div>
                    <div className="openListContainer" >
                      <a className="font-serif hoverEffectListCategory px-2 mx-0 py-2 text-sm font-medium hover:text-emerald-600">
                        {/* {t("common:About Us")} */}
                        Organic Grocery & Gourments
                      </a>
                      <div className="container">
                        <ul>
                          <li className="uLheading">Best Of Luxury</li>
                          <li className="parafont">Friuts & Vagetables</li>
                          <li className="parafont">Cooking & Assential</li>
                          <li className="parafont">BisCuits & Cake</li>
                          <li className="parafont">House Hold Tool</li>
                          <li className="parafont">Pet Car</li>
                        </ul>
                        <ul>
                        <li className="uLheading">Beauty & Health</li>
                          <li className="parafont">Jem & Jelly</li>
                          <li className="parafont">Milk & Dairy</li>
                          <li className="parafont">Drinks</li>
                          <li className="parafont">Pet Car</li>
                          <li className="parafont">Daily Need</li>
                        </ul>
                        <ul>
                          <li className="uLheading">Organic Grocery & Gourments</li>
                          <li className="parafont">Friuts & Vagetables</li>
                          <li className="parafont">Cooking & Assential</li>
                          <li className="parafont">BisCuits & Cake</li>
                          <li className="parafont">House Hold Tool</li>
                          <li className="parafont">Pet Car</li>
                        </ul>
                        <div>
                        <div>
                        <div className="bannerContainer1">
                        </div>
                        </div>
                        <div>
                        <div className="bannerContainer2">
                        </div>
                        </div>
                        </div>
                      </div>
                    </div>
                    <div className="openListContainer" >
                      <a className="font-serif hoverEffectListCategory px-2 mx-0 py-2 text-sm font-medium hover:text-emerald-600">
                        {/* {t("common:About Us")} */}
                        Organic Luxury Cosmetics
                      </a>
                      <div className="container">
                        <ul>
                          <li className="uLheading">Organic Grocery & Gourments</li>
                          <li className="parafont">Friuts & Vagetables</li>
                          <li className="parafont">Cooking & Assential</li>
                          <li className="parafont">BisCuits & Cake</li>
                          <li className="parafont">House Hold Tool</li>
                          <li className="parafont">Pet Car</li>
                        </ul>
                        <ul>
                        <li className="uLheading">Beauty & Health</li>
                          <li className="parafont">Jem & Jelly</li>
                          <li className="parafont">Milk & Dairy</li>
                          <li className="parafont">Drinks</li>
                          <li className="parafont">Pet Car</li>
                          <li className="parafont">Daily Need</li>
                        </ul>
                        <ul>
                          <li className="uLheading">Organic Grocery & Gourments</li>
                          <li className="parafont">Friuts & Vagetables</li>
                          <li className="parafont">Cooking & Assential</li>
                          <li className="parafont">BisCuits & Cake</li>
                          <li className="parafont">House Hold Tool</li>
                          <li className="parafont">Pet Car</li>
                        </ul>
                        <div>
                        <div>
                        <div className="bannerContainer1">
                        </div>
                        </div>
                        <div>
                        <div className="bannerContainer2">
                        </div>
                        </div>
                        </div>
                      </div>
                    </div>
                    <div className="openListContainer" >
                      <h2 className="subheading" style={{fontSize:"14px",margin:"0 5px"}}>100% Certified Organic Products <span className="colorChange">Buy In Bulk</span></h2>
                    </div>

                    {/* <Popover className="relative font-serif">
                      <Popover.Button className="group inline-flex items-center py-2 text-sm font-medium hover:text-emerald-600 focus:outline-none">
                        <span>{t("common:Pages")}</span>
                        <ChevronDownIcon
                          className="ml-1 h-3 w-3 group-hover:text-emerald-600"
                          aria-hidden="true"
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 -ml-1 mt-1 transform w-screen max-w-xs bg-white">
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-scroll flex-grow scrollbar-hide w-full h-full">
                            <div className="relative grid gap-2 px-6 py-6">
                              {pages.map((item) => (
                                <span
                                  key={item.title}
                                  className="p-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600"
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-4 w-4"
                                    aria-hidden="true"
                                  />
                                  <Link href={item.href}>
                                    <a className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600">
                                      {t(`common:${item.title}`)}
                                    </a>
                                  </Link>
                                </span>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover> */}
                    <Link href="/offer">
                      <a className="relative hoverEffectListCategory inline-flex items-center h-6 bg-red-100 font-serif ml-4 py-0 px-2 rounded text-sm font-medium text-red-500 hover:text-emerald-600">
                        {t("common:Offers")}
                        <div className="absolute flex w-2 h-2 left-auto -right-1 -top-1">
                          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarPromo;
