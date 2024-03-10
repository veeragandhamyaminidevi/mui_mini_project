//import logo from './logo.svg';

// import Checkout from './Checkout';
// import Test from './Test';
import Navbar from './component/Navbar'

const linksArray=["Products","services","overview","contact us"]
function App() {
  return (
    <div >
   
      <Navbar links={linksArray}/>
    </div>
  );
}
export default App;
