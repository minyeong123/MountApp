import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function NewPost() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null); 

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 입력해주세요!");
      return;
    }

    alert("게시글이 저장되었습니다!");
    navigate("/community");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {

    }
  };

  return (
    <motion.div className="flex flex-col h-screen p-4 bg-gray-50">
      <div className="flex items-center border rounded-lg p-3 bg-white mb-4">
        <button
          className="px-3 py-1 border rounded-lg bg-gray-100 text-sm"
          onClick={() => navigate(-1)}
        >
          뒤로가기
        </button>
        <h2 className="flex-1 text-center font-bold text-lg">
          게시글/리뷰 작성
        </h2>
      </div>

      <div className="border rounded-lg bg-white p-3 mb-4">
        <input
          type="text"
          placeholder="제목을 입력하세요"
          className="w-full outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="flex-1 border rounded-lg bg-white p-3 mb-4">
        <textarea
          className="w-full h-full resize-none outline-none"
          placeholder="게시글/리뷰 작성 내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full"
        />
      </div>

      <div className="mt-4 flex gap-3">
        <input
          type="password"
          placeholder="비밀번호 입력란"
          className="flex-1 border rounded-lg p-2 bg-white outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={handleSubmit}
        >
          확인 버튼
        </button>
      </div>
    </motion.div>
  );
}
