import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <Link to="/client/add" className="btn btn-block btn-success">
      <i className="fas fa-plus" /> New
    </Link>
  );
}
