import React, { useState } from "react";
import { Box, Button, Flex, Textarea, VStack } from "@chakra-ui/react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      // For simplicity, we will use eval for JavaScript code execution.
      // In a real-world scenario, you would handle different languages and use a safer execution environment.
      setOutput(eval(code));
    } catch (err) {
      setOutput(err.message);
    }
  };

  return (
    <VStack spacing={4} align="stretch">
      <CodeMirror
        value={code}
        options={{
          mode: "javascript",
          theme: "material",
          lineNumbers: true,
          indentUnit: 2,
        }}
        onBeforeChange={(editor, data, value) => {
          setCode(value);
        }}
      />
      <Button colorScheme="blue" onClick={runCode}>Run</Button>
      <Textarea value={output} readOnly placeholder="Output will be displayed here..." />
    </VStack>
  );
};

export default CodeEditor;