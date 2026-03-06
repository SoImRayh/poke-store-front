import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer(params) {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content">

      <div className="flex flex-col items-center gap-2">
        <h2 className="text-xl font-bold">Minha Empresa</h2>

        <p>📧 raykah.silva@gmail.com</p>
        <p>📞 (62) 99451-5137</p>

        <div className="flex gap-6 text-2xl mt-4">
          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-primary transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://github.com/SoImRayh"
            target="_blank"
            className="hover:text-primary transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-primary transition"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="text-sm opacity-70 mt-4">
          © {new Date().getFullYear()} rayh.dev
        </p>
      </div>

    </footer>
  );
}