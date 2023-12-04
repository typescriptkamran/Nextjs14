import React from "react";
import Image from "next/image";
import { H1, H2, H3, H4, H5, H6, P } from "@/components/headings/Headings";
import { ButtonP } from "@/components/buttons/buttons";
import Link from "next/link";

const tailwind = () => {
  return (
    <div>
      <div className="flex justify-center bg-gray-300 px-5 py-5">
        <div className="mx-4 order-last self-center">
          <Image src="/vercel.svg" width={150} height={150} alt="" />
        </div>
        <div className="mx-4 self-center text-center">
          <h1 className="text-6xl font-bold text-blue-600">
            Welcome to NorthBy
          </h1>
          <h2 className="text-3xl font-semibold text-blue-300">
            A premium in sight and sound
          </h2>
          <button
            className="my-5 py-2 px-4 border-2 border-black rounded-lg bg-blue-800 mx-5 text-white">
            Learn More
          </button>
          <ButtonP>
            <Link href="\">Home</Link>
          </ButtonP>
        </div>
        <div></div>
      </div>
      <H1> this is H1 </H1>
      <H2> this is H2 </H2>
      <H3> this is H3 </H3>
      <H4> this is H4 </H4>
      <H5> this is H5 </H5>
      <H6> this is H6 </H6>
      <P> this is paragraph text </P>
    </div>
  );
};

export default tailwind;