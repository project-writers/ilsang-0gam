import './tiptap.css'
import { Header } from '@/component/Header'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { useEffect, useState } from 'react'
import { MenuBtn } from './menuBtn'
import { NavBar } from '@/component/NavBar'

export function Post() {
  const [doc, setDoc] = useState({
    title: "title",
    content: "hello world",
  })

  useEffect(() => {
    // fetch to backend post, return document
    // setDoc({})
  }, [])

  const inputChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setDoc(d => {
      return { content: d.content, title: target.value }
    })
  }

  // const textStyleConfig = { types: [ListItem.name] }
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: 'outline-none px-10 py-5 bg-white h-full overflow-y-scroll'
      }
    },
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      // TextStyle.configure( textStyleConfig ),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
    ],
    content: doc.content
  })
  return (
    <>
      <div className="w-screen h-screen bg-zinc-100 flex flex-col">
        <Header name={'user'} />
        <div className='w-full h-[48px] flex-none'>header space</div>
        <input value={doc.title} onChange={inputChange} type='text' placeholder='title' className='flex-none w-full font-bold text-4xl px-10 outline-none leading-3' />
        <div className='flex gap-1 flex-wrap text-zinc-400 flex-none'>
          <MenuBtn editor={editor} />
        </div>
        <EditorContent editor={editor} className='flex-grow outline-none w-full h-full text-zinc-500 overflow-clip' />
        <div className='w-full h-24 bg-slate-300 flex-none flex flex-col justify-center text-center text-white text-2xl'>
          작성완료
        </div>
        <NavBar />

      </div>
    </>
  )
}


