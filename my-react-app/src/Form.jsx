function Form({ answer, submit, click, status, error }) {
  return (
    <div>
      <h1>City quzz</h1>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={submit}>
        <input
          type="text"
          value={answer}
          onChange={click}
          disabled={status === "submitting"}
        />
        <br />
        <button disabled={answer.length === 0 || status === "submitting"}>
          {" "}
          Submit
        </button>
        {error && <p className="Error">{error}</p>}
      </form>
    </div>
  );
}

export default Form;
