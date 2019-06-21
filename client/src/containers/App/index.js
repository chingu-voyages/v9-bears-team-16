import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import Themes from '../themes'
import Colors from '../colors'
import Fonts from '../fonts'
import Header from '../../components/header'
import Home from '../home'
export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/themes" component={Themes} />
        <Route path="/colors" component={Colors} />
        <Route path="/fonts" component={Fonts} />
        {/* <Route path="/post/:id" component={ DetailPage } /> */}
      </Switch>
    </>
  )
}
