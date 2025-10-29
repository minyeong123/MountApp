import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import SearchBar from "../layouts/SearchBar";
import { guides } from "./guidesData";

export default function Mountain() {
  const { name } = useParams();
  const mountain = guides.find((g) => g.name === name);

  if (!mountain) {
    return (
      <motion.section className="p-4 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="text-2xl font-bold text-red-600 mb-4"> 산 정보를 찾을 수 없습니다.</h2>
      </motion.section>
    );
  }
  return (
    <motion.section className="p-4 space-y-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <motion.header className="flex flex-col items-center py-2">
        <h2 className="text-2xl font-bold">산악 정보</h2>
      </motion.header>

      <SearchBar />

      <motion.div className="space-y-3 ">
        <h2 className="text-2xl font-bold">{mountain.name}</h2>
        <img src={mountain.image} alt={mountain.name} className="w-full h-60 object-cover rounded-lg shadow"/>
        <p className="text-gray-700 leading-relaxed">{mountain.description}</p>
      </motion.div>

      <h2 className="text-2xl font-bold">{mountain.name} 날씨</h2>
        <motion.section className="p-1">
            <motion.section className="bg-gray-200 rounded-lg min-h-[150px] flex items-center justify-center">
                <p> API 데이터</p>
            </motion.section>
        </motion.section>
        
      <motion.div className="bg-gray-100 p-4 rounded-lg space-y-3 shadow-sm">
        <div>
          <h3 className="font-bold"> 등산 코스</h3>
          <p>{mountain.trails}</p>
        </div>
        <div>
          <h3 className="font-bold"> 난이도</h3>
          <p>{mountain.difficulty}</p>
        </div>
        <div>
          <h3 className="font-bold"> 높이</h3>
          <p>{mountain.height}</p>
        </div>
      </motion.div>
    </motion.section>
  );
}
