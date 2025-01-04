import { useState } from "react";
import Form from "./Form";

function App() {
  const [answer, setAnswer] = useState("");

  const [error, seterror] = useState("");
  const [status, setstatus] = useState("typing");

  if (answer === "Jeevan") {
    return <h1>That is correct </h1>;
  }

  async function handleClick(e) {
    e.preventDefault();
    setstatus("submitting");
    try {
      await submitForm(answer);
      setstatus("success");
    } catch (error) {
      console.log(error);
      setstatus("typing");
      seterror(error.message);
    }
  }
  const handleTextAreaChange = (e) => {
    setAnswer(e.target.value);
  };

  const submitForm = () => {
    const successError = answer !== "Jeevan";

    return new Promise((res, rej) => {
      if (successError) {
        rej(new Error("Not a correct answer"));
      } else {
        res();
      }
    });
  };

  return (
    <>
      <Form
        answer={answer}
        error={error}
        status={status}
        click={handleTextAreaChange}
        submit={handleClick}
      />
    </>
  );
}

export default App;
