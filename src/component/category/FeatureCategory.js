import Image from "next/image";
import { useRouter } from "next/router";
import { IoChevronForwardSharp } from "react-icons/io5";
//internal import
import { SidebarContext } from "@context/SidebarContext";
import useAsync from "@hooks/useAsync";
import CategoryServices from "@services/CategoryServices";
import useTranslation from "next-translate/useTranslation";
import { useContext } from "react";
import { showingTranslateValue } from "@utils/translate";

const FeatureCategory = () => {
  const router = useRouter();
  const { lang } = useTranslation("ns1"); // default namespace (optional)
  const { isLoading, setIsLoading } = useContext(SidebarContext);

  const { data, loading, error } = useAsync(
    CategoryServices.getShowingCategory
  );


  const handleCategoryClick = (id, categoryName) => {
    const category_name = categoryName
      .toLowerCase()
      .replace(/[^A-Z0-9]+/gi, "-");
    const url = `/search?category=${category_name}&_id=${id}`;
    router.push(url);
    setIsLoading(!isLoading);
  };



  return (
    <>
      {error ? (
        <p className="flex justify-center align-middle items-center m-auto text-xl text-red-500">
          <span> {error}</span>
        </p>
      ) : (
        <ul className="grid grid-cols-2 gap-1 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
          {data[0]?.children?.map((category, i) => (
            <li className="group "  key={i + 1}>
              <div className="flex w-full h-full border border-gray-100 justify-center  shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg category">
                <div className="flex gap-1 flex-col items-center justify-center">
                  <div className="flex items-center justify-center">
                    {category.icon ? (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGES_BASE_URL}${category?.icon}`}
                        alt="category"
                        width={100}
                        height={100}
                      />
                    ) : (
                      <Image
                        src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                        alt="category"
                        width={70}
                        height={70}
                      />
                    )}
                  </div>

                  <div className="pl-0">
                    <h3
                      onClick={() =>
                        handleCategoryClick(
                          category._id,
                          showingTranslateValue(category?.name, lang)
                        )
                      }
                      className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1  group-hover"
                    >
                      {showingTranslateValue(category?.name, lang)}
                    </h3>
                    
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FeatureCategory;
