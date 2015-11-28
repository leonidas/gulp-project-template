import {getCommits, getRepo} from './services/github';
import {render} from './components/repository';

if(module.hot) {
  // Accept loading this module again when a dependency updates
  module.hot.accept();
}

Promise.all([getRepo(), getCommits()])
.then(([repository, commits]) => {
  document.body.innerHTML = render(repository, commits);
});

