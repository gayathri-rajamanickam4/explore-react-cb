import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NewPost from './components/new-post';
import Posts from './components/posts';
import client from './lib/client';
// import Folder from './components/folder';
// import folderDetails from './data/folder-details';

function App() {
  return (
    <div className='App'>
      {/* <Folder folderDetails={folderDetails}></Folder> */}
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Posts />
            </Route>
            <Route path='/new'>
              <NewPost />
            </Route>
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
