import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Container from './Container';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { fetchQuestions } from './redux/asyncThunks';

store.dispatch(fetchQuestions());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Container />
    </Provider>
  </StrictMode>
);
