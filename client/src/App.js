import { Router } from '@reach/router';
import AllPets from './components/AllPets';
import OnePet from './components/OnePet';
import CreatePet from './components/CreatePet';
import EditPet from './components/EditPet';

function App() {
  return (
    <div className="App container h-100 col-xs-1">
      <div><h1>Pet Shelter</h1></div>
      <div>
        <Router>
          <AllPets path="/"></AllPets>
          <CreatePet path="/pets/new"></CreatePet>
          <OnePet path="/pets/:petID"></OnePet>
          <EditPet path="/pets/:petID/edit/"></EditPet>
        </Router>
      </div>
    </div>
  );
}

export default App;
