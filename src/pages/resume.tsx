import React from "react";
import { languages, tools } from "../../data";
import Bar from "./components/Bar";

const resume = () => {
  return (
    <div className="px-6 py-2">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              computer science engineering
            </h5>
            <p className="font-semibold">
              Sal institute of Technology (2023-on)
            </p>
            <p className="my-3">
              currently i am pursuing B.tech in computer science and engineering
              from Sal institute of Technology & engineering research,
              Ahmedabad.
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience as Intern</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Web development</h5>
            <p className="font-semibold">
              Codage-Habitation(6/24-to-12/24) (6-month)
            </p>
            <p className="my-3">
              i have experience in team work, i was part of many live projects,
              and also i know diffrent languges.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages</h5>
          <div className="my-2">
            {languages.map((Language) => (
              <Bar data={Language} key={Language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Software</h5>
          <div className="my-2">
            {tools.map((tools) => (
              <Bar data={tools} key={tools.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
