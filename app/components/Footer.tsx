import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Suhas Amaresh",
      linkedin: "https://www.linkedin.com/in/suhas-amaresh-a5a431228/",
    },
    {
      name: "Sharan M Reddy",
      linkedin: "https://www.linkedin.com/in/sharan-reddy-0719b5246/",
    },
    {
      name: "Sujan P",
      linkedin: "https://www.linkedin.com/in/sujan-p-443745244/",
    },
  ];

  return (
    <footer className="bg-hackathon-black text-white py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Email Section */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center">
            <h4 className="text-lg font-press-start mb-2">Email</h4>
            <ul className="space-y-1">
              <li>
                <a
                  href="mailto:colossus@drait.edu.in"
                  className="text-pink-200 hover:underline text-base sm:text-xl font-jetbrains"
                >
                  colossus@drait.edu.in
                </a>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="w-full md:w-1/3 text-center md:text-right mb-4 md:mb-0">
            <h4 className="text-lg font-press-start mb-2">Connect With Us</h4>
            <div className="flex justify-center md:justify-end space-x-4 text-xl sm:text-2xl">
              <a
                title="Instagram"
                href="https://www.instagram.com/hackcolossus/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-200 hover:text-hackathon-purple transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                title="LinkedIn"
                href="https://www.linkedin.com/company/hackcolossus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-200 hover:text-hackathon-purple transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                title="Email"
                href="mailto:colossus@drait.edu.in"
                className="text-pink-200 hover:text-hackathon-purple transition-colors duration-300"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Made By Section */}
        <div className="mt-6 border-t border-hackathon-purple pt-4 text-center">
          <h4 className="text-lg font-press-start mb-1">Made By</h4>
          <p className="text-hackathon-beige font-jetbrains mb-3">
            Tech Team @Colossus 2.0
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 font-jetbrains">
            {teamMembers.map((member, index) => (
              <a
                key={index}
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-200 hover:text-hackathon-purple transition-colors duration-300"
              >
                {member.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-6 border-t border-hackathon-purple pt-4 text-center font-jetbrains text-sm text-hackathon-beige">
          © {new Date().getFullYear()} Colossus 2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;