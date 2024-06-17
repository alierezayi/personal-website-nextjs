import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ProjectType } from "@/lib/types";
import { CircleCheck, Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ImageCarousel } from "./image-carousel";

export default function ProjectDialog({
  children,
  data,
}: {
  children: React.ReactNode;
  data: ProjectType;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl h-screen md:max-h-[650px] overflow-y-auto py-12 sm:p-20 scrollbar">
        <div className="flex flex-col gap-7">
          <ImageCarousel images={data.images} />
          <h1 className="text-lg font-medium">{data.title}</h1>
          <div className="flex flex-wrap gap-2">
            {data.tecnologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <div>Features</div>
            <ul className="flex flex-col gap-1.5 text-neutral-500 dark:text-gray-400">
              {data.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <CircleCheck className="w-3.5 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <div>Deployment</div>
            <Link
              href={data.deployment}
              className="flex items-center gap-1 text-neutral-500 dark:text-gray-400"
            >
              <Globe className="w-3.5" />
              <div className="truncate max-w-[250px] md:max-w-fit text-xs">
                {data.deployment}
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <div>Source</div>
            <Link
              href={data.source}
              className="flex items-center gap-1 text-neutral-500 dark:text-gray-400"
            >
              <Github className="w-3.5" />
              <div className="truncate max-w-[250px] md:max-w-fit text-xs">
                {data.source}
              </div>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
