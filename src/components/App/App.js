import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

// import Dashboard from "../Dashboard/Dashboard";
// import Login from "../Login/Login";
import useToken from "./useToken";
import Header from "../Admin/header/Header";
import Sidebar from "../Admin/sidebar/Sidebar";
import Home from "../Admin/home/Home";
import Footer from "../Admin/Footer/Footer";

const Layout = ({ children }) => {
  // const [sidebar, toggleSidebar] = useState(false);
  // const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <>
      <Header />
      <div className="app_container">
        <Sidebar />
        <Container fluid className="app_main">
          {children}
        </Container>
        <Footer />
      </div>
    </>
  );
};

function App() {
  // const { token, setToken } = useToken();
  // console.log(token);
  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  return (
    <div className="background">
      <Switch>
        <Route path="/" exact>
          <Layout>
            <Home />
          </Layout>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
