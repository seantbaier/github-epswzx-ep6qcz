import type { NextPage } from "next";
import Link from "next/link";

import CTASection from "components/CTASection";
import SomeImage from "components/SomeImage";
import SomeText from "components/SomeText";

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <SomeText />
      <SomeImage />
      <CTASection />

      <Link href="/hello-234">Test</Link>
    </div>
  );
};

export default Home;
