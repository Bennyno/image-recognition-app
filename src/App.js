import { useState } from "react";
import { Container, Stack, Navbar, Nav } from "react-bootstrap";
import { MdOutlineImageSearch } from "react-icons/md"
import InputImage from "./inputImage";
import Output from "./Output";

function App() {
  const [outputs, setOutputs] = useState([])
  const [imageToPredict, setImageToPredict] = useState("")

  return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand style={{display: 'flex', alignItem: 'center'}}>
            <MdOutlineImageSearch style={{marginLeft: '12px', marginRight: '8px'}}/>
            Image Recogntion App
          </Navbar.Brand>
        </Navbar>
      <Container>
        <div className="mt-3"/>
        <Stack gap={2}>
        <InputImage setOutputs={setOutputs} 
        setImageToPredict={setImageToPredict}/>
        <Output outputs={outputs} imageToPredict={imageToPredict}/>
      </Stack>
      </Container>
      </div>
  );
}

export default App;
