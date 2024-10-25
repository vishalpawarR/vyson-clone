import { useState } from "react"
import { faqs } from "../../data/faq"
import arrowImg from "../../assets/arrow.svg"

function FAQ() {
  const [clickIndex, setClickInxex] = useState(null)

  function handleClick(id) {
    setClickInxex(clickIndex === id ? null : id)
  }
  return (
    <>
      <div>
        {faqs.map((faq) => {
          return (
            <div
              key={faq.id}
              className="faq-items text-left my-4"
            >
              <div
                onClick={() => handleClick(faq.id)}
                className="flex justify-between cursor-pointer"
              >
                <h4>{faq.question}</h4>
                <div className="">
                  <img
                    className={`transform transition-transform duration-500 ${
                      clickIndex === faq.id ? "rotate-90" : "-rotate-90"
                    }`}
                    src={arrowImg}
                    width={25}
                  />
                </div>
              </div>
              {clickIndex === faq.id && (
                <p className="m-4 mt-2">{faq.answer}</p>
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default FAQ
