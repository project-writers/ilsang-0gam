import './tiptap.css'
import { Header } from '@/component/Header'
import { useEditor, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { useState } from 'react'

export function Post() {
  const [title, setTitle] = useState('')

  // fetch to backend post, return document
  setTitle("title")
  const content = 'hello world'
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
    content
  })
  return (
    <>
      <div className="w-screen h-screen bg-zinc-100 flex flex-col">
        <Header name={'user'} />
        <div className='w-full h-[48px] flex-none'>header space</div>
        <input value={title} type='text' placeholder='title' className='flex-none w-full font-bold text-4xl px-10 outline-none leading-3' />
        <div className='flex gap-1 flex-wrap text-zinc-400 flex-none'>
          <MenuBar editor={editor} />
        </div>
        <EditorContent editor={editor} className='flex-grow outline-none w-full h-full text-zinc-500 overflow-clip' />
        <div className='w-full h-24 bg-slate-300 flex-none flex flex-col justify-center text-center text-white text-2xl'>
          작성완료   
        </div>
        
      </div>
    </>
  )
}


const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null
  }
  const activeCss = 'border-2 border-zinc-500 px-1 rounded-md bg-zinc-500 text-white' 
  const nonActiveCss = 'border-2 border-zinc-300 px-1 rounded-md '
  return (
		<>
			<button
				className={nonActiveCss}
				onClick={() => editor.chain().focus().undo().run()}
				disabled={!editor.can().chain().focus().undo().run()}
			>
				undo
			</button>
			<button
				className={nonActiveCss}
				onClick={() => editor.chain().focus().redo().run()}
				disabled={!editor.can().chain().focus().redo().run()}
			>
				redo
			</button>
			mark |
			<button
				onClick={() => editor.chain().focus().toggleBold().run()}
				disabled={!editor.can().chain().focus().toggleBold().run()}
				className={editor.isActive('bold') ? activeCss : nonActiveCss}
			>
				<strong>b</strong>
			</button>
			<button
				onClick={() => editor.chain().focus().toggleItalic().run()}
				disabled={!editor.can().chain().focus().toggleItalic().run()}
				className={editor.isActive('italic') ? activeCss : nonActiveCss}
			>
				<em>italic</em>
			</button>
			<button
				onClick={() => editor.chain().focus().toggleStrike().run()}
				disabled={!editor.can().chain().focus().toggleStrike().run()}
				className={
					editor.isActive('strike')
						? activeCss + 'line-through'
						: nonActiveCss + 'line-through'
				}
			>
				strike
			</button>
			<button
				onClick={() => editor.chain().focus().toggleCode().run()}
				disabled={!editor.can().chain().focus().toggleCode().run()}
				className={editor.isActive('code') ? activeCss : nonActiveCss}
			>
				``
			</button>
			<button
				className={nonActiveCss}
				onClick={() => editor.chain().focus().unsetAllMarks().run()}
			>
				clear
			</button>
			node |
			<button
				onClick={() => editor.chain().focus().setParagraph().run()}
				className={editor.isActive('paragraph') ? activeCss : nonActiveCss}
			>
				p
			</button>
			<button
				onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
				className={
					editor.isActive('heading', { level: 1 }) ? activeCss : nonActiveCss
				}
			>
				#
			</button>
			<button
				onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
				className={
					editor.isActive('heading', { level: 2 }) ? activeCss : nonActiveCss
				}
			>
				##
			</button>
			<button
				onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
				className={
					editor.isActive('heading', { level: 3 }) ? activeCss : nonActiveCss
				}
			>
				###
			</button>
			<button
				onClick={() => editor.chain().focus().toggleBulletList().run()}
				className={editor.isActive('bulletList') ? activeCss : nonActiveCss}
			>
				-
			</button>
			<button
				onClick={() => editor.chain().focus().toggleOrderedList().run()}
				className={editor.isActive('orderedList') ? activeCss : nonActiveCss}
			>
				1.
			</button>
			<button
				onClick={() => editor.chain().focus().toggleCodeBlock().run()}
				className={editor.isActive('codeBlock') ? activeCss : nonActiveCss}
			>
				```
			</button>
			<button
				onClick={() => editor.chain().focus().toggleBlockquote().run()}
				className={editor.isActive('blockquote') ? activeCss : nonActiveCss}
			>
				&gt;
			</button>
			<button
				className={nonActiveCss}
				onClick={() => editor.chain().focus().clearNodes().run()}
			>
				clear
			</button>
			etc |
			<button
				onClick={() => editor.chain().focus().setHorizontalRule().run()}
				className={nonActiveCss}
			>
				---
			</button>
			<button
				className={nonActiveCss}
				onClick={() => editor.chain().focus().setHardBreak().run()}
			>
				br
			</button>
			color |
			<button
				onClick={() => editor.chain().focus().setColor('#958DF1').run()}
				className={
					editor.isActive('textStyle', { color: '#958DF1' })
						? activeCss
						: nonActiveCss + 'text-[#958DF1]'
				}
			>
				purple
			</button>
		</>
	)
}

