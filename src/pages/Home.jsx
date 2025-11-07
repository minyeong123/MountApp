import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Megaphone } from "lucide-react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";  
import hanla from "../assets/hanla.jpeg";
import seorak from "../assets/seorak.jpg";  
import bukhan from "../assets/bukhan.jpeg";
import gyeyang from "../assets/gyeyang.jpeg";

import SearchBar from "../layouts/SearchBar"; 

export default function Home() {
  const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  const guides = [
    { name: "한라산", image: hanla, description: "제주도의 최고봉, 다양한 코스와 풍경을 즐길 수 있습니다." },
    { name: "설악산", image: seorak, description: "바위와 계곡이 많아 등산 난이도가 높은 산입니다." },
    { name: "북한산", image: bukhan, description: "서울·경계 국립공원으로, 백운대와 계곡·숲이 어우러진 산입니다." },
    { name: "계양산", image: gyeyang, description: "인천 등산객에게 인기, 일출·일몰 명소입니다." },
  ];

  const [wildfires, setWildfires] = useState([]);
  const [loadingWF, setLoadingWF] = useState(true);

  useEffect(() => {
    // 임시 데이터
    const tempWildfires = [
      { SN: 1, PLC_NM: "북한산", MSTN_DT: "2025-11-07 14:00" },
      { SN: 2, PLC_NM: "설악산", MSTN_DT: "2025-11-07 13:30" },
      { SN: 3, PLC_NM: "한라산", MSTN_DT: "2025-11-07 12:50" },
    ];
    setWildfires(tempWildfires);
    setLoadingWF(false);
  }, []);

  return (
    <motion.section initial="hidden" animate="visible" transition={{ staggerChildren: 0.1 }} className="flex flex-col p-4 space-y-6">
      <motion.header variants={fadeIn} className="flex items-center gap-2 py-3">
        <img src={logo} alt="MountApp 로고" className="w-8 h-8 object-contain" />
        <h1 className="text-2xl font-bold">MountApp</h1>
      </motion.header>

      <motion.div variants={fadeIn}>
        <SearchBar />
      </motion.div>

      <motion.div variants={fadeIn} className="flex items-center space-x-2 py-1 border-b-2 border-gray-400">
        <Megaphone className="w-6 h-6" aria-hidden="true" />
        <h2 className="text-xl font-bold">실시간 재난정보</h2>
      </motion.div>

      <motion.section variants={fadeIn} className="flex flex-col space-y-3 bg-gray-200 p-3 rounded-lg">
        <motion.div className="text-xl font-bold text-gray-600"> 산사태 정보 </motion.div>
        <div className="border-t border-gray-300"></div>
        <div className="bg-white rounded-lg p-3 shadow-sm min-h-[100px] flex items-center justify-center text-gray-400">
          <p>API 데이터</p>
        </div>

        <motion.div className="text-xl font-bold text-gray-600"> 산불 정보 </motion.div>
        <div className="border-t border-gray-300"></div>
        <div className="bg-white rounded-lg p-3 shadow-sm min-h-[100px]">
          {loadingWF && <p className="text-gray-400">Loading...</p>}
          {!loadingWF && wildfires.length === 0 && (
            <p className="text-gray-400">현재 표시할 데이터가 없습니다.</p>
          )}
          {!loadingWF && wildfires.length > 0 && (
            <ul className="space-y-2">
              {wildfires.map((item) => (
                <li key={item.SN} className="text-gray-700 text-sm border-b pb-1">
                  📍 {item.PLC_NM}  
                  <br />
                  ⏱ {item.MSTN_DT}
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.section>

      <motion.div variants={fadeIn} className="flex flex-col">
        <h5 className="text-xl font-bold mb-2 border-b-2 border-gray-400">산악 가이드 정보</h5>
        <div className="flex space-x-4 overflow-x-auto py-2">
          {guides.map((guide, index) => (
            <motion.div key={index} variants={fadeIn} className="max-w-80 bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0">
              <Link to={`/mountain/${guide.name}`}>
                <img src={guide.image} alt={guide.name} className="w-full h-40 object-cover" />  
                <div className="p-3 flex flex-col space-y-1">
                  <h3 className="text-lg font-bold">{guide.name}</h3>
                  <p className="text-sm text-gray-500">{guide.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
