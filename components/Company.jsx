import { motion } from 'framer-motion'
import Link from "next/link"

export default function CompanySection() {
    const members = [
        {
          name: "Abdoulaye DIALLO",
          role: "CEO & Founder",
          imageUrl: "/team/abdoulaye_diallo.png",
          linkeinUrl: "https://www.linkedin.com/in/laye-diallo/",
        },
        {
          name: "Jonathan ALLARASSEM",
          role: "Head of R&D & Co-Founder",
          imageUrl: "/team/Jonathan.jpg",
          linkeinUrl: "https://www.linkedin.com/in/jonathan-allarassem-0aab09200/",
        },
        {
          name: "Saliou DIOUF",
          role: "CTO & Co-Founder",
          imageUrl: "/team/Saliou_Diouf.jpg",
          linkeinUrl: "https://ca.linkedin.com/in/andypoprawa",
        },
        {
          name: "Aliou WADE",
          role: "Senior Software Engineer & Architect",
          imageUrl: "/team/Aliou.png",
          linkeinUrl: "https://www.linkedin.com/in/aliou-wade-35a435196/",
        },
        {
          name: "Babacar SOW",
          role: "Hardware Team Lead",
          imageUrl: "/team/Babacar_Sow.jpg",
          linkeinUrl: "https://www.linkedin.com/in/babacar-sassy-ngom-sow-910489204/",
        },
        {
          name: "Mouhamad GUEYE",
          role: "Software Engineer",
          imageUrl: "/team/mouhamad_gueye.jpg",
          linkeinUrl: "https://www.linkedin.com/in/mouhamad-gueye-b00b31229/",
        },
        {
          name: "Saly DIABY",
          role: "Head Of Legal & Communication",
          imageUrl: "/team/saly_diaby.jpeg",
          linkeinUrl: "https://www.linkedin.com/in/saly-diaby-38b249200/",
        },
      ];

  return (
    <section id="company" className="w-full bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Our Mission Section */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
        <p className="text-xl leading-relaxed max-w-2xl mx-auto">
          At ASACAM, our mission is to lead the future of AI-driven surveillance technology, creating safer, smarter, and more secure solutions to protect businesses globally.
        </p>
      </motion.div>

      {/* Our Team Section */}
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Meet Our Talented Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              className="team-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="rounded-full w-[120px] h-[120px] mx-auto mb-4 transition-transform hover:scale-105"
                style={{ aspectRatio: "1/1", objectFit: "cover" }}
              />
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted text-sm">{member.role}</p>
                <Link href={member.linkeinUrl} className="text-primary hover:underline" prefetch={false}>
                  LinkedIn
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
