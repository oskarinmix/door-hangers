import FormSurvey from "@/components/FormSurvey";
import Image from "next/image";
import Logo1 from "../images/safewater-logo-1.svg";
import Logo from "../images/safewater-logo.svg";
import Image1 from "../images/image1.jpeg";
import Problem from "../images/problem.png";
import Focus from "../images/focu.png";
import Solutions from "../images/solution.png";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-screen h-screen bg-white text-white items-center">
      {/* @ts-ignore */}
      <Container>
        <div className="w-full flex flex-col items-center justify-center p-4 bg-[#122133]">
          <div className="flex w-full items-center justify-center">
            <Image src={Logo} alt="Logo" width={100} className="mr-4" />
            <Image src={Logo1} alt="Logo" width={200} />
          </div>
          <h1 className="text-white font-bold text-3xl ml-24">
            foreveryone.org
          </h1>
          <div className="h-8 bg-[#0B1828]"></div>
        </div>
      </Container>
      <Image src={Image1} alt="image1" />
      <p className="text-md text-[#122133] p-4 text-justify">
        Drinking bad water quality is not safe and can lead to illness and
        death, particularly for children and vulnerable people. Falling sick due
        to contaminated water has a detrimental effect on the quality of life
        for families.
      </p>
      <h1 className="text-[#122133] font-bold text-xl ml-24 place-self-start">
        Safe Water for Everyone
      </h1>
      <p className="text-md text-[#122133] p-4 text-justify">
        Access to clean drinking water is a basic human right. Our aim is to
        make sure everyone has access.We want to create solutions using
        technologies that are effective, low cost, and sustainable.
      </p>
      <div className="flex items-center justify-evenly">
        <Image src={Problem} alt="icon" width={50} />
        <Image src={Focus} alt="icon" width={50} />
        <Image src={Solutions} alt="icon" width={50} />
      </div>
      <div className="flex items-center justify-center w-full mt-4">
        <Link href="/survey">
          <button className="bg-[#0B1828] text-sm text-white px-4 py-2 text-center">
            Take our survey
          </button>
        </Link>
      </div>
    </div>
  );
}

const Container = ({
  children,
  className,
}: {
  children: any;
  className: string;
}) => (
  <div className={`w-full max-w-screen-xl mx-auto ${className}`}>
    {children}
  </div>
);
