/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor as Base } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Heading } from '@ckeditor/ckeditor5-heading';
import type { EditorConfig } from '@ckeditor/ckeditor5-core';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Bold, Code, Italic, Strikethrough, Subscript, Superscript, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { Font } from '@ckeditor/ckeditor5-font';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { PageBreak } from '@ckeditor/ckeditor5-page-break';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { List, ListProperties, TodoList } from '@ckeditor/ckeditor5-list';
import { Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload, ImageInsert, ImageResize } from '@ckeditor/ckeditor5-image';
import { Link, LinkImage } from '@ckeditor/ckeditor5-link';
import { SpecialCharactersEssentials } from '@ckeditor/ckeditor5-special-characters';
import { Table, TableToolbar, TableCellProperties, TableProperties } from '@ckeditor/ckeditor5-table';
import PreserveIdAttrPlugin from './preserveIdAttrPlugin';
export default class ClassicEditor extends Base {
    static builtinPlugins: (typeof PreserveIdAttrPlugin | typeof BlockQuote | typeof Bold | typeof Code | typeof Essentials | typeof Italic | typeof Strikethrough | typeof Subscript | typeof Superscript | typeof Underline | typeof Alignment | typeof CodeBlock | typeof CloudServices | typeof Font | typeof Heading | typeof Highlight | typeof HorizontalLine | typeof Link | typeof RemoveFormat | typeof PageBreak | typeof Indent | typeof List | typeof ListProperties | typeof TodoList | typeof Image | typeof ImageCaption | typeof ImageInsert | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof LinkImage | typeof Table | typeof TableToolbar | typeof TableProperties | typeof TableCellProperties | typeof MediaEmbed | typeof SpecialCharactersEssentials | typeof Autoformat)[];
    static defaultConfig: EditorConfig;
}
