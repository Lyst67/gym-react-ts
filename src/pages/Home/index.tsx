import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/components/ActionButton";
import { SelectedPage } from "@/helpers/types";
import withTattoos1 from "@/assets/withTattoos1.png";
import spaceLogoHome from "@/assets/spaceLogoHome.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import HText from "@/components/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");

  return (
    <section id="home" className="gap-16 pt-10 md:h-full ">
      <motion.div
        className="mx-auto w-5/6 items-center justify-center gap-16 md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <motion.div
          className="z-10 mt-32 md:basis-4/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative mb-6">
            <div className="before:absolute before:-left-10 before:-top-24 before:z-[-1] md:before:content-evolvetext">
              <img
                className="text-black drop-shadow-lg"
                src={spaceLogoHome}
                alt="home-page-text"
              />
            </div>
          </div>
          <div>
            <HText>WE BUILD YOUR BODY.</HText>
            <p className="mt-6  max-w-lg text-sm ">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </div>

          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.OurClasses)}
              href={`#${SelectedPage.OurClasses}`}
            >
              Lern More
            </AnchorLink>
          </motion.div>
        </motion.div>
        {/* IMAGE */}
        <div
          className="mx-auto flex w-4/5 justify-center overflow-hidden rounded-xl md:z-10  
              md:mt-32 md:w-full md:justify-items-end"
        >
          <img className="w-full" src={withTattoos1} alt="home-page-image" />
        </div>
      </motion.div>
      {isAboveMediumScreens && (
        <div className="flex h-[120px] w-full items-center bg-gradient-to-r from-[#304352] via-[#d7d2cc] to-transparent md:mt-8">
          <div className="mx-auto flex w-5/6 items-center justify-around gap-8 ">
            <img src={SponsorRedBull} alt="redbull-image" />
            <img src={SponsorForbes} alt="forbes-image" />
            <img src={SponsorFortune} alt="fortune-image" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
