import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useCart } from "react-use-cart";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart, FiUser, FiBell } from "react-icons/fi";
import useTranslation from "next-translate/useTranslation";
import location from '../../images/location.png';
import { notifyError } from "@utils/toast";
import pdr1 from '../../images/pdr1.webp';
import pdr2 from '../../images/pdr2.webp';
import pdr3 from '../../images/pdr3.webp';
import pdr4 from '../../images/pdr4.webp';
//internal import
import NavbarPromo from "@layout/navbar/NavbarPromo";
import { UserContext } from "@context/UserContext";
import LoginModal from "@component/modal/LoginModal";
import CartDrawer from "@component/drawer/CartDrawer";
import { SidebarContext } from "@context/SidebarContext";

const Navbar = () => {
  const { t } = useTranslation();
  const [imageUrl, setImageUrl] = useState("");
  const [searchText, setSearchText] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const { toggleCartDrawer } = useContext(SidebarContext);
  const { totalItems } = useCart();
  const router = useRouter();

  const {
    state: { userInfo },
  } = useContext(UserContext);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      router.push(`/search?query=${searchText}`, null, { scroll: false });
      setSearchText("");
    } else {
      router.push(`/ `, null, { scroll: false });
      setSearchText("");
    }
  };

  useEffect(() => {
    if (Cookies.get("userInfo")) {
      const user = JSON.parse(Cookies.get("userInfo"));
      setImageUrl(user.image);
    }
  }, []);

  return (
    <>
      <CartDrawer />
      {modalOpen && <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} />}

      <div className="sticky top-0 z-20 bg-emerald-300">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div  className="top-bar h-14 lg:h-auto flex items-center justify-between py-2 mx-auto" >
            <Link href="/">
              <a className="mr-3 lg:block">
                {/* <Image width={100} height={50} src="/logo/richesm ORGANIC.png" alt="logo" /> */}
              </a>
            </Link>
            <div className="locationAdding ">
                     <div >
                     <Image 
                      src={location}
                      width={16}
                      height={16}
                      alt="location"
                      />
                     </div>
                      <span>Select Your Address</span>
                  </div>
            <div className="w-full transition-all duration-200 ease-in-out lg:flex lg:max-w-[500px] xl:max-w-[650px] 2xl:max-w-[800px] md:mx-12 lg:mx-4 xl:mx-0">
              <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-30">
                <div className="flex flex-col mx-auto searchContainer">
                  
                  <form
                  
                    onSubmit={handleSubmit}
                    className="formContainer relative pr-12 md:pr-14 bg-white shadow-sm rounded-md w-full"
                  >
                    <div className="focus flex items-center py-0.5">
                      <input
                        id="focus-element" 
                        onChange={(e) => setSearchText(e.target.value)}
                        value={searchText}
                        className="form-input w-full pl-5 appearance-none transition ease-in-out border text-input text-sm font-sans min-h-10 h-8 duration-200 bg-white focus:ring-0 outline-none border-none focus:outline-none placeholder-gray-500 placeholder-opacity-75"
                        placeholder={t(`common:search-placeholder`)}
                      />
                      <div className="ShowContainer">
                        <h3 className="para">Trending Search</h3>
                        <div className="item">
                          <ul>
                            <li className="para">Organic Rice</li>
                            <li className="para">Organic Oil</li>
                            <li className="para">Organic Ghee</li>
                            <li className="para">Organic Dry Fruits</li>
                            <li className="para">Home Care</li>
                            <li className="para">Breackfast</li>
                          </ul>
                            <h3 className="para" style={{marginTop:"10px"}}>Top Categories</h3>
                          <div className="menu">
                            <div className="section">
                                <Image src={pdr1}
                                width={70}
                                height={40} alt="product"/>
                                <p className="para">Organic Chana</p>
                            </div>
                            <div className="section">
                                <Image src={pdr2}
                                width={70}
                                height={40} alt="product"/>
                                <p className="para">Organic Chana</p>
                            </div>
                            <div className="section">
                                <Image src={pdr3}
                                width={70}
                                height={40} alt="product"/>
                                <p className="para">Organic Chana</p>
                            </div>
                            <div className="section">
                                <Image src={pdr4}
                                width={70}
                                height={40} alt="product"/>
                                <p className="para">Organic Chana</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                    
                      aria-label="Search"
                      type="submit"
                      className="searchBtn outline-none text-xl text-gray-400 absolute top-0 right-0 end-0 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
                    >
                      <IoSearchOutline className="searchBtnIcon" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div  className="flagIconContainer">
            <div>
                    <Image 
                    src={'/27130.jpg'}
                    width={20}
                    height={12}
                    alt="location"
                      />
            </div>
              <span>
                EN
              </span>
            </div>
            <div className="hidden md:hidden md:items-center lg:flex xl:block absolute inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            
              <button className="pr-2b text-white text-2xl font-bold" aria-label="Alert">
                <FiBell className="w-4 h-4 drop-shadow-xl" />
              </button>
              <button
                aria-label="Total"
                onClick={toggleCartDrawer}
                className="relative px-5 text-2xl font-bold"
              >
                <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-4 w-4 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                  {totalItems}
                </span>
                <FiShoppingCart className="w-4 text-white h-4 drop-shadow-xl" />
              </button>
              {/* Profile dropdown */}

              <button  className="pl-5 text-white mt-0 text-2xl font-bold" aria-label="Login">
                {imageUrl || userInfo?.image ? (
                  <Link href="/user/dashboard">
                    <a className="relative top-1 w-4 h-4">
                      {/* <Image
                        width={20}
                        height={20}
                        src={imageUrl || userInfo?.image}
                        alt="user"
                        className="bg-white rounded-full"
                      /> */}
                    </a>
                  </Link>
                ) : userInfo?.name ? (
                  <Link href="/user/dashboard" >
                    <a className="leading-none font-bold font-serif block">{userInfo?.name[0]}</a>
                  </Link>
                ) : (
                  <span onClick={() => setModalOpen(!modalOpen)} >
                    <FiUser className="w-4 h-4 drop-shadow-xl " />
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* second header */}
        <NavbarPromo />
      </div>
    </>
  );
};
export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
