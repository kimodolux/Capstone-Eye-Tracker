// For unit testing only
function movePointer(x, y) {
    //make a prediction using the Convolutional neural network
    //exteracts an image of the user's eyes from the current webcam frame
    //and uses the classifier to predict where the user is gazing
    
    // if (model.current_model == null){	
    // 	return;
    // } else if (model.isTraining == true){
    // 	console.log("model in training");
    // 	return;
    // } 

    // const prediction = model.predict();
    

    // //extract the x and y coordinates of the prediciton
    // const x = prediction[0] * ($('body').width() - pointer_size);
    // const y_pred = prediction[1] * (window.innerHeight - pointer_size);
    // const y_offset = window.scrollY;
    // const y = y_pred + y_offset;

    // console.log("y pred: " + y_pred);
    // console.log("y offset: " +y_offset);

    // console.log("Prediction: (" + x + ", " + y + ")");

    //render the pointer with the correct position in the webpage.
    //$pointer.css('left', x + 'px');
    //$pointer.css('top', y + 'px');
    x = x + 'px';
    y = y + 'px';

    //heatmap.draw(x,y);
    return {x, y};
};

module.exports = movePointer;