import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../helpers/types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

function ActionButton({ children, setSelectedPage }: Props) {
  return (
    <AnchorLink
      className="rounded-md bg-[#E5B80B] px-10 py-2 shadow-lg transition duration-300 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
}

export default ActionButton;
