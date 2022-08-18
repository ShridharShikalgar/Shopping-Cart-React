//Components
import Header from './Component/Header'
import Home from './MainComponents/Home';
import { Box } from '@mui/material'
function App() {
  return (
    <div className="App">
      <Header/>
      <Box style={{marginTop: 54}}>
        <Home/>
      </Box>
    </div>
  );
}

export default App;
