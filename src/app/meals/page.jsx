import Meals from "@/Components/Meals";
import { Roboto } from "next/font/google";
import Image from "next/image";

const getTime = async () => {
  const res = await fetch("http://localhost:3000/time", { cache: "no-store" });
  const data = await res.json();
  return data.currentTime;
};

const roboto = Roboto({ weight: ["100", "300"], subsets: ["latin"] });

const MealPage = async () => {
  const realTime = await getTime();
  return (
    <div>
      <h2 className={`${roboto.className} text-2xl text-red-400 font-bold`}>
        Our meal is hotter than your gf
      </h2>
      <h4>Choose your meal: </h4>
      <Meals />

      <Image src="/1.jpg" alt="" height={1000} width={900} />
      {/* <h3>Time: {realTime}</h3> */}
    </div>
  );
};

export default MealPage;
