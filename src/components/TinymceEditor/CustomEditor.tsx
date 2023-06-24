import { Editor } from '@tinymce/tinymce-react'
import { useState } from 'react'
import initFullProps from './initFullProps'

const CustomEditor = () => {
  const [text, setText] = useState<string | null>(null)

  let content: string = text || ''
  let startingBody: number = -1
  let endingBody: number = -1

  startingBody = content.indexOf('<body>')
  endingBody = content.indexOf('</body>')
  if (startingBody !== -1) {
    content = content.substring(startingBody + 6, endingBody - 1)
  }

  return (
    <Editor
      id='Editor'
      // tinymceScriptSrc='/tinymce/tinymce.min.js'
      apiKey='qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc'
      value={content}
      init={{
        ...initFullProps,
      }}
      onEditorChange={setText}
    />
  )
}

export default CustomEditor
