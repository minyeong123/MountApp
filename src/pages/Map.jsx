import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

export default function Map() {

    return (
      <motion.section className="p-4">
         <motion.header className="flex flex-col items-center py-3">
          <h2 className="text-2xl font-bold">지도</h2>
         </motion.header>

        <motion.section className="bg-gray-200 rounded-lg min-h-[700px] flex items-center justify-center">
          <p> API 데이터</p>
        </motion.section>
      </motion.section>
    );
  }
  