import './App.css';
import AuthUser from './components/AuthUser';
import Auth from "./navbar/Auth";
import Guest from './navbar/guest';

function App() {
  const {getToken} = AuthUser();
      if (!getToken()){
          return <Guest/>
      }
    return (
      <Auth/>
    );
}

export default App;
// import './App.css';
// import AuthUser from "./components/AuthUser";
// import Guest from "./navbar/guest";
// import Auth from "./navbar/auth";
// import Test from './Test';

// function App() {
//     const {getToken} = AuthUser();
//     if (!getToken()){
//         return <Guest/>
//     }
//   return (
//     <Auth/>
//   );
// }

// export default App;
