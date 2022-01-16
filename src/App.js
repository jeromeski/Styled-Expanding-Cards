import Card from "./components/Card";
import ExpandingCards from "./components/ExpandingCards";
import data from "./data";
// import useAxios from "./hooks/useAxios";
import "./styles.css";

export default function App() {
  // const data = useAxios("https://picsum.photos/v2/list?page=3&limit=5");
  // console.log(data);
  const pictures = data();
  return (
    <div className="App">
      <h1>Expanding Cards</h1>
      <ExpandingCards
        cards={pictures}
        resourceName="card"
        itemComponent={Card}
      />
    </div>
  );
}
