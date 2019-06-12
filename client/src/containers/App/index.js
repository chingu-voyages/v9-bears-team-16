import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Themes from '../themes'
import Colors from '../colors'
import Fonts from '../fonts'
import Header from '../../components/header'
import Home from '../home'
import fetchColors from '../../utilities/fetch-colors'
export default function App() {
  //example fetch color api call with suggestion for what color to use for primary light
  console.log(fetchColors({ primaryLight: [236, 233, 222] }))
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
