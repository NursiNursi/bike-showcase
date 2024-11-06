import Image from "next/image";

import { footerLinks } from "@/constants";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <div>
            <p className="text-base text-gray-700">
              <span className="font-semibold">Sinar Rejeki Lembang</span> <br />
              Jl. Raya Tangkuban Parahu No.16, Kayuambon, Kec. Lembang,
              Kabupaten Bandung Barat, Jawa Barat 40391, Indonesia <br />
            </p>
            <p className="text-base text-gray-700">
              Tel:{" "}
              <a href="tel:+628123456789" className="text-primary-red">
                +62 812-3456-789
              </a>
            </p>
          </div>

          {/* Social Media Buttons */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/MiaHondaLembang"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://www.instagram.com/miahondalembang/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://x.com/AstraHondaCare"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter size={28} />
            </a>
            <a
              href="https://www.youtube.com/@welovehondaindonesia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="youtube"
            >
              <FaYoutube size={28} />
            </a>
          </div>

          <div>
            <Image
              src="/hondacare.svg"
              width={200}
              height={200}
              alt="honda care"
            />
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="relative text-right w-full xl:w-[500px] h-[300px]">
          <div className="overflow-hidden bg-none h-full">
            <iframe
              title="Honda Sinar Rejeki Lembang Location"
              className="w-full h-full"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=sinar rejeki lembang&amp;t=&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>

        {/* <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div> */}
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2024 Honda Sinar Rejeki Lembang. All Rights Reserved</p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
