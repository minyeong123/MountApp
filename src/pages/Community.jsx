import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Community() {
  const navigate = useNavigate();

  const posts = [
    { id: 1, title: "북한산 등산 후기", preview: "정상에서 본 서울 야경이 정말 멋졌어요!" },
    { id: 2, title: "등산화 추천 부탁드려요", preview: "초보인데 발 안 아픈 신발 있을까요?" },
    { id: 3, title: "지리산 종주 준비 중입니다", preview: "코스와 숙박 팁 공유해요!" },
    { id: 4, title: "비 오는 날 등산 꿀팁", preview: "방수 자켓은 필수! 그리고 여분 양말 챙기세요." },
    { id: 5, title: "한라산 겨울 등산 후기", preview: "눈 덮인 백록담 너무 아름다웠어요!" },
    { id: 6, title: "속리산 단풍 산행", preview: "가을 단풍이 정말 장관이에요." },
  ];

  const reviews = [
    { id: 1, postId: 1, name: "설악산", rating: "⭐️⭐️⭐️⭐️⭐️", comment: "경치 최고예요. 단풍철에 꼭 가보세요!" },
    { id: 2, postId: 1, name: "블랙야크 등산화", rating: "⭐️⭐️⭐️⭐️", comment: "착용감 좋고 방수도 괜찮아요." },
    { id: 3, postId: 2, name: "도봉산", rating: "⭐️⭐️⭐️", comment: "초보자도 오르기 쉬워요. 다만 주말엔 붐빕니다." },
    { id: 4, postId: 3, name: "네파 바람막이", rating: "⭐️⭐️⭐️⭐️⭐️", comment: "가볍고 통풍이 잘 돼요. 여름 산행에 딱!" },
    { id: 5, postId: 5, name: "북한산 국립공원", rating: "⭐️⭐️⭐️⭐️⭐️", comment: "서울 도심 근처인데 자연 그대로예요!" },
    { id: 6, postId: 4, name: "고어텍스 재킷", rating: "⭐️⭐️⭐️⭐️", comment: "비 오는 날에도 쾌적하게 등산 가능해요." },
  ];

  return (
    <motion.section className="flex flex-col h-screen">
      <motion.header className="flex flex-col items-center py-5">
        <h2 className="text-2xl font-bold">커뮤니티</h2>
      </motion.header>

      <motion.section className="flex-1 flex flex-col overflow-hidden space-y-6 p-5 gap-5">
        <motion.section className="overflow-x-auto">
          <h3 className="text-xl font-semibold mb-3">📢 게시글</h3>
          <motion.div className="flex gap-4 pb-3 overflow-x-auto">
            {posts.map((post) => (
              <motion.div
                key={post.id}
                className="flex-shrink-0 w-64 border rounded-2xl p-4 bg-white shadow-md"
                whileHover={{ scale: 1.02 }}
                onClick={() => navigate(`/community/post/${post.id}`)}
              >
                <div className="flex items-center mb-3">
                  <img className="w-10 h-10 rounded-full mr-3" />
                  <span>user</span>
               </div>
                <h4 className="font-bold">{post.title}</h4>
                <p className="text-gray-600">{post.preview}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section className="overflow-x-auto">
          <h3 className="text-xl font-semibold mb-3">⭐️ 리뷰</h3>
          <motion.div className="flex gap-4 pb-3 overflow-x-auto">
            {reviews.map((review) => (
              <motion.div
                key={review.id}
               className="flex-shrink-0 w-64 border rounded-2xl p-4 bg-white shadow-md"
                whileHover={{ scale: 1.02 }}
                onClick={() => navigate(`/community/post/${review.postId}`)}
              >
                 <div className="flex items-center mb-3">
                  <img className="w-10 h-10 rounded-full mr-3" />
                  <span>user</span>
               </div>
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold">{review.name}</h4>
                  <span>{review.rating}</span>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

      </motion.section>
    </motion.section>
  );
}
