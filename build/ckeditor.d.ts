/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { EasyImage } from '@ckeditor/ckeditor5-easy-image';
import { Heading } from '@ckeditor/ckeditor5-heading';
import type { EditorConfig } from '@ckeditor/ckeditor5-core';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Bold, Code, Italic, Strikethrough, Subscript, Superscript, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { Font } from '@ckeditor/ckeditor5-font';
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
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { List, ListProperties, TodoList } from '@ckeditor/ckeditor5-list';
import { Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload, ImageInsert, ImageResize } from '@ckeditor/ckeditor5-image';
import { Link, LinkImage } from '@ckeditor/ckeditor5-link';
import { SpecialCharacters, SpecialCharactersArrows, SpecialCharactersCurrency, SpecialCharactersEssentials, SpecialCharactersLatin, SpecialCharactersMathematical, SpecialCharactersText } from '@ckeditor/ckeditor5-special-characters';
import { Table, TableToolbar, TableCellProperties, TableProperties } from '@ckeditor/ckeditor5-table';
export default class Editor extends ClassicEditor {
    static builtinPlugins: (typeof BlockQuote | typeof Bold | typeof Code | typeof Essentials | typeof Italic | typeof Strikethrough | typeof Subscript | typeof Superscript | typeof Underline | typeof Alignment | typeof Clipboard | typeof CodeBlock | typeof CloudServices | typeof FindAndReplace | typeof Font | typeof Heading | typeof Highlight | typeof HorizontalLine | typeof Link | typeof RemoveFormat | typeof SourceEditing | typeof PageBreak | typeof PasteFromOffice | typeof Paragraph | typeof WordCount | typeof Indent | typeof IndentBlock | typeof List | typeof ListProperties | typeof TodoList | typeof Image | typeof ImageCaption | typeof ImageInsert | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof LinkImage | typeof Table | typeof TableToolbar | typeof TableProperties | typeof TableCellProperties | typeof EasyImage | typeof MediaEmbed | typeof SpecialCharacters | typeof SpecialCharactersArrows | typeof SpecialCharactersCurrency | typeof SpecialCharactersEssentials | typeof SpecialCharactersLatin | typeof SpecialCharactersMathematical | typeof SpecialCharactersText | typeof Autoformat | typeof TextTransformation)[];
    static defaultConfig: EditorConfig;
}
