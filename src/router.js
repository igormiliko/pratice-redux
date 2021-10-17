import React from "react";
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/index'
import Catalog from './pages/Catalog/index'
import Cart from './pages/Cart/index'

export default function routes() {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/catalog" exact component={Catalog} />
            <Route path="/cart" exact component={Cart} />
        </Switch>
    )
}