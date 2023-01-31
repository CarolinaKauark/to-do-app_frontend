import ToDoProvider from './context/ToDoProvider';
import Home from './pages/Home';

function App() {
  return (
    <ToDoProvider>
      <Home />
    </ToDoProvider>
  );
}

export default App;
