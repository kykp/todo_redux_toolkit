import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Todo } from "./components/Todo";

function App() {
  return (
    <>
      <Header />
      <main>
        <Todo />
      </main>
      <Footer />
    </>
  );
}

export default App;
