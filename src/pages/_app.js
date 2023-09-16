import "@styles/custom.css";
import '@styles/app.css';
import Head from 'next/head'
import { CartProvider } from "react-use-cart";
import { Elements } from "@stripe/react-stripe-js";
import { GoogleOAuthProvider } from "@react-oauth/google";

//internal import
import getStripe from "@utils/stripe";
import { UserProvider } from "@context/UserContext";
import DefaultSeo from "@component/common/DefaultSeo";
import { SidebarProvider } from "@context/SidebarContext";
const stripePromise = getStripe();

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"}/>
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,300;0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;0,6..12,800;1,6..12,200;1,6..12,300;1,6..12,600&display=swap" rel="stylesheet"/>
    </Head>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
        <UserProvider>
          <SidebarProvider>
            <Elements stripe={stripePromise}>
              <CartProvider>
                <DefaultSeo />
                <Component {...pageProps} />
              </CartProvider>
            </Elements>
          </SidebarProvider>
        </UserProvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default MyApp;
