import { Form } from './Components/Form';
import { ListTodo } from './Components/ListTodo';
import { Todo } from './Components/Todo';

function App() {
  return (
    <div className="font-lato p-4 md:w-[50vw] md:mx-auto">
      <div className="text-center text-3xl font-bold mb-8">#todo</div>
      <Todo/>
      <Form/>
      <ListTodo/>
    </div>
  );
}

export default App;
