import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function MapPage() {
  const navigate = useNavigate();

    return (
        <motion.section className="flex flex-col p-4">
          <motion.header className="flex flex-col items-center ">
            <h2 className="text-2xl font-bold"> 마이페이지 </h2>
          </motion.header>
          <motion.div className="flex flex-col items-center justify-center gap-5 py-[150px]">
            <button  onClick={() => navigate("/account")} className="w-64 border-2 p-3 rounded-md ">계정정보 확인/수정</button>
            <button  onClick={() => navigate("/account")} className="w-64 border-2 p-3 rounded-md">로그아웃</button>
            <button  onClick={() => navigate("/account")} className="w-64 border-2  p-3 rounded-md">계정 탈퇴</button>
          </motion.div>
        </motion.section>
    );
  }
  