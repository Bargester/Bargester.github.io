function encrypt(){
    var file = document.getElementById("in").files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var tfile = new Uint8Array(e.target.result);
        for(i=0;i<tfile.length;i++){
            tfile[i] = parseInt(tfile[i]) + parseInt(document.getElementById("shift").value);
            if(tfile[i]>255){
                tfile[i]-=256;
            }
        }
    download(tfile);
  };
    reader.readAsArrayBuffer(file)
}
function decrypt(){
    var file = document.getElementById("in").files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var tfile = new Uint8Array(e.target.result);
        for(i=0;i<tfile.length;i++){
            tfile[i] = parseInt(tfile[i]) - parseInt(document.getElementById("shift").value);
            if(tfile[i]<0){
                tfile[i]+=256;
            }
        }
    download(tfile);
  };
    reader.readAsArrayBuffer(file)
}
function numberTest(n){
    if (n>255) {
        document.getElementById("shift").value=255;
    }
    if (n<0) {
        document.getElementById("shift").value=0;
    }
    document.getElementById("hex").value = parseInt(document.getElementById("shift").value).toString(16).toUpperCase();
}
function download(data){
    var link = document.createElement('a');
    bl = new Blob([data]);
    link.href = URL.createObjectURL(bl);
        link.download = document.getElementById("in").files[0].name; 
    var e = new MouseEvent("click");
    link.dispatchEvent(e);
}