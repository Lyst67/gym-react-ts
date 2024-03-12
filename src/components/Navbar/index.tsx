import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import spaceLogo from "@/assets/spaceLogo.png";
import { SelectedPage } from "@/helpers/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "@/components/ActionButton";
import LinkAnchor from "./LinkAnchor";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");
  const navbarBackground = isTopOfPage
    ? "bg-gradient-to-r from-[#304352]/80 via-[#d7d2cc]/50 to-transparent"
    : "bg-gradient-to-r from-[#304352] via-[#d7d2cc] to-transparent drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img className="drop-shadow-lg" src={spaceLogo} alt="logo" />
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <LinkAnchor
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <LinkAnchor
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <LinkAnchor
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <LinkAnchor
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8 `}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-[#E5B80B]  p-2"
                onClick={() => {
                  setIsMenuToggled(!isMenuToggled);
                }}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* MOBIL MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="drop-shadow- fixed bottom-0 right-0 z-40 h-full w-72 bg-gradient-to-t from-[#304352] to-[#d7d2cc] drop-shadow-xl">
          {/* CLOSE BUTTON */}
          <div className="flex justify-end p-12">
            <button
              onClick={() => {
                setIsMenuToggled(!isMenuToggled);
              }}
            >
              <XMarkIcon
                className="h-6
                          w-6 text-gray-500"
              />
            </button>
          </div>
          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <LinkAnchor
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <LinkAnchor
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <LinkAnchor
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <LinkAnchor
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
