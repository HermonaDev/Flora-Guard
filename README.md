# Flora Guard: Plant Disease Recognizer
![Screenshot (430)](https://github.com/HermonaDev/Flora-Guard/assets/135220263/6f14cf5e-7341-4710-ba2c-9e91842870b9)

Flora Guard is a project that aims to detect and classify plant diseases using machine learning. It utilizes the MobileNetV2 architecture from TensorFlow Keras for efficient and accurate predictions. The project includes both backend (Python) and frontend (HTML, CSS, and JS) components.

## Features

- **Plant Disease Detection**: Flora Guard can identify various plant diseases based on input images.
- **MobileNetV2 Model**: We use the pre-trained MobileNetV2 model for efficient inference.
- **Web Interface**: The frontend provides an easy-to-use web interface for users to upload plant images and receive disease predictions.

## Environment

- **Google Colaboratory**: The development environment for this project is Google Colaboratory (Colab). You can easily run and experiment with the code in a Jupyter notebook environment.

## Dataset

I used the [PlantVillage Dataset](https://www.kaggle.com/datasets/abdallahalidev/plantvillage-dataset/code) for training and evaluation. It contains over 54,000 images of healthy and diseased plants across various classes. The dataset includes images of 17 basic diseases, 4 bacterial diseases, 2 diseases caused by mold (oomycete), 2 viral diseases, and 1 disease caused by a mite. Additionally, there are healthy leaf images for 12 crop species that are not visibly affected by disease.

## Getting Started

1. **Clone the Repository**:
   ```
   git clone https://github.com/HermonaDev/Flora-Guard.git
   ```

2. **Install Dependencies**:
   ```
   pip install -r requirements.txt
   ```

3. **Run the Backend**:
   - Open the provided Colab notebook (`FloraGuard.ipynb`) in Google Colab.
   - Follow the instructions within the notebook to set up the backend.

4. **Access the Web Interface**:
   - Open the `index.html` file in your web browser.
   - Upload plant images to the web interface for disease prediction.

## Usage

1. Upload an image of a plant to the web interface. You can obtain test images from test.zip folder in this repository
2. Flora Guard will process the image and provide the predicted disease class.

