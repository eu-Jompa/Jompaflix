
import './App.css';
import Footer from './componentes/Footer';
import Header from "./componentes/Header";
import Banner from "./componentes/Banner";
import Container from './componentes/Container';
import Card from './componentes/Card';
import videos from './json/arquivo.json'
import Category from './componentes/Category';

const categories = [
  "Astronomia",
  "Anime"
]

function filterCategory(id){
  return videos.filter((video)=> video.category === categories[id])
}
function App() {
  return (
    <>
    <Header />
    <Banner image="home"/>
    <Container>
      {/* <h1>Geografia  </h1>
      <section className="cards">
        {
          videos.map((video)=><Card id={video.id} key={video.id}/>
        )}
      </section>
       */}
      <Category category={categories[0]}>
        {filterCategory(0).map((video)=><Card id={video.id} key={video.id}/>)}
      </Category>
      <Category category={categories[1]}>
        {filterCategory(1).map((video)=><Card id={video.id} key={video.id}/>)}
      </Category>
    </Container>
      

      <Footer />
    </>
  );
}

export default App;
