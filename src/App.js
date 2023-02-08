import "./App.css";
import Row from "./components/Row";
import requests from "./Request";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOrignals}
        isLargeROw
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ROMANTIC MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="COMDRDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
