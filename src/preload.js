const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("envInfo", {
  chrome: process.versions.chrome,
  node: process.versions.node,
  electron: process.versions.electron,
});
