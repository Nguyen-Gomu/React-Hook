import React,{useState,useEffect} from 'react';
import queryString from 'query-string'
import PostLists from './components/PostLists';
import Pagination from './components/Pagination'
import PostFilterForm from './components/Search';
import Clock from './components/Clock';

function App() {
  // States
  const [postList, setPostList] = useState([]);
  const [pagination,setPagination] = useState({
    _page:1,
    _limit:10,
    _totalRows:1
  });

  const [filters,setFilters] = useState({
    _limit:10,
    _page:1,
 
  })

  useEffect(() =>{
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
  
        console.log({responseJSON})
        const {data,pagination} = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to fetch POST_LIST:",error.message)
      }
    }
    console.log("nguyen1")
    fetchPostList();
  },[filters]);


  function handlePageChange(newPage){
    console.log("new page: ",newPage)
    setFilters({
      ...filters,
      _page:newPage
    })
  }

  function handleFilterChange(newFilters){
    setFilters({
      ...filters,
      _gape:1,
      title_like:newFilters.searchTerm,
    })
  }

  const [showClock,setShowClock] = useState(true);



  return (
    <div className="App">

     <h1>cd easy-frontend</h1>
     {/* <PostLists posts={postList}/>
     <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
     />
     <PostFilterForm onSubmit={handleFilterChange}/> */}
     <button onClick={() => setShowClock(false)}>Hide Clock</button>
     {showClock && <Clock/>}
    </div>
  );
}

export default App;
