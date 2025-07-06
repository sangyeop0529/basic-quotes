import { useState } from "react";
import { quotes } from "./quotes";

function App() {
  // 현재 명언 상태 (처음에는 첫 번째 명언)
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  // 랜덤 명언 생성 함수
  const generateRandomQuote = () => {
    // 0부터 배열 길이-1까지의 랜덤 숫자 생성
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          ✨ 오늘의 명언
        </h1>

        {/* 명언 표시 */}
        <div className="mb-8">
          <div className="text-gray-600 text-4xl mb-4">"</div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4 italic">
            {currentQuote.text}
          </p>
          <div className="text-gray-600 text-4xl mb-4">"</div>
          <p className="text-right text-gray-500 font-medium">
            — {currentQuote.author}
          </p>
        </div>

        {/* 새 명언 버튼 */}
        <button
          onClick={generateRandomQuote}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95">
          🎲 새로운 명언
        </button>

        {/* 추가 정보 */}
        <div className="mt-6 p-4 bg-purple-50 rounded-lg">
          <p className="text-sm text-purple-600">
            💡 총 {quotes.length}개의 명언이 준비되어 있습니다!
          </p>
        </div>

        {/* 작은 설명 */}
        <div className="mt-4 text-gray-400 text-xs">
          버튼을 클릭해서 새로운 영감을 얻어보세요! 🌟
        </div>
      </div>
    </div>
  );
}

export default App;
