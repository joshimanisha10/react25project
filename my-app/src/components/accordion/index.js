//single selected
//multiple selected

import { useState } from "react";
import "./style.css";
export default function Accordion() {
  const [selected, setSelected] = useState(null);

  function handleselectedID(selectedID) {
    console.log(selected, selectedID);
    setSelected(selectedID === selected ? null : selectedID);
  }

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
      <div className="wrapper">
        <div className="accordion">
          {data && data.length > 0 ? (
            data.map((data) => (
              <div key={data.id} className="item">
                <div
                  className="title"
                  onClick={() => handleselectedID(data.id)}
                >
                  {" "}
                  <h4>{data.question}</h4>
                  <span>+</span>
                </div>
                {selected === data.id ? (
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
