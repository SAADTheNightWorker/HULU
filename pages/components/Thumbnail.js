import Image from "next/image";
import React, { forwardRef } from "react";
import { ThumbUpIcon } from "@heroicons/react/outline";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const imagePath = result.backdrop_path || result.poster_path;

  return (
    <div
      ref={ref}
      className="group cursor-pointer p-2 transform transition-all duration-200 ease-in hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        width={1920}
        height={1080}
        src={`${BASE_URL}${imagePath}`}
        alt={result.title || result.original_name || "Thumbnail Image"}
      />

      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>

        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} .`}{" "}
          {result.release_date || result.first_air_date}.{" "}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
 