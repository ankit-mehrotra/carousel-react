import Carousel from "./carousel/Carousel"

function App() {
  const images = [
    'https://picsum.photos/id/7/367/267',
    'https://picsum.photos/id/0/367/267',
    'https://picsum.photos/id/10/367/267',
    'https://picsum.photos/id/20/367/267',
    'https://picsum.photos/id/16/367/267'
  ]

  return (
    <div className="container">
      <Carousel images={images} controls indicators />
    </div>
  )
}

export default App
