import ReactCodeMirror, { highlightActiveLine } from '@uiw/react-codemirror'
import { langs } from '@uiw/codemirror-extensions-langs'

interface CodeMirrorProps {
  code: string
  updateCode: (newCode: string) => void
}

export function CodeMirror({ code, updateCode }: CodeMirrorProps): JSX.Element {
  return (
    <ReactCodeMirror
      value={code}
      height="100vh"
      width="100vw"
      theme="dark"
      extensions={[highlightActiveLine(), langs.tsx()]}
      onChange={(value) => updateCode(value)}
    />
  )
}
