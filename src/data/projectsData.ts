export interface Project {
  name: string;
  date: string;
  description: string;
  skills: string;
  url: string;
}

export const projects: Project[] = [
  {
    name: "Kepler Exoplanet Classifier",
    date: "Fall 2025",
    description:
      "Trained a neural network to detect if an object is potentially and exoplanet or not based on Kepler Space Observatory data. Achieved ~98% accuracy on the test set.",
    skills:"Tensorflow, Python, Pandas, Scikit-learn, Data Preprocessing",
    url: "https://github.com/vedachari/kepler-exoplanet/tree/main"
  },
  {
    name: "SVM Diabetes Classifier",
    date: "Summer 2025",
    description:
      "Built an SVM classifier with an RBF kernel to detect diabetes using the Pima Indians Diabetes dataset. Applied preprocessing techniques for missing values, outlier handling, and skewness correction. Achieved ~81% accuracy on the test set.",
    skills:"Python, Numpy, Pandas, Scikit-learn, SVM",
    url: "https://github.com/vedachari/Diabetes_SVM"
  },
  {
    name: "Chess Agent",
    date: "Fall 2024",
    description:
      "Implementing an AI chess agent using the Alpha-Beta pruning algorithm to efficiently search game trees. Developing custom heuristic functions to evaluate chess board states and guide the agent’s decisions by focusing on piece positioning and board control, improving its strategic play. Designing an optimized move ordering scheme to enhance the performance of Alpha-Beta pruning by examining more promising moves first.",
    skills:"AI, Java, Sepia Game Engine, Search Algorithms, Heuristic Development",
    url: ""
  },
  {
    name: "Brain Tumor Classifier",
    date: "Spring 2024",
    description:
      "Built and trained two CNN models in Python with TensorFlow to classify if MRI scans contain a tumor or not, and what type of tumor. Trained the models using the “Br35H :: Brain Tumor Detection 2020” data set from Kaggle. Classified whether an MRI brain scan contains a tumor or not with 97.67% accuracy. Classified the type of tumor in a MRI scan (pituitary, glioma, and meningioma) with 91.10% accuracy.",
    skills:"Machine Learning, Tensorflow, CNN Models, Python",
    url: "https://github.com/vechari/Brain-MRI-Tumor-Classification"
  },
  {
    name: "Arduino Lightsaber",
    date: "Spring 2021",
    description:
      "Created an Arduino-based light-up lightsaber in C++ with LED lights.Included 5 switchable lightsaber colors and impact flashing based on the Star Wars movies. Designed the internal circuit to include all functionality, and then designed and 3D printed the custom lightsaber hilt.",
    skills:"C++, Arduino, AutoCAD",
    url: "https://github.com/vedachari/neopixel-lightsaber"
  },
];
