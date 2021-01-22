import React, { useState, useEffect } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "mdbootstrap/css/mdb.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import NotFound from "./components/notFound";
import Country from "./components/country";
import CountryDescription from "./components/countryDescription";
import countryService from "./services/countryService";

function App() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    let init = async () => {
      const countries = await countryService.getAllCountries();
      setCountry(countries.data);
    };
    init();
  }, []);
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <main className="container px-lg-0">
        <Switch>
          <Route
            path="/country/:id"
            component={(props) => (
              <CountryDescription countries={country} {...props} />
            )}
          />
          <Route
            path="/country"
            exact
            component={(props) => <Country {...props} />}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/country" />
          <Redirect from="/" to="/not-found" />
        </Switch>
      </main>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
