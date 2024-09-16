"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { news } from "../Components/data";
import { CalendarDaysIcon } from "@heroicons/react/20/solid";
export default function TitlePage() {
  const router = useRouter();
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };
  const handleClick = (title, id) => {
    const url = title.replace(/\s+/g, "-").toLowerCase();
    router.push(`../${url}/?id=${encodeURIComponent(id)}`);
  };

  const pathname = usePathname();
  const searchparams = useSearchParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const title = pathname.split("/")[1];
    const id = searchparams.get("id");
    const foundnews = news.find((e) => e.id === parseInt(id));
    if (foundnews) {
      setItem(foundnews);
    }
  }, [pathname, searchparams]);

  if (!item) {
    return <div>Loading....</div>;
  }
  const sortedNews = news
    .filter((e) => e.id != item.id)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <div className="w-full py-40 px-4 md:px-20 flex flex-col lg:flex-row gap-4 text-textcolor bg-gray-100">
      <div className="w-full lg:w-4/5 flex flex-col gap-4">
        <img src={item.img} className="w-80 h-80 rounded-3xl" />
        <span className="flex gap-2 items-center">
          <CalendarDaysIcon className="w-6 text-gray-500" />
          <span>{item.date}</span>
        </span>
        <h1 className="text-2xl font-bold mb-4 font-serif">{item.title}</h1>
        <p className="whitespace-pre-wrap text-justify">{item.desc}</p>
      </div>
      <div className="w-full lg:w-1/5">
        <p className="w-full flex justify-center text-3xl font-bold p-4 border-b-4 border-textcolor">
          Related News
        </p>
        {sortedNews.map((e) => (
          <div
            key={e.id}
            className="text-sm border-b-4 border-textcolor p-4 flex flex-col gap-2"
          >
            <img
              src={e.img}
              className="w-20 h-20 rounded-full"
              onClick={() => handleClick(e.title, e.id)}
            />
            <p>{e.date}</p>
            <p
              className="font-bold text-base font-serif"
              onClick={() => handleClick(e.title, e.id)}
            >
              {e.title}
            </p>
            <p className="">{truncateText(e.desc, 200)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// export { generateStaticParams } from "./TitlePageServer";
// export { default } from "./TitlePageServer";
// import { news } from "../Components/data";
// import TitlePageClient from "./TitlePageClient";

// export async function generateStaticParams() {
//   return news.map((item) => ({
//     title: item.title.replace(/\s+/g, "-").toLowerCase(),
//   }));
// }

// export default function TitlePage({ params }) {
//   const title = params.title;
//   const item = news.find(
//     (e) => e.title.replace(/\s+/g, "-").toLowerCase() === title
//   );
//   console.log("title-->", title);

//   const sortedNews = news
//     .filter((e) => e.id !== item?.id)
//     .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
//     .slice(0, 3);

//   return <TitlePageClient item={item} sortedNews={sortedNews} />;
// }
