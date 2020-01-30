import React from 'react';
import CKEditor from "react-ckeditor-component";

const Editor = props => {
  return (
    <CKEditor
      activeClass="p10"
      content={props.value}
      events={{
        // "blur": this.onBlur,
        // "afterPaste": this.afterPaste,
        "change": e => props.onChange(e)
      }}
    />
  )
}

export default Editor;


// updateContent = (newContent) => {
//   this.setState({content: newContent})
// }

// onChange = (evt) => {
//   console.log("onChange fired with event info: ", evt);
//   var newContent = evt.editor.getData();
//   this.setState({ content: newContent })
// }

// onBlur = evt => {
//   console.log("onBlur event called with event info: ", evt);
// }

// afterPaste = evt => {
//   console.log("afterPaste event called with event info: ", evt);
// }
