import React, { Component } from "react";
import "./index.css";
import Button from "@restart/ui/esm/Button";

class Dialog extends Component {
  render() {
    let dialog = (
      <div className="dialogStyles">
        <Button
          className="dialogCloseButtonStyles"
          onClick={this.props.onClose}
        >
          x
        </Button>

        <div>{this.props.children}</div>
      </div>
    );

    if (!this.props.isOpen) {
      dialog = null;
    }
    return <div>{dialog}</div>;
  }
}

export default Dialog;
