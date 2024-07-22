import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import NavBar from "../src/components/NavBar";
import DailyBalance from "../src/components/DailyBalance";
import DailyTransactionTable from "../src/components/DailyTransactionsTable";

export function App() {
  const [formState, setFormState] = useState({});

  function handleChange(evt) {
    setFormState((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));
    console.log(formState);
  }

  function handleSubmit(field) {
    if (formState[field]) {
      //submit to backend
      const dataSubmitted = { [field]: formState[field] };
      console.log("datasubmit", dataSubmitted);
      setFormState("");
      const inputs = document.querySelectorAll("input");
      inputs.forEach((input) => {
        input.value = "";
      });
    }
    console.log("formstate", formState);
  }
  return (
    <main className="flex min-h-screen flex-col p-8 border-black">
      <NavBar />
      <div className="flex flex-col space-y-8 mt-4">
        <DailyBalance />
        <DailyTransactionTable />
      </div>
      <div className="flex flex-col space-y-4 mt-8">
        <div className="flex w-full max-w-lg items-center space-x-2 flex-row">
          <Input
            name="food"
            type="number"
            placeholder="Food"
            onChange={handleChange}
          />
          <Button size="sm" type="submit" onClick={() => handleSubmit('food')}>
            Add
          </Button>
        </div>
        <div className="flex w-full max-w-lg items-center space-x-2 flex-row">
          <Input
            name="others"
            type="number"
            placeholder="Others"
            onChange={handleChange}
          />
          <Button size="sm" type="submit" onClick={() => handleSubmit('others')}>
            Add
          </Button>
        </div>
      </div>
    </main>
  );
}

export default App
