import { Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import IncomesTable from './Tables/IncomesTable';
import ExpensesTable from './Tables/ExpensesTable';

function App() {

  return (
    <div className="container">
        <Navbar />
        <Routes>
          <Route path='/incomes' element={<IncomesTable />} />
          <Route path='/expenses' element={<ExpensesTable />} />
        </Routes>
    </div>

  );
}

export default App;
