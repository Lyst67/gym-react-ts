import spaceLogo from "@/assets/spaceLogo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#304352] via-[#d7d2cc] to-transparent py-16 ">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={spaceLogo} />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© SpaceGym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>¡Hasta la vista, Todos!</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <a className="my-5 block underline" href="mailto:spacegym@mail.com">
            spacegym@mail.com
          </a>
          <a className="underline" href="tel:+380730000000">
            (038)730-00-00
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
