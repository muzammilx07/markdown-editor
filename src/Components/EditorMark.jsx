import React, { useState } from "react";
import "./editormark.css";
import Markdown from 'react-markdown';
import { FaB, FaLink, FaQuoteRight, FaImage } from "react-icons/fa6";

function EditorMark() {
  const [text, setText] = useState("Welcome");
  const [fontSize, setFontSize] = useState(16);

  const handleFontSizeChange = (e) => {
    setFontSize(parseInt(e.target.value)); 
  };

  const insertMarkdown = (markdownSyntax) => {
    setText(text + markdownSyntax);
  };

  return (
    <div className="main">
      <div className="tool-bar">
        {/* Input for font size */}
        <input 
          type="number" 
          min={0} 
          max={32} 
          className="font-sizer" 
          value={fontSize} 
          onChange={handleFontSizeChange} 
        />
        <div className="nav-styles">
          {/* Button to insert bold */}
          <span onClick={() => insertMarkdown('**bold**')}>
            <strong>B</strong>
          </span>
          {/* Button to insert H1 */}
          <span onClick={() => insertMarkdown('# h1')}>
            <strong>H</strong>
          </span>
          {/* Button to insert italic */}
          <span onClick={() => insertMarkdown('*text*')}>
            <strong><i>I</i></strong>
          </span>
        </div>
        <div className="nav-links">
          {/* Button to insert Link */}
          <span onClick={() => insertMarkdown('[title](https://www.example.com)')}>
            <FaLink/>
          </span>
          {/* Button to insert Blockquote */}
          <span onClick={() => insertMarkdown('> blockquote\n')}>
            <FaQuoteRight/>
          </span>
          {/* Button to insert Image */}
          <span onClick={() => insertMarkdown('![alt text](image.jpg)\n')}>
            <FaImage/>
          </span>
        </div>
      </div>
      <div className="editor-area">
        <div className="left">
          {/* Apply font size to textarea */}
          <textarea 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            style={{ fontSize: `${fontSize}px` }} // Set font size dynamically
          />
        </div>
        <div className="right">
          <div className="outcome">
            <Markdown>{text}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorMark;
