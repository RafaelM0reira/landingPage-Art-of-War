import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
  Stack,
} from "react-bootstrap";
import FirstScreen from "./components/FirstScreen";
import SecondScreen from "./components/SecondScreen";
import ThirdScreen from "./components/ThirdScreen";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
      <Footer />
    </>
  );
}

export default App;
