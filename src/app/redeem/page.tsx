import RedeemPage from "@/app/redeem/redeem";
import { SITE_URL } from "@/lib/constants";

type Props = {};

export const revalidate = 60;

export const generateMetadata = async () => {
  const title = `CC0-LIB ZINE | REDEEM`;
  const description = "Redeem your physical zine";
  const image = `${SITE_URL}/og/zine-og-redeem.png`;
  const url = `https://zine.cc0-lib.wtf/redeem`;

  return {
    title: title,
    description: description,
    image: image,
    url: url,
    type: "website",
    openGraph: {
      title: title,
      description: description,
      url: url,
      type: "website",
      images: [
        {
          url: image,
          width: 800,
          height: 400,
          alt: title,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [image],
    },
  };
};

const RedeemHomePage = async (props: Props) => {
  return (
    <main className="">
      <RedeemPage />
    </main>
  );
};

export default RedeemHomePage;
