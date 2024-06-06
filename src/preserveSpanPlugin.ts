import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

class PreserveSpanPlugin extends Plugin {
  static get pluginName() {
    return 'PreserveSpanPlugin';
  }

  init() {
    const editor: any = this.editor;

    // 定义 span 元素
    editor.model.schema.register('span', {
      allowWhere: '$text',
      allowContentOf: '$block',
      allowAttributes: ['id'],
      isInline: true,
      isObject: false,
    });

    // 添加转换器，确保 span 标签及其 id 属性不会被移除或转换
    editor.conversion.for('upcast').elementToElement({
      view: {
        name: 'span',
        attributes: {
          id: true,
        },
      },
      model: (viewElement: any, { writer }: { writer: any }) => {
        const id = viewElement.getAttribute('id');
        return writer.createElement('span', { id });
      },
    });

    editor.conversion.for('downcast').elementToElement({
      model: 'span',
      view: (modelElement: any, { writer }: { writer: any }) => {
        const id = modelElement.getAttribute('id');
        return writer.createContainerElement('span', { id });
      },
    });

    // 确保 span 元素的内容不会丢失
    editor.conversion.for('upcast').attributeToAttribute({
      view: {
        name: 'span',
        key: 'id',
      },
      model: 'id',
    });

    editor.conversion.for('downcast').attributeToAttribute({
      model: 'id',
      view: 'id',
    });
  }
}

export default PreserveSpanPlugin;
