import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import BackButton from "../layouts/BackButton";

export default function DetailPage({ dataType }) {
  const { id } = useParams();
  const commentRef = useRef(null);

  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);

  const onLikeClick = () => {
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  const onCommentClick = () => {
    commentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const posts = [
    {
      id: 1,
      title: "북한산 등산 후기",
      comment:
        "정상에서 본 서울 야경이 정말 멋졌어요! 산을 오르면서 만난 다양한 풍경과 꽃, 바람, 그리고 친구들과의 즐거운 추억까지 모두 담은 등산 후기입니다. 사진과 함께 자세히 소개할게요!",
      image:
        "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn.ppomppu.co.kr%2Fzboard%2Fdata3%2F2022%2F0423%2F20220423235944_Rl0AyedsfQ.jpg&type=sc960_832",
      date: "2025-02-01",
    },
    { id: 2, title: "등산화 추천 부탁드려요", comment: "초보인데 발 안 아픈 신발 있을까요?", date: "2025-01-11" },
    { id: 3, title: "지리산 종주 준비 중입니다", comment: "코스와 숙박 팁 공유해요!", date: "2025-01-14" },
    { id: 4, title: "비 오는 날 등산 꿀팁", comment: "방수 자켓은 필수! 그리고 여분 양말 챙기세요.", date: "2025-01-20" },
    { id: 5, title: "한라산 겨울 등산 후기", comment: "눈 덮인 백록담 너무 아름다웠어요!", date: "2025-01-22" },
    { id: 6, title: "속리산 단풍 산행", comment: "가을 단풍이 정말 장관이에요.", date: "2025-01-28" },
  ];

  const reviews = [
    {
      id: 101,
      title: "설악산",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      comment: "경치 최고예요. 단풍철에 꼭 가보세요! 너무 좋아요",
      image:
        "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn.ppomppu.co.kr%2Fzboard%2Fdata3%2F2022%2F0423%2F20220423235944_Rl0AyedsfQ.jpg&type=sc960_832",
      date: "2024-12-12",
    },
    { id: 102, title: "블랙야크 등산화", rating: "⭐️⭐️⭐️⭐️", comment: "착용감 좋고 방수도 괜찮아요.", date: "2024-12-15" },
    { id: 103, title: "도봉산", rating: "⭐️⭐️⭐️", comment: "초보자도 오르기 쉬워요. 다만 주말엔 붐빕니다.", date: "2024-12-18" },
    { id: 104, title: "네파 바람막이", rating: "⭐️⭐️⭐️⭐️⭐️", comment: "가볍고 통풍이 잘 돼요. 여름 산행에 딱!", date: "2024-12-21" },
    { id: 105, title: "북한산 국립공원", rating: "⭐️⭐️⭐️⭐️⭐️", comment: "서울 도심 근처인데 자연 그대로예요!", date: "2024-12-23" },
    { id: 106, title: "고어텍스 재킷", rating: "⭐️⭐️⭐️⭐️", comment: "비 오는 날에도 쾌적하게 등산 가능해요.", date: "2024-12-26" },
  ];


  let item;
  if (dataType === "post") {
    item = posts.find((p) => p.id === parseInt(id));
    if (!item) return <div>게시글을 찾을 수 없습니다.</div>;
  } else {
    item = reviews.find((r) => r.id === parseInt(id));
    if (!item) return <div>리뷰를 찾을 수 없습니다.</div>;
  }

  return (
    <motion.section className="flex flex-col p-3 pb-10">
      <motion.header className="relative flex items-center justify-center py-2 border-b">
        <BackButton />
        <h2 className="text-xl font-bold">{item.title}</h2>
      </motion.header>

      <div className="flex items-center mt-4 px-1">
        <div className="w-11 h-11 rounded-full bg-gray-300"></div>
        <div className="ml-3">
          <p className="font-semibold">user</p>
          <p className="text-xs text-gray-500">{item.date}</p>
        </div>
      </div>

      {/* 리뷰라면 별점 */}
      {dataType === "review" && (
        <div className="flex justify-end px-2 mt-2 text-xl">{item.rating}</div>
      )}

      {/* ---------- 이미지 ---------- */}
      {item.image && (
        <div className="mt-4">
          <img
            src={item.image}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
      )}

      {/* ---------- 버튼 (좋아요) ---------- */}
      <div className="flex items-center space-x-5 mt-3 px-1 text-2xl">
        <button onClick={onLikeClick}>
          {liked ? "❤️" : "🤍"}
        </button>
      </div>

      {/* 좋아요 수 */}
      <p className="px-1 mt-1 text-sm font-semibold">
        좋아요 {likeCount}개
      </p>

      {/* ---------- 내용 ---------- */}
      <p className="px-1 mt-4 text-gray-800 leading-relaxed whitespace-pre-line">
        {item.comment}
      </p>

      {/* ---------- 댓글 ---------- */}
      <div ref={commentRef} className="mt-8 px-1">
        <h3 className="text-lg font-semibold mb-4">댓글</h3>
          <div className="flex items-start bg-white shadow-md p-5 rounded-xl mb-3 hover:bg-gray-50 transition duration-200 space-x-4">
            {/* 프로필 */}
            <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0"></div>
            {/* 댓글 내용 */}
            <div className="flex-1">
              <p className="font-semibold mb-1">user</p>
              <p className="text-gray-700 leading-relaxed">
                와 정말 이뻐요
              </p>
            </div>
          </div>
          <div className="flex items-start bg-white shadow-md p-5 rounded-xl mb-3 hover:bg-gray-50 transition duration-200 space-x-4">
            {/* 프로필 */}
            <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0"></div>
            {/* 댓글 내용 */}
            <div className="flex-1">
              <p className="font-semibold mb-1">user</p>
              <p className="text-gray-700 leading-relaxed">
                와 정말 이뻐요
              </p>
            </div>
          </div>
          <div className="flex items-start bg-white shadow-md p-5 rounded-xl mb-3 hover:bg-gray-50 transition duration-200 space-x-4">
            {/* 프로필 */}
            <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0"></div>
            {/* 댓글 내용 */}
            <div className="flex-1">
              <p className="font-semibold mb-1">user</p>
              <p className="text-gray-700 leading-relaxed">
                와 정말 이뻐요
              </p>
            </div>
          </div>
        </div>
      
      
    </motion.section>
  );
}
