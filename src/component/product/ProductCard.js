import Discount from "@component/common/Discount";
import Price from "@component/common/Price";
import Stock from "@component/common/Stock";
import ProductModal from "@component/modal/ProductModal";
import useAddToCart from "@hooks/useAddToCart";
import useAsync from "@hooks/useAsync";
import SettingServices from "@services/SettingServices";
import { notifyError } from "@utils/toast";
import { SidebarContext } from "@context/SidebarContext";
import { showingTranslateValue } from "@utils/translate";
import useTranslation from "next-translate/useTranslation";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState ,useContext} from "react";
import { IoAdd, IoBagAddSharp, IoRemove } from "react-icons/io5";
import { useCart } from "react-use-cart";
import { useRouter } from "next/router";


const ProductCard = ({ product, attributes }) => {
  const router = useRouter();
  const { setIsLoading, isLoading } = useContext(SidebarContext);
  const { items, addItem, updateItemQuantity, inCart } = useCart();
  const { handleIncreaseQuantity } = useAddToCart();
  const { lang } = useTranslation("ns1"); // default namespace (optional)
  const [modalOpen, setModalOpen] = useState(false);

  const { data: globalSetting } = useAsync(SettingServices.getGlobalSetting);

  const currency =  globalSetting?.default_currency ;
  // 
  // console.log('attributes in product cart',attributes)

  const handleAddItem = (p) => {
    if (p.stock < 1) return notifyError("Insufficient stock!");

    if (p?.variants?.length > 0) {
      setModalOpen(!modalOpen);
      return;
    }
    const { slug, variants, categories, description, ...updatedProduct } =
      product;
    const newItem = {
      ...updatedProduct,
      title: showingTranslateValue(p?.title, lang),
      id: p._id,
      variant: p.prices,
      price: p.prices.price,
      originalPrice: product.prices?.originalPrice,
    };
    addItem(newItem);
  };

  const handleMoreInfo = (slug) => {
    setModalOpen(false);

    router.push(`/product/${slug}`);
    setIsLoading(!isLoading);
  };

  const handleModalOpen = (event, id) => {
    setModalOpen(event);
  };

  return (
    <>
      {/* {modalOpen && (
        <ProductModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          product={product}
          currency={currency}
          attributes={attributes}
        />
      )} */}

      <div className="productboder group box-border overflow-hidden productHoverEffect flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
        <div
        onClick={() => handleMoreInfo(product.slug)}
          // onClick={() => handleModalOpen(!modalOpen, product._id)}
          className="relative flex justify-center cursor-pointer pt-2"
        >
          <div className="left-1">
            <Stock product={product} stock={product.stock} card />
          </div>

          <Discount product={product} />
          {product?.image[0] ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGES_BASE_URL}${product.image[0]}`}
              width={200}
              height={200}
              alt="product"
              
              className="object-contain  transition duration-150 ease-linear transform group-hover:scale-105"
            />
          ) : (
            <Image
              src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
              width={200}
              height={200}
              alt="product"
              className="object-cover transition duration-150 ease-linear transform group-hover:scale-105"
            />
          )}
        </div>
        <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
          <div className="relative mb-1">
            <span className="text-gray-400 font-medium text-xs d-block mb-1">
              {product.unit}
            </span>
            <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
              <span className="line-clamp-2">
                {showingTranslateValue(product?.title, lang)}
              </span>
            </h2>
          </div>

          <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
            <Price
              card
              product={product}
              currency={currency}
              price={product.prices.price}
              originalPrice={product?.prices?.originalPrice}
            />

            {inCart(product._id) ? (
              <div>
                {items.map(
                  (item,i) =>
                    item.id === product._id && (
                      <div
                        key={i}
                        className="h-9 w-auto flex flex-wrap items-center justify-evenly py-1 bg-emerald-500 text-white rounded"
                      >
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <span className="text-dark text-base">
                            <IoRemove />
                          </span>
                        </button>
                        <p className="text-sm text-dark px-1 font-serif font-semibold">
                          {item.quantity}
                        </p>
                        <button
                          onClick={() =>
                            item?.variants?.length > 0
                              ? handleAddItem(item)
                              : handleIncreaseQuantity(item)
                          }
                        >
                          <span className="text-dark text-base">
                            <IoAdd />
                          </span>
                        </button>
                      </div>
                    )
                )}{" "}
              </div>
            ) : (
              <button
                onClick={() => handleAddItem(product)}
                aria-label="cart"
                className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
              >
                {" "}
                <span className="text-xl">
                  <IoBagAddSharp />
                </span>{" "}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(ProductCard), { ssr: false });
