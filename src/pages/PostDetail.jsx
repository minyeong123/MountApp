import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BackButton from "../layouts/BackButton";

export default function PostDetail() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const posts = [
    { id: 1, title: "북한산 등산 후기", preview: "정상에서 본 서울 야경이 정말 멋졌어요! 산을 오르면서 만난 다양한 풍경과 꽃, 바람, 그리고 친구들과의 즐거운 추억까지 모두 담은 등산 후기입니다. 사진과 함께 자세히 소개할게요!"},
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
  

  const post = posts.find(p => p.id === parseInt(postId));
  const postReviews = reviews.filter(r => r.postId === parseInt(postId));

  if (!post) return <div>게시글을 찾을 수 없습니다.</div>;

  return (
      <motion.section className="flex flex-col h-screen p-3">
        <motion.header className="relative flex items-center justify-center py-2">
             <BackButton />
             <h2 className="text-2xl font-bold">{post.title}</h2>
        </motion.header>
        <motion.div className="flex flex-col items-center p-4">
            <img 
              src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn.ppomppu.co.kr%2Fzboard%2Fdata3%2F2022%2F0423%2F20220423235944_Rl0AyedsfQ.jpg&type=sc960_832" 
              alt="게시글 이미지" 
              className="w-50 h-50 rounded-lg object-cover" 
            />
           <p className="text-gray-700 py-5">{post.preview}</p>
        </motion.div>
        <motion.div className="flex flex-col space-y-4 p-3">
          <h3 className="text-xl font-semibold">댓글</h3>
          <div className="flex items-start space-x-3 bg-gray-100 p-3 rounded-lg">
            <img
              src="" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <span className="font-semibold">user</span>
              <p className="text-gray-700">와 정말 이뻐요</p>
            </div>
          </div>
        </motion.div>
    </motion.section>
  );
}
