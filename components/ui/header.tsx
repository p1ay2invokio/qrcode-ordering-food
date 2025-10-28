import { useTheme } from "next-themes";
import { Button } from "./button";
import { LuSunMoon } from "react-icons/lu";

const Header = () => {

  const { setTheme, theme } = useTheme()

  return (
    <div className="w-full h-15 border-b border-gray-300 flex justify-between items-center p-5">
      <p className="font-[pbold] text-[18px]">Table : 1</p>
      <div className="flex gap-2 items-center justify-center">
        <Button onClick={() => {

          if (theme == 'dark') {
            setTheme('light')
          } else {
            setTheme('dark')
          }

        }} variant={"outline"}>
          <LuSunMoon className="size-6" />
        </Button>
        <p className="font-[regular] text-[18px]">ลูกค้า</p>
      </div>
    </div>
  );
};

export default Header;