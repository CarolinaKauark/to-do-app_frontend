import { LocalizationProvider } from '@mui/x-date-pickers';
// import DateFnsAdapter from '@date-io/date-fns';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ToDoProvider from './context/ToDoProvider';
import Home from './pages/Home';

function App() {
  return (
    <LocalizationProvider dateAdapter={ AdapterDateFns }>
      <ToDoProvider>
        <Home />
      </ToDoProvider>

    </LocalizationProvider>

  );
}

export default App;
