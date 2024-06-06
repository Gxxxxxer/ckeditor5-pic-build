import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class InsertOtherPlugin extends Plugin {
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add('insertOther', locale => {
      const view = new ButtonView(locale);

      view.set({
        label: 'insert other',
        withText: true,
        tooltip: true
      });

      // Button action
      view.on('execute', () => {
        // 自定义点击事件逻辑
        console.log("My Custom Button was clicked!");
      });

      return view;
    });
  }
}
