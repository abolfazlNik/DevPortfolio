import React from "react"

const ListDetails = ({ content }: { content: string[] }) => (
  <div className="space-y-4">
    <h3 className="sm:text-3xl text-2xl">{content[0]}</h3>
    <ul className="sm:text-2xl text-xl font-thin">
      {content[1].split("\n").map((line, index) => (
        <li className="leading-10 list-disc sm:ms-6 ms-4" key={index}>
          {line}
          <br />
        </li>
      ))}
    </ul>
  </div>
)

export default ListDetails
