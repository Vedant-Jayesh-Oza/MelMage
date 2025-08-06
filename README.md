# MelMage 🎵🧠

**Real-time audio classification powered by a custom ResNet-style CNN with complete neural network transparency**

[![Demo Video](https://img.shields.io/badge/🎥-Watch%20Demo-blue)](./demo.mov)
[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://python.org)
[![PyTorch](https://img.shields.io/badge/PyTorch-2.0+-red.svg)](https://pytorch.org)
[![Modal](https://img.shields.io/badge/Modal-Serverless-green.svg)](https://modal.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black.svg)](https://nextjs.org)

## Demo

https://github.com/user-attachments/assets/demo.mov

*Watch MelMage classify environmental sounds and visualize what the neural network "sees" at each layer*

## Overview

MelMage is an explainable AI system for environmental sound classification that makes deep learning transparent and interactive. Built from scratch in PyTorch, it combines a custom ResNet-inspired CNN with real-time visualization capabilities to help understand how neural networks process audio data.

**Key Features:**
- 🧠 Custom ResNet-style CNN built from scratch (3-4-6-3 architecture)
- 🎯 83.75% accuracy on ESC-50 dataset (50 environmental sound classes)
- 👁️ Real-time feature map visualization from all CNN layers
- ⚡ Sub-100ms inference on serverless GPU infrastructure
- 🎨 Interactive Next.js dashboard with live audio processing
- 📊 Complete pipeline transparency: waveform → spectrogram → predictions

## Architecture

### Model Design
```
Input: Audio Waveform
    ↓
Mel-Spectrogram (128 bins, 22.05kHz)
    ↓
Custom ResNet CNN
├── Conv1: 7×7, 64 filters, stride 2
├── Layer1: 3 × ResidualBlock(64 → 64)
├── Layer2: 4 × ResidualBlock(64 → 128) 
├── Layer3: 6 × ResidualBlock(128 → 256)
├── Layer4: 3 × ResidualBlock(256 → 512)
├── AdaptiveAvgPool2d
├── Dropout(0.5)
└── Linear(512 → 50 classes)
    ↓
Top-3 Predictions + Feature Maps
```

**Model Specifications:**
- **Parameters:** ~23M trainable weights
- **Layers:** ~17 convolutional layers total
- **Feature Maps:** Extracted at 5 depth levels (conv1, layer1-4)
- **Architecture:** ResNet34-inspired with audio-specific modifications

### Training Pipeline

**Data Processing:**
- **Dataset:** ESC-50 (Environmental Sound Classification)
- **Preprocessing:** Mel-spectrogram transformation
- **Split:** Fold-based validation (fold 5 for testing)
- **Augmentation:** FrequencyMasking + TimeMasking + Mixup

**Training Configuration:**
- **Epochs:** 100
- **Optimizer:** AdamW (lr=0.0005, weight_decay=0.01)
- **Scheduler:** OneCycleLR (max_lr=0.002, 10% warmup)
- **Loss:** CrossEntropyLoss with label smoothing (0.1)
- **Regularization:** Dropout(0.5) + Mixup augmentation
- **Monitoring:** TensorBoard logging for all metrics

## Project Structure

```
MelMage/
├── model.py              # Custom ResNet CNN architecture
├── train.py              # Training pipeline with ESC-50 dataset
├── main.py               # Modal deployment & FastAPI inference
├── requirements.txt      # Python dependencies
├── demo.mov             # Demo video
└── melmage-frontend/    # Next.js dashboard
    ├── src/
    │   ├── app/
    │   │   ├── page.tsx           # Landing page
    │   │   └── demo/page.tsx      # Interactive demo
    │   └── components/
    │       ├── LandingPage.tsx    # Main landing page
    │       ├── Waveform.tsx       # Audio waveform visualization
    │       ├── FeatureMap.tsx     # CNN feature map display
    │       └── ColorScale.tsx     # Visualization utilities
    └── package.json
```

## Technical Implementation

### 1. Custom CNN Architecture (`model.py`)

**ResidualBlock Implementation:**
```python
class ResidualBlock(nn.Module):
    def __init__(self, in_channels, out_channels, stride=1):
        # Two 3x3 convolutions with batch normalization
        # Skip connection with optional 1x1 projection
        # Feature map collection for visualization
```

**AudioCNN Features:**
- Progressive channel expansion: 64 → 128 → 256 → 512
- Residual connections for gradient flow
- Dual forward modes: standard vs. feature map extraction
- Global average pooling to reduce overfitting

### 2. Training System (`train.py`)

**ESC50Dataset Class:**
- Automatic audio loading and preprocessing
- Fold-based train/validation splitting
- Mel-spectrogram transformation pipeline
- Class-to-index mapping for 50 sound categories

**Advanced Training Techniques:**
- **Mixup Augmentation:** Beta(0.2, 0.2) distribution mixing
- **SpecAugment-inspired:** Frequency + Time masking
- **OneCycleLR:** Cosine annealing with warm restarts
- **Label Smoothing:** Reduces overconfident predictions

### 3. Serverless Deployment (`main.py`)

**Modal Infrastructure:**
- A10G GPU for accelerated inference
- Automatic scaling with 15-second cooldown
- Persistent volume for model storage
- FastAPI endpoint for HTTP requests

**AudioProcessor Pipeline:**
```python
Raw Audio → Resample (44.1kHz) → Mono Conversion → 
Mel-Spectrogram → Model Inference → Feature Extraction
```

**Response Format:**
- Top-3 predictions with confidence scores
- Complete feature maps from all CNN layers
- Input spectrogram visualization data
- Original waveform for playback

### 4. Interactive Frontend (`melmage-frontend/`)

**Technology Stack:**
- **Framework:** Next.js 14 with React
- **Styling:** Tailwind CSS for responsive design
- **Visualization:** Custom React components for audio data
- **API Integration:** Real-time communication with Modal backend

**Visualization Components:**
- **Waveform Display:** Interactive audio waveform with playback
- **Spectrogram View:** Mel-frequency representation
- **Feature Maps:** Layer-by-layer CNN activation visualization
- **Prediction Dashboard:** Top-3 results with confidence metrics

## Getting Started

### Prerequisites
- Python 3.8+
- Node.js 18+
- Modal account for deployment
- GPU recommended for training

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/MelMage.git
cd MelMage
```

2. **Install Python dependencies:**
```bash
pip install -r requirements.txt
```

3. **Set up Modal (for deployment):**
```bash
pip install modal
modal token new
```

4. **Install frontend dependencies:**
```bash
cd melmage-frontend
npm install
```

### Training the Model

1. **Run training on Modal's infrastructure:**
```bash
modal run train.py
```

This will:
- Download and prepare the ESC-50 dataset
- Train the custom ResNet CNN for 100 epochs
- Save the best model based on validation accuracy
- Generate TensorBoard logs for monitoring

2. **Monitor training progress:**
```bash
tensorboard --logdir=tensorboard_logs/
```

### Deployment

1. **Deploy inference service:**
```bash
modal deploy main.py
```

2. **Start the frontend:**
```bash
cd melmage-frontend
npm run dev
```

3. **Access the application:**
- Frontend: http://localhost:3000
- API endpoint: Provided by Modal after deployment

## Usage

### Web Interface
1. Navigate to the demo page
2. Upload a WAV audio file or record directly
3. View real-time classification results
4. Explore feature maps from each CNN layer
5. Understand how the model processes your audio

### API Usage
```python
import requests
import base64

# Encode audio file
with open("audio.wav", "rb") as f:
    audio_b64 = base64.b64encode(f.read()).decode()

# Make prediction request
response = requests.post(
    "https://your-modal-endpoint.modal.run/inference",
    json={"audio_data": audio_b64}
)

result = response.json()
print("Top prediction:", result["predictions"][0])
```

## Model Performance

**Validation Results:**
- **Accuracy:** 83.75% on ESC-50 test set
- **Classes:** 50 environmental sound categories
- **Inference Time:** <100ms per audio file
- **Model Size:** ~23M parameters

**Training Metrics:**
- **Dataset:** 2,000 audio samples (ESC-50)
- **Training Time:** ~3 hours on A10G GPU
- **Best Epoch:** Typically converges around epoch 70-80
- **Validation Strategy:** Fold 5 held out for testing

## Technical Details

### Audio Processing Pipeline
```
Input Audio (any sample rate)
    ↓
Resample to 44.1kHz
    ↓
Convert to Mono (if stereo)
    ↓
Mel-Spectrogram Transform
├── n_fft: 1024
├── hop_length: 512  
├── n_mels: 128
├── f_min: 0 Hz
└── f_max: 11,025 Hz (Nyquist)
    ↓
Amplitude to dB conversion
    ↓
CNN Processing
```

### Feature Map Extraction
The model captures intermediate representations at five key points:
1. **conv1:** Initial feature extraction (64 channels)
2. **layer1:** Low-level patterns (64 channels)
3. **layer2:** Mid-level features (128 channels)
4. **layer3:** High-level abstractions (256 channels)
5. **layer4:** Final representations (512 channels)

### Deployment Architecture
```
User Upload → Next.js Frontend → Modal FastAPI → 
PyTorch Model → Feature Extraction → JSON Response →
Interactive Visualization
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **ESC-50 Dataset:** Environmental Sound Classification dataset by Karol J. Piczak
- **Modal Labs:** Serverless GPU infrastructure for training and deployment
- **PyTorch:** Deep learning framework for model implementation
- **Next.js:** React framework for the interactive frontend

## Contact

**Vedant Jayesh Oza**
- GitHub: [@Vedant-Jayesh-Oza](https://github.com/Vedant-Jayesh-Oza)
- Email: your-email@example.com

---

*MelMage makes AI explainable by showing you exactly what your neural network sees and hears.*