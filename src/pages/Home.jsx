import { motion } from "framer-motion";
import { Search, Megaphone } from "lucide-react";
import logo from "../assets/logo.png";  
import hanla from "../assets/hanla.jpeg"
import seorak from "../assets/seorak.jpg";  
export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const guides = [
    {
      name: "한라산",
      image: hanla,
      description: "제주도의 최고봉, 다양한 코스와 풍경을 즐길 수 있습니다.",
    },
    {
      name: "설악산",
      image: seorak,
      description: "바위와 계곡이 많아 등산 난이도가 높은 산입니다.",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
      className="flex flex-col p-4 space-y-6"
    >
      <motion.header variants={fadeIn} className="flex items-center gap-2 py-3">
      <img src={logo} alt="MountApp 로고" className="w-8 h-8 object-contain" />
        <h1 className="text-2xl font-bold">MountApp</h1>
      </motion.header>

      <motion.div variants={fadeIn} className="relative w-full">
        <input type="text" placeholder="어떤 산을 찾으시나요?" className="w-full p-2 pl-10 border-2 border-gray-200 rounded-lg"/>
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20}/>
      </motion.div>

      <motion.div variants={fadeIn} className="flex items-center space-x-2 py-1 border-b-2 border-gray-400">
        <Megaphone className="w-6 h-6" aria-hidden="true" />
        <h2 className="text-xl font-bold">금일 재난정보</h2>
      </motion.div>

      <motion.section variants={fadeIn} className="flex flex-col space-y-3 bg-gray-200 p-3 rounded-lg">
        <motion.a className="text-xl font-bold text-gray-600 "> 산사태 정보 </motion.a>
        <div className="border-t border-gray-300"></div>
        <div className="bg-white rounded-lg p-3 shadow-sm min-h-[100px] flex items-center justify-center text-gray-400">
          <p>API 데이터</p>
        </div>
        <motion.a className="text-xl font-bold text-gray-600"> 산불 정보 </motion.a>
        <div className="border-t border-gray-300"></div>
        <div className="bg-white rounded-lg p-3 shadow-sm min-h-[100px] flex items-center justify-center text-gray-400">
          <p>API 데이터</p>
        </div>  
      </motion.section>

      <motion.div variants={fadeIn} className="flex flex-col">
        <h5 className="text-xl font-bold mb-2">산악 가이드 정보</h5>
        <div className="flex space-x-4 overflow-x-auto py-2">
          {guides.map((guide, index) => (
            <motion.div key={index} variants={fadeIn} className="max-w-80 bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0">
              <img src={guide.image} alt={guide.name} className="w-full h-40 object-cover" />  
              <div className="p-3 flex flex-col space-y-1">
                <h3 className="text-lg font-bold">{guide.name}</h3>
                <p className="text-sm text-gray-500">{guide.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section> 
  );
}
