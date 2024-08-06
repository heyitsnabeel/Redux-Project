import { useSelector } from "react-redux";
import Container from "./components/Container";
import Controls from "./components/Controls";
import Display from "./components/Display";
import Header from "./components/Header";
import ToggleCom from "./components/ToggleCom";


function App() {

  const privacy = useSelector((store)=>store.privacy)

  return (
    <>
      <center className="col-md-6">
        <Container>
          <Header/>
          {privacy ?<ToggleCom/>:<Display/>}
          <Controls/>
        </Container>
      </center>
    </>
  );
}

export default App;
