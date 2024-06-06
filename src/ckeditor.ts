/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import { ClassicEditor as Base } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
// import { CKFinder } from '@ckeditor/ckeditor5-ckfinder';
import { EasyImage } from '@ckeditor/ckeditor5-easy-image';
import { Heading, Title } from '@ckeditor/ckeditor5-heading';

import type { EditorConfig } from '@ckeditor/ckeditor5-core';


import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice}  from '@ckeditor/ckeditor5-paste-from-office';

import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';

//加载增加的插件类
//基本样式类
import { Bold, Code, Italic, Strikethrough, Subscript, Superscript, Underline } from '@ckeditor/ckeditor5-basic-styles';
//字体类
import { Font } from '@ckeditor/ckeditor5-font';
//文章类
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import { Clipboard } from '@ckeditor/ckeditor5-clipboard';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';
import { PageBreak } from '@ckeditor/ckeditor5-page-break';
import { WordCount } from '@ckeditor/ckeditor5-word-count';
//块缩进
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
//列表类
import { List, ListProperties, TodoList } from '@ckeditor/ckeditor5-list';
//图片类
import { Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload, ImageInsert, ImageResize } from '@ckeditor/ckeditor5-image';
import { AutoLink, Link, LinkImage } from '@ckeditor/ckeditor5-link';
//特殊符号类
import { SpecialCharacters, SpecialCharactersArrows, SpecialCharactersCurrency, SpecialCharactersEssentials, SpecialCharactersLatin, SpecialCharactersMathematical, SpecialCharactersText } from '@ckeditor/ckeditor5-special-characters';

//表格类
import { Table, TableToolbar, TableCellProperties, TableProperties } from '@ckeditor/ckeditor5-table';

// import InsertOtherPlugin from "./insert"


export default class ClassicEditor extends Base {
  public static override builtinPlugins = [
    //基础
    BlockQuote,
    Bold,
    Code,
    Essentials,
    Italic,
    Strikethrough,
    Subscript,
    Superscript,
    Underline,
    //文章
    Alignment,
    Clipboard,
    CodeBlock,
    CloudServices,
    FindAndReplace,
    Font,
    Heading,
    Highlight,
    HorizontalLine,
    Link,
    RemoveFormat,
    SourceEditing,
    PageBreak,
    PasteFromOffice,
    Paragraph,
    WordCount,
    //缩进
    Indent,
    IndentBlock,
    //列表
    List,
    ListProperties,
    TodoList,
    //图片
    Image,
    ImageCaption,
    ImageInsert,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    LinkImage,
    //表格
    Table,
    TableToolbar,
    TableProperties,
    TableCellProperties,
    //文件
    // CKFinder,
    EasyImage,
    MediaEmbed,
    //特殊符号
    SpecialCharacters,
    SpecialCharactersArrows,
    SpecialCharactersCurrency,
    SpecialCharactersEssentials,
    SpecialCharactersLatin,
    SpecialCharactersMathematical,
    SpecialCharactersText,
    //其它
    Autoformat,

    TextTransformation,
    // Title

  ];

  public static override defaultConfig: EditorConfig = {
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'outdent',
        'indent',
        '|',
        'uploadImage',
        'blockQuote',
        'insertTable',
        'mediaEmbed',
        'undo',
        'redo',
        'insertOther'
      ]
    },
    image: {
      toolbar: [
        'imageStyle:inline',
        'imageStyle:block',
        'imageStyle:side',
        '|',
        'toggleImageCaption',
        'imageTextAlternative'
      ]
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells'
      ]
    },
    // This value must be kept in sync with the language defined in webpack.config.js.
    language: 'zh-cn'
  };
}


