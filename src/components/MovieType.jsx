// components / MovieType.jsx

const initTypes = ['All', 'Movie', 'Series', 'Episode'];

export default function MovieType({ type, setType, setPage }) {
  function handleType(e) {
    // All 타입이 없으므로 초기값을 ''(빈칸)으로 타입변경
    if (e.target.innerText === 'All') {
      setType('');
    } else {
      // 버튼 내부 글자로 타입변경
      setType(e.target.innerText);
    }
    // 타입이 변경 될때마다 1페이지로 초기화
    setPage(1);
  }
  console.log(type);

  return (
    <div>
      {initTypes.map((item) => (
        <button
          type="button"
          key={item}
          // item이 All인 경우 ''으로 변경하여 type비교
          // 동일 css 의 우선순위: 1.조건 아닌 경우 2.조건안에 있을 경우
          className={`btn leading-[28px] text-[14px] 
            border-r-0 last:border-r last:border-r-[#666] ${
              type === (item === 'All' ? '' : item)
                ? 'text-white bg-[#666]'
                : ' bg-[#eee]'
            }`}
          onClick={handleType}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
