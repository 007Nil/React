import React from 'react'
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditor, Toolbar, RichTextEditorComponent } from '@syncfusion/ej2-react-richtexteditor';

import { EditorData } from '../data/dummy';

import { Header } from '../components';


const Editor = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:o-10 bg-white rounded-3xl'>
      <Header
        catagory="App"
        title="Editor"
      />

      <RichTextEditorComponent>
        <EditorData/>
        <Inject services={[HtmlEditor, Toolbar
          , Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>

    </div>
  )
}

export default Editor