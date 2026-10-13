import Sidebar from "@/components/Sidebar";
import { BookLayoutProps } from "@/types";

const Booklayout = ({ children }: BookLayoutProps) => {
  return (
    <div className="flex h-[85vh] w-full">
      <Sidebar />
      <main className="w-full">{children}</main>
    </div>
  );
};

export default Booklayout;
