import { useState } from "react";

const Question = ({ id, question }) => {
  const [open, setOpen] = useState(false);
  function handleDescription() {
    return open == false ? setOpen(true) : setOpen(false);
  }

  return (
    <>
      <div key={id} className="question">
        <p className="title">{question.title}</p>
        <button onClick={handleDescription}>{!open ? "+" : "-"}</button>
        {open && <p className="description">{question.info}</p>}
      </div>
    </>
  );
};

export default Question;
