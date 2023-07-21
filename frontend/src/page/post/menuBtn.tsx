import {type Editor} from '@tiptap/react'

export const MenuBtn = ({ editor }: { editor: Editor | null }) => {
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

