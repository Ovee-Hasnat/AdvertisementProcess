"use client";

import Editor from "@/components/editor/editor";
// import React from "react";
// import { createEditor } from "@editablejs/models";
// import {
//   EditableProvider,
//   ContentEditable,
//   withEditable,
// } from "@editablejs/editor";
// import { withPlugins, MarkEditor } from "@editablejs/plugins";
// import {
//   ToolbarComponent,
//   useToolbarEffect,
//   withToolbar,
//   Toolbar,
// } from "@editablejs/plugin-toolbar";
// import {
//   withContextMenu,
//   useContextMenuEffect,
//   ContextMenu,
// } from "@editablejs/plugin-context-menu";
// import { withImage } from "@editablejs/plugin-image";

// const marks = ["bold", "italic", "underline", "code", "image"];

// const page = () => {
//   const editor = React.useMemo(() => {
//     let editor = withEditable(createEditor());
//     editor = withPlugins(editor);
//     return withImage(editor);
//   }, []);

//   useToolbarEffect(() => {
//     Toolbar.setItems(
//       editor,
//       marks.map((mark) => ({
//         type: "button",
//         children: mark,
//         active: MarkEditor.isActive(editor, mark),
//         onToggle: () => {
//           MarkEditor.toggle(editor, mark);
//         },
//       }))
//     );
//   }, editor);

//   useContextMenuEffect(() => {
//     ContextMenu.setItems(editor, [
//       {
//         key: "copy",
//         title: "Copy",
//         onSelect() {
//           editor.copy();
//         },
//       },
//       {
//         key: "paste",
//         title: "Paste",
//         onSelect() {
//           editor.insertFromClipboard();
//         },
//       },
//     ]);
//   }, editor);

//   return (
//     <div className="max-w-3xl mx-auto py-14">
//       <EditableProvider editor={editor}>
//         <ToolbarComponent editor={editor} />
//         <ContentEditable />
//       </EditableProvider>
//     </div>
//   );
// };

// export default page;

import React from "react";

const page = () => {
  return (
    <div>
      <Editor />
    </div>
  );
};

export default page;
