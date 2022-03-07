import React, { useContext } from "react";
import { Header, Span } from "./Logo.styles";
import { PermissionsContext } from "../../context/PermissionsContext";
import usePermissions from "../../hooks/usePermissions";

const Logo = () => {
  // Components Sets the corresponding permissions on each mapped letter in the context and database
  const {
    onCreatePermission,
    onUpdatePermission,
    onDeletePermission,
    onReadPermission,
  } = useContext(PermissionsContext);

  const {
    createPermission,
    readPermission,
    updatePermission,
    deletePermission,
  } = usePermissions();
  const logo = ["C", "R", "U", "D"];

  //toggles 'active' class on clicked letter
  const toggle = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    if (e.target) {
      (e.target as HTMLSpanElement).classList.toggle("active");
      const ch = (e.target as HTMLSpanElement).innerText;

      switch (ch) {
        case "C":
          createPermission(!onCreatePermission);
          break;
        case "R":
          readPermission(!onReadPermission);
          break;
        case "U":
          updatePermission(!onUpdatePermission);
          break;
        case "D":
          deletePermission(!onDeletePermission);
          break;
      }
    }
  };

  return (
    <>
      <Header>
        {logo.map((ch: string, index: number) => {
          if (index === 0 && onCreatePermission)
            return (
              <Span
                key={index}
                animationDelay={0.5 + index / 10 + "s"}
                onClick={toggle}
                className="active"
              >
                {ch}
              </Span>
            );
          if (index === 1 && onReadPermission)
            return (
              <Span
                key={index}
                animationDelay={0.5 + index / 10 + "s"}
                onClick={toggle}
                className="active"
              >
                {ch}
              </Span>
            );
          if (index === 2 && onUpdatePermission)
            return (
              <Span
                key={index}
                animationDelay={0.5 + index / 10 + "s"}
                onClick={toggle}
                className="active"
              >
                {ch}
              </Span>
            );
          if (index === 3 && onDeletePermission)
            return (
              <Span
                key={index}
                animationDelay={0.5 + index / 10 + "s"}
                onClick={toggle}
                className="active"
              >
                {ch}
              </Span>
            );
          return (
            <Span
              key={index}
              animationDelay={0.5 + index / 10 + "s"}
              onClick={(e) => toggle(e)}
            >
              {ch}
            </Span>
          );
        })}
      </Header>
    </>
  );
};

export default Logo;
