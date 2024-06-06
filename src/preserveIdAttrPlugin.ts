import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

class PreserveAttributesPlugin extends Plugin {
  init() {
    const editor = this.editor;

    // // 特别处理 p 标签的 id 属性
    // editor.conversion.for('upcast').elementToElement({
    //   view: {
    //     name: 'p',
    //     attributes: {
    //       id: true,
    //     },
    //   },
    //   model: (viewElement: any, { writer }: { writer: any }) => {
    //     const id = viewElement.getAttribute('id');
    //     const paragraph = writer.createElement('paragraph');
    //     if (id) {
    //       writer.setAttribute('id', id, paragraph);
    //     }
    //     return paragraph;
    //   },
    // });

    // editor.conversion.for('downcast').elementToElement({
    //   model: 'paragraph',
    //   view: (modelElement: any, { writer }: { writer: any }) => {
    //     const id = modelElement.getAttribute('id');
    //     const p = writer.createContainerElement('p');
    //     if (id) {
    //       writer.setAttribute('id', id, p);
    //     }
    //     return p;
    //   },
    // });

    // 定义需要保留 id 属性的标签
    const elementsToPreserve = ['span', 'div'];

    elementsToPreserve.forEach((elementName: any) => {
      if (elementName === 'span') {
        // 注册 span 和 div  标签的 schema
        editor.model.schema.register(elementName, {
          allowWhere: '$text',
          allowContentOf: '$block',
          allowAttributes: ['id'],
          isInline: true,
          isObject: false,
        });
      } else if (elementName === 'div') {
        editor.model.schema.register(elementName, {
          inheritAllFrom: '$block',
          allowAttributes: ['id'],
        });
      }

      // 添加上行转换器，确保标签及其 id 属性不会被移除或转换
      editor.conversion.for('upcast').elementToElement({
        view: {
          name: elementName,
          attributes: {
            id: true,
          },
        },
        model: (viewElement: any, { writer }: { writer: any }) => {
          const id = viewElement.getAttribute('id');
          return writer.createElement(elementName, { id });
        },
      });

      // 添加下行转换器，确保标签及其 id 属性不会被移除或转换
      editor.conversion.for('downcast').elementToElement({
        model: elementName,
        view: (modelElement: any, { writer }: { writer: any }) => {
          const id = modelElement.getAttribute('id');
          return writer.createContainerElement(elementName, { id });
        },
      });

      // 确保元素的 id 属性不会丢失
      editor.conversion.for('upcast').attributeToAttribute({
        view: {
          name: elementName,
          key: 'id',
        },
        model: 'id',
      });

      editor.conversion.for('downcast').attributeToAttribute({
        model: 'id',
        view: 'id',
      });
    });
  }
}

export default PreserveAttributesPlugin;
