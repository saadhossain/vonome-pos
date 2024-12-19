import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import DataProvider from './context/DataContext';
import { routers } from './routers/routers';

function App() {

  return (
    <DataProvider>
      <RouterProvider router={routers}></RouterProvider>
      <Toaster />
    </DataProvider>
  );
}

export default App;
