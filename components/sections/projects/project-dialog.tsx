import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ProjectType } from "@/lib/types";
import { CircleCheck, Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { RiGlobalLine } from "react-icons/ri";

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
      <DialogContent className="sm:max-w-2xl max-h-[800px] md:max-h-[600px] overflow-auto py-10 md:p-20 scrollbar">
        <div className="flex flex-col gap-7">
          <div className="flex justify-center w-fit h-fit p-2 bg-gradient-to-br from-pink-700 to-blue-600 rounded-2xl">
            <Image
              src={data.images[0]}
              width={500}
              height={300}
              alt={data.title}
              className="rounded-xl"
            />
          </div>
          <h1 className="text-lg font-medium">{data.title}</h1>
          <div className="flex flex-wrap gap-2">
            {data.tecnologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
          <ul className="flex flex-col gap-2 text-neutral-500 dark:text-gray-400">
            {data.features.map((feature, i) => (
              <li key={i} className="flex items-center">
                <CircleCheck className="w-3.5 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2">
            <div>Deployment</div>
            <Link
              href={data.deployment}
              className="flex items-center gap-1 text-neutral-500 dark:text-gray-400"
            >
              <Globe className="w-4" />
              <div className="truncate max-w-[350px] text-xs">
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
              <Github className="w-4" />
              <div className="truncate max-w-[350px] text-xs">
                {data.deployment}
              </div>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
