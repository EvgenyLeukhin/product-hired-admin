import React from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css'; // css-styles

const Editor = ({ value, onChange }) => <ReactQuill value={value} onChange={onChange} />;

export default Editor;
