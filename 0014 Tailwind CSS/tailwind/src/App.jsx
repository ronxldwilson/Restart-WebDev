import './App.css'
import { VideoCard } from './components/VideoCard'

function App() {

  return (
    <>

    <div className='grid m-10 md:grid-cols-2 xl:grid-cols-4'>
      <VideoCard></VideoCard>
      <VideoCard></VideoCard>
      <VideoCard></VideoCard>
      <VideoCard></VideoCard>
      <VideoCard></VideoCard>
      <VideoCard></VideoCard>
      <VideoCard></VideoCard>
    </div>
    </>
  )
}

export default App
