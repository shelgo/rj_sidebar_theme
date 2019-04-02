import GAListener from 'components/GAListener';
import { LayoutRoute, MainLayout } from 'components/Layout';
import CardPage from 'pages/CardPage';
// pages
import DashboardPage from 'pages/DashboardPage';
import TablePage from 'pages/TablePage';
import TypographyPage from 'pages/TypographyPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import './styles/reduction.scss';

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
            
            <LayoutRoute
              exact
              path="/"
              layout={MainLayout}
              component={DashboardPage}
            />
            
            <LayoutRoute
              exact
              path="/cards"
              layout={MainLayout}
              component={CardPage}
            />

            <LayoutRoute
              exact
              path="/typography"
              layout={MainLayout}
              component={TypographyPage}
            />

            <LayoutRoute
              exact
              path="/tables"
              layout={MainLayout}
              component={TablePage}
            />
            
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
