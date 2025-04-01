//App.jsx
import MovieList from '@/components/MovieList';
import MovieSearch from '@/components/MovieSearch';
import MovieType from '@/components/MovieType';
import Pagination from '@/components/Pagination';
import { useEffect, useState } from 'react';

// ?파라메터 = 값$파라메터 = 값
// 쿼리스트링을 통해 서버로 테이터 전송, get방식으로 데이터 요청 시 사용
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=ae1c830e';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('bbc');
  const [type, setType] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    async function searchMovies() {
      try {
        // throw new Error('에러 테스트');
        // 비동기 fetch로 응답을 json으로 받음
        const response = await fetch(
          `${API_URL}&s=${title}&type=${type}&page=${page}`
        );
        // json => js객체로 변환
        const data = await response.json();
        // 데이터 내림차순으로 정렬
        console.log(data.Search);
        // ? : 검색결과과 없을 경우 data.Search가 undefiend이므로 오류방지
        const sortData = data.Search?.sort((a, b) =>
          a.Year > b.Year ? -1 : 1
        );
        setMovies(sortData);
        setTotalPage(Math.ceil(data.totalResults / 10));
      } catch (err) {
        console.error('데이터전송오류: ', err);
      }
    }
    searchMovies();
  }, [title, type, page]);

  return (
    <div className="p-[20px]">
      <h2 className="text-[40px] text-gray-600">MovieLand</h2>
      <MovieSearch setTitle={setTitle} setType={setType} />
      <MovieType type={type} setType={setType} setPage={setPage} />
      <MovieList movies={movies} />
      {/* 데이터 있을때만 페이지네이션 나오게 하기 */}
      {movies && (
        <Pagination page={page} totalPage={totalPage} setPage={setPage} />
      )}
    </div>
  );
}
