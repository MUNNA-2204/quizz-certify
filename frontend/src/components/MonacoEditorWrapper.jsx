import Editor from '@monaco-editor/react';

export default function MonacoEditorWrapper({
  value,
  onChange,
  height = '500px'
}) {
  return (
    <div className="rounded-lg border border-gray-200 overflow-hidden">
      <Editor
        height={height}
        language="plaintext" // Use plaintext to disable all language-specific features
        value={value || "// Type your code here"}
        onChange={onChange}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          wordWrap: 'on',
          automaticLayout: true,
          scrollBeyondLastLine: false,
          renderWhitespace: 'none',
          lineNumbersMinChars: 2,
          fontFamily: 'Fira Code, monospace',
          suggestOnTriggerCharacters: false, // Disable IntelliSense
          quickSuggestions: false, // No suggestions
          parameterHints: { enabled: false } // No parameter hints
        }}
      />
    </div>
  );
}