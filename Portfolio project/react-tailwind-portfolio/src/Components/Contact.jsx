import Section from "./Section";
import { Globe } from "lucide-react";
import { Linkedin } from "lucide-react";
import SocialMedia from "./SocialMedia";
import { Github } from "lucide-react";
import { Twitter } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: <Linkedin />,
      title: "Linkedin",
      url: "https://www.linkedin.com/in/md-arsalan-ali-75a323322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      icon: <Github />,
      title: "Github",
      url: "https://github.com/Arsalan2714",
    },
    {
      icon: <Twitter />,
      title: "Twitter",
      url: "https://x.com/arsu_alii?t=OQ5wFohEHP1TqhNcFA6HSQ&s=09",
    },
  ];

  return (
    <div className="pb-6">
      <Section icon={<Globe />} sectionTitle="Contact & Social Media">
        <p className="text-gray-700 mb-4">
          Email: officialmdarsalanali@gmail.com <br />
          Phone: +91 9007309791
        </p>
        {socialLinks.map((social) => (
          <SocialMedia
            icon={social.icon}
            title={social.title}
            key={social.title}
            url={social.url}
          />
        ))}
      </Section>
    </div>
  );
};

export default Contact;
