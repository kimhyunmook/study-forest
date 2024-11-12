import { Link } from "react-router-dom";
import "../css/Layout.css";

export default function Layout({ children, paddingBottom }) {
  return (
    <div id="layout" style={{ paddingBottom }}>
      {children}
    </div>
  );
}

export function Button({
  children,
  className = "",
  to = "",
  onClick,
  width = "",
  height = "",
}) {
  const btnAtt = {
    style: {
      maxWidth: width,
      maxHeight: height,
    },
  };
  const linkAtt = {
    className: !!className ? `jejudo ${className}` : "jejudo",
    to,
    onClick,
  };
  return (
    <button className="commonBtn" {...btnAtt}>
      <Link {...linkAtt}>{children}</Link>
    </button>
  );
}

export function WhiteContainer({
  className = "",
  children,
  title = "",
  marginBottom = "",
  titleMargin = "",
  minHeight = "auto",
}) {
  return (
    <div
      className={`whiteContainer ${className}`}
      style={{ marginBottom, minHeight }}
    >
      <h2 className="title" style={{ marginBottom: titleMargin }}>
        {title}
      </h2>
      {children}
    </div>
  );
}
