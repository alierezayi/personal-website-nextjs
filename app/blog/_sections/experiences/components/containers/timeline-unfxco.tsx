import { LOGOES } from "@/app/blog/_constants/images/logos";
import { LinkPreview } from "@/components/ui/link-preview";
import Image from "next/image";
import Link from "next/link";

export default function UnfxcoTimeline() {
  const linkClass = "font-semibold text-foreground";

  const images = [
    "/images/projects/crm/cover.png",
    "/images/projects/crm/image-1.png",
    "/images/projects/crm/image-2.png",
    "/images/projects/crm/image-3.png",
  ];

  return (
    <section>
      {/* Company Info */}
      <div>
        <Link href="https://unfxco.com" className="flex items-center gap-2">
          <h2 className="text-2xl font-semibold">Unicorn Forex Broker</h2>
        </Link>
        <p
          className={`tracking-wider leading-relaxed text-black/80 dark:text-white/80 mt-5`}
        >
          Unicorn Forex Broker (UNFXCO), part of{" "}
          <LinkPreview url="https://unfxco.com" className={linkClass}>
            Unicorn Brokers Holding
          </LinkPreview>
          , is a global leader in forex, crypto trading, prop trading, and
          white-label solutions. I joined UNFXCO as a{" "}
          <span className="italic">Front-End Developer</span>.
        </p>
      </div>

      {/* Project Info */}
      <section className="">
        <article className="mt-8 space-y-5">
          <div className="flex items-center gap-2">
            <Image
              src={LOGOES.b2prop}
              width={20}
              height={20}
              alt="B2Prop Logo"
            />
            <LinkPreview
              url="https://manager-prop.unfxco.com"
              className="text-base font-semibold"
            >
              B2Prop Trading Platform
            </LinkPreview>
          </div>
          <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-4">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full aspect-video object-cover rounded-lg"
                alt="Project Image"
              />
            ))}
          </div>
          <div>
            <ListItem>
              Developed and maintained B2Prop, a trading platform built with{" "}
              <LinkPreview url="https://nextjs.org" className={linkClass}>
                Next.js
              </LinkPreview>{" "}
              and{" "}
              <LinkPreview
                url="https://typescriptlang.org"
                className={linkClass}
              >
                TypeScript
              </LinkPreview>
              , focusing on UI/UX.
            </ListItem>
            <ListItem>
              Designed and implemented a cross-platform widget to enhance user
              experience and functionality across devices.
            </ListItem>
            <ListItem>
              Collaborated with backend developers, designers, and stakeholders
              to deliver a seamless and responsive trading platform.
            </ListItem>
            <ListItem>
              Optimized platform performance, ensuring fast load times and
              smooth user interactions.
            </ListItem>
          </div>
        </article>
      </section>
    </section>
  );
}

const ListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-2 mb-4">
      <div className="size-2 rounded-full bg-black/80 dark:bg-white/80 mt-[6px]" />
      <p className="flex-1 tracking-wider leading-relaxed text-black/80 dark:text-white/80">
        {children}
      </p>
    </div>
  );
};
