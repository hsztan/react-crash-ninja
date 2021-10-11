import BlogList from './BlogList'
import Spinner from './components/Spinner'
import useFetch from './useFetch'

const Home = () => {
  const { data, isPending, error } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <Spinner />}
      {data && <BlogList blogs={data} title="All Blogs" />}
    </div>
  )
}

export default Home
