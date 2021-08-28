import './App.css';
import { RepoCard, Input, SearchButton, RepoList } from './layouts';

function App() {
  return (
    <div>
      <RepoCard username='kts-school-frontend' />
      <RepoCard username='kts-school-frontendkts-school-frontendkts-school-frontendkts-school-frontend' />
      <Input />
      <Input disabled />
      <SearchButton />
      <SearchButton disabled />
      <RepoList />
    </div>
  );
}

export default App;
