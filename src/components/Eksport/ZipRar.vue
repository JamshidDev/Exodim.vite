<template >
  <div>
    <H2>Zip file</H2>
    <Button
      label="Zip"
      icon="pi pi-cloud-download"
      class="p-button-rounded font-medium px-8"
      @click="ZipDowload"
    />
  </div>
</template>
<script>
import JSZip from "jszip";
import FileSaver from "file-saver";
export default {
  data() {
    return {
      ZIP: null,
    };
  },
  methods: {
    ZipDowload() {
      this.ZIP.file("Hello.txt", "Hello World\n");
      var img = this.ZIP.folder("images");
      // img.file("smile.gif", imgData, {base64: true});
      this.ZIP.generateAsync({ type: "blob" }).then(function (content) {
        // see FileSaver.js
        saveAs(content, "Xodimlar.zip");
      });
    },
  },
  created() {
    this.ZIP = new JSZip();
  },
};
</script>
