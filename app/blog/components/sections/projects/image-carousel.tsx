import { useEffect, useState } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function ImageCarousel({ images }: { images: string[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel setApi={setApi} className="w-full h-fit">
        <CarouselContent className="">
          {images.map((image, i) => (
            <CarouselItem key={i}>
              <div className="flex justify-center w-fit h-fit p-2 bg-gradient-to-br from-pink-700 to-blue-600 rounded-2xl">
                <Image
                  src={image}
                  width={500}
                  height={300}
                  alt=""
                  className="rounded-xl"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious>Previous</CarouselPrevious>
          <CarouselNext>Next</CarouselNext>
        </div>
      </Carousel>
      <div className="text-center text-neutral-500 dark:text-gray-400">
        Image {current} of {count}
      </div>
    </>
  );
}
