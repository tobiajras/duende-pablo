"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

const CarouselEmbla = ({ videos }) => {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
  });

  return (
    <div className='overflow-hidden' ref={emblaRef}>
      <div className='flex gap-10'>
        {videos.map((video) => (
          <div key={video.id.videoId} className='flex flex-[0_0_25%]'>
            <Link
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                className=' object-cover object-center rounded-lg'
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                width={1200}
                height={675}
              />
              <div>
                <h2>{video.snippet.title}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselEmbla;
