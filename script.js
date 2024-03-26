let model;
let class_indices;
let fileUpload = document.getElementById('uploadImage')
let img = document.getElementById('image')
let boxResult = document.querySelector('.box-result')
let confidence = document.querySelector('.confidence')
let pconf = document.querySelector('.box-result p')

let progressBar = 
    new ProgressBar.Circle('#progress', {
    color: 'rgb(126, 183, 34)',
    strokeWidth: 10,
    duration: 2000, // milliseconds
    easing: 'easeInOut'
});

// Function to fetch data from labels.json
async function fetchData(){
    let response = await fetch('labels.json');
    let data = await response.json();
    return data;
}

// Initialize/Load model
async function initialize() {
    let status = document.querySelector('.init_status')
    status.innerHTML = 'Loading Model .... <span class="fa fa-spinner fa-spin"></span>'
    model = await tf.loadLayersModel('./tensorflowjs-model/model.json');
    status.innerHTML = 'Model Loaded Successfully  <span class="fa fa-check"></span>'
}

// Function to predict
async function predict() {
    // Load then resize, then convert data type to float and lastly expand dimensions
    let tensorImg =   tf.browser.fromPixels(img).resizeNearestNeighbor([224,224]).toFloat().expandDims();
    let tensorImg_scaled = tensorImg.div(255)
    let prediction = await model.predict(tensorImg_scaled).data();

    // Fetch data from labels.json
    let data = await fetchData();
    let predicted_class = tf.argMax(prediction);
    let class_idx = Array.from(await predicted_class.data())[0];

    document.querySelector('.pred_class').innerHTML = data[class_idx];
    document.querySelector('.inner').innerHTML = `${parseFloat(prediction[class_idx]*100).toFixed(2)}% SURE`;

    progressBar.animate(prediction[class_idx]); // percent
}

fileUpload.addEventListener('change', function(e){
    let file = this.files[0]
    if (file){
        boxResult.style.display = 'block'
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener("load", function(){
            img.style.display = "block"
            img.setAttribute('src', this.result);
        });
    }
    else{
        img.setAttribute("src", "");
    }

    initialize().then(() => { 
        predict();
    });
});
