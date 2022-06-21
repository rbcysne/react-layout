import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "components/Navbar";
import Home from "pages/Home";
import Catalog from "pages/Catalog";

const Routes = () =>  {

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" component={ Home } exact />

                <Route path="/catalog" component={ Catalog } />

            </Switch>


        </Router>
    );
}

export default Routes;