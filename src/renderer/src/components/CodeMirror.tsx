import ReactCodeMirror, { highlightActiveLine } from '@uiw/react-codemirror'
import { loadLanguage, langNames, langs } from '@uiw/codemirror-extensions-langs'

loadLanguage('tsx')

langs.tsx()

console.log('langNames:', langNames) // => "jsx" | "typescript" | "javascript" | "tsx"

export function CodeMirror(): JSX.Element {
  const code = "console.log('Code Mirror!')"

  return (
    <ReactCodeMirror
      lang="javascript"
      value={code}
      height="100vh"
      width="100vw"
      theme="dark"
      extensions={[highlightActiveLine(), langs.tsx()]}
    />
  )
}
