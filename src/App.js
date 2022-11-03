import "./css/main.css";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";

import { motion } from "framer-motion";
function App() {
  return (
    <div className="App">
      <motion.h1 initial={{ x: "100%" }} animate={{ x: "calc(50vw - 50%)" }}>
        ToDo Application
      </motion.h1>
      <motion.div
        initial={{ y: 800 }}
        animate={{ y: 2 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Todos />
        <DisplayTodos />
      </motion.div>
    </div>
  );
}

export default App;
