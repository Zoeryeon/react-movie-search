// components / MovieSearch.jsx

import { useRef } from 'react';

export default function MovieSearch({ setTitle, setType, setPage }) {
  const inputRef = useRef(null);

  function handleSerch(e) {
    e.preventDefault();

    // 검색필드에 값이 있을때만 검색되도록
    if (inputRef.current.value.trim()) {
      setType('');
      setPage(1);
      // 일회성 value는 state 사용 안함
      setTitle(inputRef.current.value);
    }
  }

  return (
    <div className="my-[20px] border border-[#ccc]">
      <form onSubmit={handleSerch} className="flex">
        <input
          ref={inputRef}
          type="search"
          placeholder="제목검색"
          title="제목검색"
          className="border-0 w-full"
        />
        <button
          type="submit"
          className="w-[60px] bg-[#eee] text-[14px] shrink-0 text-gray-600"
        >
          검색
        </button>
      </form>
    </div>
  );
}
