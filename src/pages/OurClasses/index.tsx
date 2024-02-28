import { SelectedPage, OurClassType } from "@/helpers/types";
import { motion } from "framer-motion";
import HText from "@/components/HText";
import Class from "@/components/Class";
import { classes } from "@/helpers/objects";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="ourclasses"
      className="w-full bg-gradient-to-r from-[#304352] via-[#d7d2cc] to-transparent py-40"
    >
      <motion.div
        className="mx-auto my-5 w-5/6 "
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>OUR CLASSES</HText>
          <p className="py-5 text-sm ">
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
            tellus quam porttitor. Mauris velit euismod elementum arcu neque
            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
            mattis odio in risus nunc.
          </p>
        </motion.div>
      </motion.div>
      <div className="mt- mt-10 h-[356px] w-full overflow-x-auto overflow-y-hidden">
        <ul className="w-[2800px] whitespace-nowrap">
          {classes.map((item: OurClassType, index) => (
            <Class
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              image={item.image}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurClasses;
