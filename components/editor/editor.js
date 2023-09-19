import "grapesjs/dist/css/grapes.min.css";
import grapesJS from "grapesjs";
import grapesJSMJML from "grapesjs-mjml";

import React from "react";

const Editor = () => {
  grapesJS.init({
    fromElement: true,
    container: "#gjs",
    plugins: [grapesJSMJML],
    pluginsOpts: {
      [grapesJSMJML]: {
        /* ...options */
      },
    },
  });

  return (
    <div>
      <div id="gjs">Editor</div>;
    </div>
  );
};

export default Editor;
