"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.title = "MelMage - See What Your Audio CNN Actually Hears";
  }, []);

  const features = [
    {
      icon: "🧠",
      title: "Deep Audio CNN",
      description: "ResNet-style architecture achieving 83.75% accuracy on ESC-50 dataset with advanced mel-spectrogram processing.",
    },
    {
      icon: "👁️",
      title: "Layer Visualization",
      description: "See feature maps from every convolutional layer - understand how your model learns audio patterns.",
    },
    {
      icon: "🎵",
      title: "Real-time Classification",
      description: "Upload any WAV file and get instant predictions with complete processing transparency.",
    },
    {
      icon: "⚡",
      title: "Serverless Infrastructure",
      description: "Built on Modal Labs for zero-cost scaling with GPU acceleration when needed.",
    },
    {
      icon: "📊",
      title: "Complete Transparency",
      description: "From raw waveform to final prediction - every step of the AI pipeline is visualized.",
    },
    {
      icon: "🎨",
      title: "Interactive Dashboard",
      description: "Next.js frontend with live visualizations, charts, and intuitive user experience.",
    },
  ];

  const techStack = {
    "Machine Learning": [
      { name: "PyTorch", desc: "Deep learning framework" },
      { name: "ResNet Architecture", desc: "Convolutional neural network" },
      { name: "Mel-Spectrograms", desc: "Audio feature extraction" },
      { name: "Tensorboard", desc: "Model visualization" },
    ],
    "Infrastructure": [
      { name: "Modal Labs", desc: "Serverless GPU compute" },
      { name: "FastAPI", desc: "High-performance API" },
      { name: "Docker", desc: "Containerized deployment" },
      { name: "PostgreSQL", desc: "Data persistence" },
    ],
    "Frontend": [
      { name: "Next.js", desc: "React framework" },
      { name: "React", desc: "UI library" },
      { name: "Tailwind CSS", desc: "Styling framework" },
      { name: "TypeScript", desc: "Type safety" },
    ],
    "Data & Training": [
      { name: "ESC-50 Dataset", desc: "Environmental sound classification" },
      { name: "Audio Augmentation", desc: "Data enhancement techniques" },
      { name: "Cross-validation", desc: "Model validation" },
      { name: "Mel-frequency Analysis", desc: "Audio preprocessing" },
    ],
  };

  const targetAudience = [
    {
      icon: "💼",
      title: "For ML Engineers",
      subtitle: "Learn CNN interpretability techniques",
      description: "Deep dive into explainable AI with real-world audio classification. See how ResNet layers process mel-spectrograms and understand feature extraction at every level.",
      points: [
        "Visualize convolutional layer activations",
        "Understand feature map progression",
        "Learn interpretability best practices",
        "Study production ML deployment",
      ],
    },
    {
      icon: "🎓",
      title: "For Students",
      subtitle: "Understand deep learning visually",
      description: "Bridge the gap between theory and practice with interactive neural network visualizations. Perfect for learning how CNNs actually work under the hood.",
      points: [
        "Interactive learning experience",
        "Visual understanding of CNNs",
        "Real-time feedback loops",
        "Hands-on audio ML exposure",
      ],
    },
    {
      icon: "🔬",
      title: "For Researchers",
      subtitle: "Explore explainable AI in audio domain",
      description: "Investigate how deep networks learn audio representations. Use MelMage as a foundation for your own explainable AI research in the audio domain.",
      points: [
        "Complete model transparency",
        "Reproducible research setup",
        "Open-source methodology",
        "Extensible architecture",
      ],
    },
    {
      icon: "👨‍💻",
      title: "For Developers",
      subtitle: "See full-stack ML deployment in action",
      description: "Learn modern ML deployment patterns with serverless infrastructure, containerization, and scalable web interfaces for AI applications.",
      points: [
        "Serverless ML deployment",
        "Modern web stack integration",
        "Scalable architecture patterns",
        "Production-ready codebase",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20 text-center text-white">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              MelMage
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-6">
              See What Your Audio CNN Actually Hears
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
              Real-time audio classification with complete neural network transparency. Understand 
              deep learning through interactive visualizations and explainable AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/demo">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  ▶ Try Live Demo
                </Button>
              </Link>
              <Link href="https://github.com/Vedant-Jayesh-Oza/MelMage" target="_blank">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white bg-transparent text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-4 text-lg rounded-lg transition-all"
                >
                  🔗 View Source Code
                </Button>
              </Link>
            </div>

            {/* Hero Visual */}
            <div className="relative max-w-4xl mx-auto mb-8">
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm opacity-80">Audio Waveform Visualization</div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">Live</span>
                  </div>
                </div>
                <div className="h-32 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg opacity-80 flex items-center justify-center">
                  <div className="flex items-end space-x-1 h-20">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-white/60 rounded-t animate-pulse"
                        style={{
                          width: '4px',
                          height: `${15 + Math.sin(i * 0.3) * 15 + (i % 3) * 5}px`,
                          animationDelay: `${(i * 0.1) % 2}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">83.75%</div>
              <div className="text-lg opacity-90">Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50</div>
              <div className="text-lg opacity-90">Sound Classes</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Real-time</div>
              <div className="text-lg opacity-90">Processing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for <span className="text-purple-600">AI Transparency</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MelMage combines cutting-edge deep learning with explainable AI techniques, making
              neural network behavior accessible to everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "100", label: "Training Epochs" },
              { number: "2,000", label: "Audio Samples" },
              { number: "<100ms", label: "Inference Time" },
              { number: "Open", label: "Source Code" },
            ].map((stat, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-md">
                <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How MelMage Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How <span className="text-purple-600">MelMage</span> Works
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to understand your audio CNN completely
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {[
              {
                step: "1",
                icon: "📁",
                title: "Upload Audio",
                description: "Drag & drop any WAV file or record directly in your browser. Supports various audio formats and sample rates.",
                detail: "Built-in audio preprocessing and validation",
              },
              {
                step: "2",
                icon: "🧠",
                title: "AI Processing",
                description: "CNN analyzes Mel-spectrograms through multiple ResNet layers on serverless GPU infrastructure.",
                detail: "Real-time feature extraction and classification",
              },
              {
                step: "3",
                icon: "👁️",
                title: "Visualize Results",
                description: "See predictions alongside internal feature maps from every layer of the neural network.",
                detail: "Complete transparency from input to output",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <div className="text-4xl mb-4">{step.icon}</div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 mb-3 leading-relaxed">{step.description}</p>
                <p className="text-purple-600 font-medium">{step.detail}</p>
              </div>
            ))}
          </div>

          {/* Video Demo Section */}
          <div className="text-center">
            <Card className="max-w-4xl mx-auto border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <video
                    className="w-full h-auto"
                    controls
                    poster="/demo-poster.jpg"
                    preload="metadata"
                  >
                    <source src="/demo.mov" type="video/mp4" />
                    <source src="/demo.mov" type="video/quicktime" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 pointer-events-none"></div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Watch MelMage in Action</h3>
                  <p className="text-gray-600">See the complete workflow from audio upload to neural network visualization</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built with <span className="text-purple-600">Cutting-Edge Tech</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MelMage leverages the latest in machine learning, serverless infrastructure, and modern
              web development to deliver a world-class experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(techStack).map(([category, techs]) => (
              <Card key={category} className="border-0 shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 text-purple-600 border-l-4 border-purple-600 pl-4">
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {techs.map((tech) => (
                      <div key={tech.name} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <div>
                          <div className="font-medium text-gray-900">{tech.name}</div>
                          <div className="text-sm text-gray-600">{tech.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for <span className="text-purple-600">Everyone</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you&apos;re learning, researching, or building production ML systems, MelMage
              provides value at every level of expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {targetAudience.map((audience, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-4">{audience.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{audience.title}</h3>
                      <p className="text-purple-600 font-medium">{audience.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{audience.description}</p>
                  <ul className="space-y-2">
                    {audience.points.map((point, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Educational Impact */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-12 text-center">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Educational Impact</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                MelMage makes complex AI concepts accessible through visualization, helping bridge the
                gap between theoretical knowledge and practical understanding.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Visual", desc: "Learning through interactive visualization", color: "purple" },
                  { title: "Practical", desc: "Real-world audio classification tasks", color: "blue" },
                  { title: "Open", desc: "Complete transparency and source access", color: "green" },
                ].map((impact, i) => (
                  <div key={i} className="text-center">
                    <div className={`text-2xl font-bold mb-2 text-${impact.color}-600`}>{impact.title}</div>
                    <p className="text-gray-600">{impact.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Explore AI Transparency?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Start understanding how your audio CNN actually works. Upload an audio file and see every layer in action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-12 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Get Started Now
              </Button>
            </Link>
            <Link href="https://github.com/Vedant-Jayesh-Oza/MelMage" target="_blank">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white bg-transparent text-white hover:bg-white hover:text-purple-600 font-semibold px-12 py-4 text-lg rounded-lg transition-all"
              >
                View on GitHub
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                MelMage
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Explainable AI for audio classification. Understanding neural networks through interactive visualization.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links</h4>
              <div className="space-y-2">
                <div><Link href="/demo" className="text-gray-400 hover:text-white transition-colors">Try Demo</Link></div>
                <div><Link href="https://github.com/Vedant-Jayesh-Oza/MelMage" target="_blank" className="text-gray-400 hover:text-white transition-colors">GitHub</Link></div>
                <div><a href="https://github.com/Vedant-Jayesh-Oza/MelMage/tree/main#readme" className="text-gray-400 hover:text-white transition-colors">Documentation</a></div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Built With</h4>
              <p className="text-gray-400">
                PyTorch • Modal Labs • Next.js • React • Tailwind CSS
              </p>
              <p className="text-gray-400 mt-4">
                © 2025 MelMage. Open source project.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;