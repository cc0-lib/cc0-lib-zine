import { SITE_URL } from "@/lib/constants";
import CheckPage from "./check";

type Props = {};

export const generateMetadata = async () => {
  const title = `CC0-LIB ZINE | CHECK`;
  const description = "Check and verify your Zine NFT";
  const image = `${SITE_URL}/og/zine-og-check.png`;
  const url = `https://zine.cc0-lib.wtf/check`;

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

const CheckHomePage = (props: Props) => {
  return (
    <main className="">
      <CheckPage />
    </main>
  );
};

export default CheckHomePage;
