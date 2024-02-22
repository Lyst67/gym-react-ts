// import {
//   HomeModernIcon,
//   UserGroupIcon,
//   AcademicCapIcon,
// } from "@/heroicons/24/solid";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-automin-h-full w-5/6 py-20">
      <motion.div
        className="div"
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      ></motion.div>
    </section>
  );
};

export default Benefits;
