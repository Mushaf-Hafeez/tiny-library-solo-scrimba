import type { AboutCardProps } from "@/types";
import Image from "next/image";

const AboutCard = ({ icon, heading, text }: AboutCardProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Image
          src={icon}
          alt="Error rendering the icon"
          width={"32"}
          height={"32"}
        />
        <h2 className="text-2xl font-semibold">{heading}</h2>
      </div>
      <p className="text-md w-3/4">{text}</p>
    </div>
  );
};

export default AboutCard;
