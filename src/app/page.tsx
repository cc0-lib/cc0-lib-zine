import HomePage from "@/app/home";
import {
  COLLECTION_ADDRESS,
  DEMO_SOLD,
  SITE_URL,
  TEST_COLLECTION_ADDRESS,
} from "@/lib/constants";
import { getCountDownTime, getMintState } from "@/lib/kv";
import checkSupply from "@/lib/zora-api/check-supply";

type Props = {};

export const generateMetadata = async () => {
  const title = `CC0-LIB ZINE`;
  const description = "CC0-LIB Zine Special Edition 01";
  const image = `${SITE_URL}/og/zine-og-main.png`;
  const url = `https://zine.cc0-lib.wtf`;

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

const MainPage = async (props: Props) => {
  const sold = await checkSupply();
  const mintState = await getMintState();
  const countDownTime = await getCountDownTime();
  const live = mintState !== "live" ? false : true;
  return <HomePage sold={sold} live={live} time={countDownTime} />;
};

export default MainPage;
