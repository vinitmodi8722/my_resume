/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import React, { FunctionComponent } from "react";
import { Category } from "../../../type";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handlerfiltercategory: Function;
  active: string;
}> = ({ value, handlerfiltercategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-green-400";
  if (active === value) className += " text-green-400";
  return (
    <li className={className} onClick={() => handlerfiltercategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerfiltercategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="nextjs" {...props} />
      <NavItem value="node" {...props} />
      <NavItem value="express" {...props} />
      <NavItem value="django" {...props} />
      <NavItem value="mongo" {...props} />
      <NavItem value="javascript" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
