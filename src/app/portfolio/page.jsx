"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Offer Management System",
    desc: "The Document Management System (DMS) is a powerful web-based solution built with Laravel that helps organizations efficiently manage, store, and track their documents. This system provides a secure and organized way to handle digital documents while maintaining proper version control and access management.",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://github.com/mehedimohammad213/DMS",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Mave CMS",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://mave.ethertech.ltd/login",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Asset Management System",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://assetiq.ethertech.ltd/login-cover.svg",
    link: "https://assetiq.ethertech.ltd/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Food Delivery System",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://mehedimohammad213.github.io/FoodApp/",
  },
];

const PortfolioPage = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section */}
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4">My Works</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Explore my latest projects
          </p>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className={`relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br ${item.color} h-[500px] transition-transform duration-300 group-hover:scale-105`}
              >
                {/* Project Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base opacity-90 line-clamp-4 mb-6 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Action Button */}
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      className="w-full bg-white text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>View Project</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </motion.button>
                  </Link>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      {/* <div className="w-full py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Do you have a project?
            </h2>
            <div className="relative inline-block">
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                viewBox="0 0 300 300"
                className="w-48 h-48 md:w-64 md:h-64"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                  />
                </defs>
                <text fill="#fff">
                  <textPath
                    xlinkHref="#circlePath"
                    className="text-sm md:text-base"
                  >
                    Front-end Developer and UI Designer
                  </textPath>
                </text>
              </motion.svg>
              <Link
                href="/contact"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-white text-gray-900 rounded-full flex items-center justify-center font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        </div>
      </div> */}
    </motion.div>
  );
};

export default PortfolioPage;
