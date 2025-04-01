import { generatePagination } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function Pagination({ page, totalPage, setPage }) {
  const [pageArr, setPageArr] = useState([]);

  useEffect(() => {
    // page, totalPage 변경시 마다 페이지번호 배열 생성하여 배열스테이트 업데이트
    const arr = generatePagination(page, totalPage);
    setPageArr(arr);
  }, [page, totalPage]);

  return (
    <div className="flex gap-x-[2px] justify-center mt-[40px]">
      {page !== 1 && (
        <button
          type="button"
          className="btn w-[36px] h-[30px] text-[13px] px-[2px] bg-[#eee]"
          onClick={() => setPage(page - 1)}
        >
          이전
        </button>
      )}
      {pageArr.map((item, i) => {
        if (item === '...') {
          return (
            <span
              key={i}
              className=" w-[36px] h-[30px] text-[13px] leading-[28px] px-[2px] text-center border border-[#666] bg-[#eee]"
            >
              ...
            </span>
          );
        } else {
          return (
            <button
              type="button"
              key={i}
              className={`btn w-[36px] h-[30px] text-[13px] px-[2px]  ${
                page === item ? 'text-white bg-[#666]' : 'bg-[#eee]'
              }`}
              onClick={() => setPage(item)}
            >
              {item}
            </button>
          );
        }
      })}
      {page !== totalPage && (
        <button
          type="button"
          className="btn w-[36px] h-[30px] text-[13px] px-[2px] bg-[#eee]"
          onClick={() => setPage(page + 1)}
        >
          다음
        </button>
      )}
    </div>
  );
}
