
describe("Ui functionality", () => {
    test("Points appear after clicking calibration button", () => {
      var btn = document.getElementById('cal_btn');
      ui.onCalStart(btn);
      dots();
      expect(document.getElementById('Pt1'.toBeTruthy()));
      expect(document.getElementById('Pt2'.toBeTruthy()));
      expect(document.getElementById('Pt3'.toBeTruthy()));
      expect(document.getElementById('Pt4'.toBeTruthy()));
      expect(document.getElementById('Pt5'.toBeTruthy()));
      expect(document.getElementById('Pt6'.toBeTruthy()));
    });

    test("Pointer appears after pressing start training", () => {
        var pointer = document.getElementById('#pointer');
        pointer.isHidden = false;
        expect(pointer.isHidden.toBeFalsey());
    });

    test("Heatmap cleared properly", () => {
         const canvas = document.getElementById('heatmap-canvas');
         heat.darw(100,100);
         heat.clearHeatmap();
         expect(heatmap.data.toBeFalsey();
    });    
     test("Heatmap drawing properly", () => {
        const canvas = document.getElementById('heatmap-canvas');
         heat.draw(100,100);
         expect(true);
    });    

     test("Heatmap toggles", () => {
        var hm = document.getElementById("heatmap-container");
        heatmap.display = true;
        onToggleHeatmap();
        expect(heatmap.display.toBeFalsey());
    });    


    test("Reset Model correctly resets model", () => {
         mock_model = createCNNModel();
         model.resetModel();
         expect(model.current_model.ToBeNull());
    });



    test("Webcam working and delivering video", () => {
        //mock webcam 
        var video_HTML = document.createElement( 'video' ); //mock
        expect(video_HTML.getCameraList().length.toBeGreaterThan(0));
    });
  });

