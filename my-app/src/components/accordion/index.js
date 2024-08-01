//single selected
//multiple selected

import { useState } from "react";
import "./style.css";
export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMuitlpleSelect, setenableMuitlpleSelect] = useState(false);
  const [multiple, setmultiple] = useState([]);

  function handleselectedID(selectedID) {
    setSelected(selectedID === selected ? null : selectedID);
  }

  function handleMultipleSelection(selectedID) {
    const ArrMultiple = [...multiple];

    const findIndex = ArrMultiple.indexOf(selectedID);

    console.log(findIndex);
    findIndex === -1
      ? ArrMultiple.push(selectedID)
      : ArrMultiple.splice(findIndex, 1);

    setmultiple(ArrMultiple);
  }

  console.log(multiple);

  const data = [
    {
      id: 1,
      question: "what is react",
      answer: "React is js library",
    },
    {
      id: 2,
      question: "what is Angular",
      answer: "React is js library",
    },
    {
      id: 3,
      question: "what is JS",
      answer: "React is js library",
    },
    {
      id: 4,
      question: "what is library",
      answer: "React is js library",
    },
  ];

  return (
    <>
      <div className="button">
        <button
          className={`${
            enableMuitlpleSelect === false ? "Buttonenable" : "Buttondisable"
          }`}
          onClick={() => setenableMuitlpleSelect(!enableMuitlpleSelect)}
        >
          Enable Muiltple selected
        </button>
      </div>
      <div className="wrapper">
        <div className="accordion">
          {data && data.length > 0 ? (
            data.map((data) => (
              <div key={data.id} className="item">
                <div
                  className="title"
                  onClick={() =>
                    enableMuitlpleSelect
                      ? handleMultipleSelection(data.id)
                      : handleselectedID(data.id)
                  }
                >
                  {" "}
                  <h4>{data.question}</h4>
                  <span>+</span>
                </div>
                {selected === data.id || multiple.indexOf(data.id) !== -1 ? (
                  <div className="answer">
                    <h4>{data.answer}</h4>
                  </div>
                ) : null}
              </div>
            ))
          ) : (
            <div>
              <p>Data not found</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
