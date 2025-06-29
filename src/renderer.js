window.addEventListener("DOMContentLoaded", () => {
  const info = document.getElementById("info");
  if (info && window.envInfo) {
    info.textContent = `Chrome v${window.envInfo.chrome}, Node.js v${window.envInfo.node}, Electron v${window.envInfo.electron}`;
  }

  const fileInput = document.getElementById("fileInput");
  const audioPlayer = document.getElementById("audioPlayer");

  fileInput.addEventListener("change", (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const fileURL = URL.createObjectURL(files[0]);
      audioPlayer.src = fileURL;
      audioPlayer.play();
    }
  });
});
