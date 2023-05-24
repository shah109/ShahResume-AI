function OpenCvReady() {
  cv["onRuntimeInitialized"] = () => {
    console.log("OpenCV Ready");
    //Read an image from the image soure and oconvert to opencv format
    let imgMain = cv.imread("tablet-image"); //image in cv in mat format
    cv.imshow("main-canvas", imgMain);
      imgMain.delete();
      
    document.getElementById("button-rgb").onclick = function () {
      let imgMain = cv.imread("tablet-image"); //image in cv in mat format
      cv.imshow("main-canvas", imgMain);
      imgMain.delete();
      console.log("rgb button clicked");
    };

    document.getElementById("button-gray").onclick = function () {
      let imgMain = cv.imread("tablet-image"); //image in cv in mat format
      let imgGray = imgMain.clone();
      cv.cvtColor(imgMain, imgGray, cv.COLOR_RGBA2GRAY, 0);
      cv.imshow("main-canvas", imgGray);
      imgMain.delete();
      imgGray.delete();
      console.log("gray button clicked");
    };

    document.getElementById("button-blur").onclick = function () {
      let imgMain = cv.imread("tablet-image"); //image in cv in mat format
      let imgBlur = imgMain.clone();
      let ksize = new cv.Size(13, 13);
      cv.GaussianBlur(imgMain, imgBlur, ksize, 0);
      cv.imshow("main-canvas", imgBlur);
      imgMain.delete();
      imgBlur.delete();
      console.log("Blur button clicked");
    };

    document.getElementById("button-edge").onclick = function () {
      let imgMain = cv.imread("tablet-image"); //image in cv in mat format
      let imgCanny = imgMain.clone();
      cv.Canny(imgMain, imgCanny, 50, 100);
      cv.imshow("main-canvas", imgCanny);
      imgMain.delete();
      imgCannny.delete();
      console.log("Edge button clicked");
    };
  };
}
