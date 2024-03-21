import React, { useState, useRef, useEffect } from "react";
import { Editor } from "@monaco-editor/react";
import { CODE_SNIPPETS } from "../constants/constants";
import LanguageThemeSelector from "./LanguageThemeSelector";
import Output from "./Output";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("java");
  const [theme, setTheme] = useState("light");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setValue(CODE_SNIPPETS[selectedLanguage]);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col p-10 items-center gap-2 w-full">
      <LanguageThemeSelector onSelect={onSelect} setTheme={setTheme} />
      <div className="w-full flex flex-col gap-2 lg:flex-row h-max">
        <Editor
          options={{
            minimap: {
              enabled: false,
            },
          }}
          height="35rem"
          width={windowWidth < 1024 ? "100%" : "50%"}
          theme={theme}
          language={language}
          defaultValue={CODE_SNIPPETS[language]}
          onMount={onMount}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
        <Output editorRef={editorRef} language={language} />
      </div>
    </div>
  );
};

export default CodeEditor;