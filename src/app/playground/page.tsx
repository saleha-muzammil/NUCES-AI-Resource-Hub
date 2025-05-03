"use client";

import React, { useState, useEffect, useRef } from "react";

interface Neuron {
  x: number;
  y: number;
  connections: number[];
  value?: number;
  activatedValue?: number;
}

interface Point {
  x: number;
  y: number;
  cluster?: number;
}

interface Centroid {
  x: number;
  y: number;
  color: string;
}

interface Layer {
  size: number;
  activationFunction: 'sigmoid' | 'relu' | 'tanh' | 'none';
}

function NeuralNetworkDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [layers, setLayers] = useState<Layer[]>([
    { size: 3, activationFunction: 'none' },
    { size: 4, activationFunction: 'sigmoid' },
    { size: 2, activationFunction: 'sigmoid' }
  ]);
  const [neurons, setNeurons] = useState<Neuron[]>([]);
  const [weights, setWeights] = useState<number[][]>([]);
  const [selectedNeuron, setSelectedNeuron] = useState<number | null>(null);
  const [explanation, setExplanation] = useState<string>("");
  const [inputValues, setInputValues] = useState<number[]>([]);
  const [outputValues, setOutputValues] = useState<number[]>([]);
  const [isForwardPass, setIsForwardPass] = useState<boolean>(false);
  const [forwardPassSteps, setForwardPassSteps] = useState<string[]>([]);

  // Activation functions
  const activationFunctions = {
    sigmoid: (x: number) => 1 / (1 + Math.exp(-x)),
    relu: (x: number) => Math.max(0, x),
    tanh: (x: number) => Math.tanh(x),
    none: (x: number) => x
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 600;
    canvas.height = 400;

    // Calculate neuron positions and initialize weights
    const newNeurons: Neuron[] = [];
    const newWeights: number[][] = [];
    const layerSpacing = canvas.width / (layers.length + 1);
    const maxNeurons = Math.max(...layers.map(l => l.size));
    const neuronSpacing = canvas.height / (maxNeurons + 1);

    let neuronIndex = 0;
    layers.forEach((layer, layerIndex) => {
      const x = layerSpacing * (layerIndex + 1);
      const yOffset = (canvas.height - (layer.size * neuronSpacing)) / 2;

      for (let i = 0; i < layer.size; i++) {
        const y = yOffset + (i + 1) * neuronSpacing;
        newNeurons.push({
          x,
          y,
          connections: layerIndex < layers.length - 1 
            ? Array.from({ length: layers[layerIndex + 1].size }, (_, i) => i)
            : [],
          value: layerIndex === 0 && i < inputValues.length ? inputValues[i] : undefined,
          activatedValue: undefined
        });

        // Initialize weights for this neuron's connections
        if (layerIndex < layers.length - 1) {
          newWeights[neuronIndex] = Array(layers[layerIndex + 1].size).fill(0).map(() => 
            +(Math.random() * 2 - 1).toFixed(2)
          );
        }
        neuronIndex++;
      }
    });

    setNeurons(newNeurons);
    setWeights(newWeights);
  }, [layers, inputValues]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw connections with weights
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    neurons.forEach((neuron, i) => {
      neuron.connections.forEach((targetIndex, j) => {
        const targetNeuron = neurons[targetIndex];
        if (targetNeuron) {
          // Draw line
          ctx.beginPath();
          ctx.moveTo(neuron.x, neuron.y);
          ctx.lineTo(targetNeuron.x, targetNeuron.y);
          ctx.strokeStyle = selectedNeuron === i ? '#9333ea' : '#e2e8f0';
          ctx.lineWidth = selectedNeuron === i ? 2 : 1;
          ctx.stroke();

          // Draw weight
          const midX = (neuron.x + targetNeuron.x) / 2;
          const midY = (neuron.y + targetNeuron.y) / 2;
          ctx.fillStyle = '#64748b';
          ctx.fillText(weights[i]?.[j]?.toFixed(2) || '0.00', midX, midY - 5);
        }
      });
    });

    // Draw neurons
    neurons.forEach((neuron, i) => {
      // Draw neuron circle
      ctx.beginPath();
      ctx.arc(neuron.x, neuron.y, 15, 0, Math.PI * 2);
      ctx.fillStyle = selectedNeuron === i ? '#9333ea' : '#ffffff';
      ctx.strokeStyle = '#9333ea';
      ctx.lineWidth = 2;
      ctx.fill();
      ctx.stroke();

      // Draw neuron index
      ctx.fillStyle = '#000';
      ctx.fillText(i.toString(), neuron.x, neuron.y + 4);

      // Draw neuron value if available
      if (neuron.value !== undefined) {
        ctx.fillStyle = '#000';
        ctx.font = '10px Arial';
        ctx.fillText(neuron.value.toFixed(2), neuron.x, neuron.y - 20);
      }

      // Draw activated value if available
      if (neuron.activatedValue !== undefined) {
        ctx.fillStyle = '#9333ea';
        ctx.font = '10px Arial';
        ctx.fillText(neuron.activatedValue.toFixed(2), neuron.x, neuron.y + 20);
      }
    });
  }, [neurons, weights, selectedNeuron]);

  const handleLayerChange = (index: number, value: number) => {
    const newLayers = [...layers];
    newLayers[index] = { ...newLayers[index], size: Math.max(1, Math.min(8, value)) };
    setLayers(newLayers);
    setSelectedNeuron(null);
    setExplanation("");
    setIsForwardPass(false);
    setForwardPassSteps([]);
  };

  const handleActivationChange = (index: number, functionName: 'sigmoid' | 'relu' | 'tanh' | 'none') => {
    const newLayers = [...layers];
    newLayers[index] = { ...newLayers[index], activationFunction: functionName };
    setLayers(newLayers);
    setIsForwardPass(false);
    setForwardPassSteps([]);
  };

  const handleInputChange = (index: number, value: string) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = parseFloat(value) || 0;
    setInputValues(newInputValues);
    setIsForwardPass(false);
    setForwardPassSteps([]);
  };

  const handleNeuronClick = (index: number) => {
    setSelectedNeuron(index);
    const neuron = neurons[index];
    const layerIndex = layers.findIndex((layer, i, arr) => {
      const start = arr.slice(0, i).reduce((sum, l) => sum + l.size, 0);
      return index >= start && index < start + layer.size;
    });

    let explanation = `Neuron ${index} (Layer ${layerIndex + 1}):\n`;
    explanation += `Activation function: ${layers[layerIndex].activationFunction}\n`;
    
    if (neuron.value !== undefined) {
      explanation += `Input value: ${neuron.value.toFixed(4)}\n`;
    }
    
    if (neuron.activatedValue !== undefined) {
      explanation += `Activated value: ${neuron.activatedValue.toFixed(4)}\n`;
    }
    
    if (layerIndex < layers.length - 1) {
      explanation += `\nConnections to next layer:\n`;
      neuron.connections.forEach((targetIndex, i) => {
        explanation += `→ Neuron ${targetIndex}: weight = ${weights[index]?.[i]?.toFixed(4)}\n`;
      });
    } else {
      explanation += "\nOutput neuron - no outgoing connections";
    }
    setExplanation(explanation);
  };

  const performForwardPass = () => {
    if (inputValues.length === 0) return;
    
    setIsForwardPass(true);
    setForwardPassSteps([]);
    
    // Reset neuron values except inputs
    const newNeurons = neurons.map((neuron, i) => {
      const layerIndex = layers.findIndex((layer, idx, arr) => {
        const start = arr.slice(0, idx).reduce((sum, l) => sum + l.size, 0);
        return i >= start && i < start + layer.size;
      });
      
      if (layerIndex === 0) {
        // Input layer - keep input values
        return neuron;
      } else {
        // Other layers - reset values
        return { ...neuron, value: undefined, activatedValue: undefined };
      }
    });
    
    setNeurons(newNeurons);
    
    // Process each layer
    const currentNeurons = [...newNeurons];
    const steps: string[] = [];
    
    for (let layerIndex = 1; layerIndex < layers.length; layerIndex++) {
      const layer = layers[layerIndex];
      const prevLayer = layers[layerIndex - 1];
      
      steps.push(`\nProcessing Layer ${layerIndex + 1} (${layer.activationFunction}):`);
      
      // Calculate start and end indices for this layer
      const layerStart = layers.slice(0, layerIndex).reduce((sum, l) => sum + l.size, 0);
      const layerEnd = layerStart + layer.size;
      
      // Process each neuron in this layer
      for (let i = layerStart; i < layerEnd; i++) {
        const neuron = currentNeurons[i];
        let sum = 0;
        let calculation = `Neuron ${i}: sum = `;
        
        // Find neurons from previous layer that connect to this neuron
        const prevLayerStart = layers.slice(0, layerIndex - 1).reduce((sum, l) => sum + l.size, 0);
        const prevLayerEnd = prevLayerStart + prevLayer.size;
        
        for (let j = prevLayerStart; j < prevLayerEnd; j++) {
          const prevNeuron = currentNeurons[j];
          const connectionIndex = prevNeuron.connections.indexOf(i - layerStart);
          
          if (connectionIndex !== -1 && prevNeuron.activatedValue !== undefined) {
            const weight = weights[j][connectionIndex];
            sum += prevNeuron.activatedValue * weight;
            calculation += `${prevNeuron.activatedValue.toFixed(4)} × ${weight.toFixed(4)} + `;
          }
        }
        
        calculation = calculation.slice(0, -3) + ` = ${sum.toFixed(4)}`;
        steps.push(calculation);
        
        // Apply activation function
        const activatedValue = activationFunctions[layer.activationFunction](sum);
        steps.push(`Activated value = ${layer.activationFunction}(${sum.toFixed(4)}) = ${activatedValue.toFixed(4)}`);
        
        // Update neuron values
        currentNeurons[i] = {
          ...neuron,
          value: sum,
          activatedValue
        };
      }
    }
    
    setNeurons(currentNeurons);
    setForwardPassSteps(steps);
    
    // Extract output values
    const outputLayerStart = layers.slice(0, layers.length - 1).reduce((sum, l) => sum + l.size, 0);
    const outputValues = currentNeurons
      .slice(outputLayerStart)
      .map(n => n.activatedValue || 0);
    
    setOutputValues(outputValues);
  };

  return (
    <div className="p-6 bg-white/80 rounded-xl shadow-lg w-full">
      <h2 className="text-xl font-bold mb-4 text-purple-700">Neural Network Visualizer</h2>
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-4 mb-4">
          {layers.map((layer, index) => (
            <div key={index} className="flex flex-col items-center">
              <label className="text-sm text-gray-600">
                {index === 0 ? 'Input' : index === layers.length - 1 ? 'Output' : 'Hidden'} Layer
              </label>
              <input
                type="number"
                min="1"
                max="8"
                value={layer.size}
                onChange={(e) => handleLayerChange(index, parseInt(e.target.value))}
                className="w-20 px-2 py-1 border rounded mb-2"
              />
              {index > 0 && (
                <select
                  value={layer.activationFunction}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onChange={(e) => handleActivationChange(index, e.target.value as any)}
                  className="w-24 px-2 py-1 border rounded text-sm"
                >
                  <option value="sigmoid">Sigmoid</option>
                  <option value="relu">ReLU</option>
                  <option value="tanh">Tanh</option>
                  <option value="none">None</option>
                </select>
              )}
            </div>
          ))}
        </div>
        
        <div className="flex gap-4 mb-4">
          <div className="flex flex-col items-center">
            <label className="text-sm text-gray-600">Input Values</label>
            <div className="flex gap-2">
              {Array(layers[0].size).fill(0).map((_, i) => (
                <input
                  key={i}
                  type="number"
                  value={inputValues[i] || 0}
                  onChange={(e) => handleInputChange(i, e.target.value)}
                  className="w-16 px-2 py-1 border rounded"
                  placeholder={`x${i+1}`}
                />
              ))}
            </div>
          </div>
          <button
            onClick={performForwardPass}
            disabled={isForwardPass || inputValues.length === 0}
            className={`px-4 py-2 rounded ${
              isForwardPass || inputValues.length === 0
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-purple-600 hover:bg-purple-700 text-white'
            }`}
          >
            Run Forward Pass
          </button>
        </div>
        
        <div className="flex gap-4 w-full">
          <div className="flex-1">
            <canvas
              ref={canvasRef}
              className="border border-gray-200 rounded-lg bg-white cursor-pointer w-full"
              onClick={(e) => {
                const rect = canvasRef.current?.getBoundingClientRect();
                if (!rect) return;
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const clickedNeuron = neurons.findIndex(neuron => {
                  const dx = neuron.x - x;
                  const dy = neuron.y - y;
                  return Math.sqrt(dx * dx + dy * dy) < 15;
                });
                if (clickedNeuron !== -1) {
                  handleNeuronClick(clickedNeuron);
                } else {
                  setSelectedNeuron(null);
                  setExplanation("");
                }
              }}
            />
            {outputValues.length > 0 && (
              <div className="mt-2 flex justify-center gap-4">
                <div className="text-sm text-gray-600">
                  Output: [{outputValues.map(v => v.toFixed(4)).join(', ')}]
                </div>
              </div>
            )}
          </div>
          <div className="w-80 h-[400px] overflow-y-auto bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              {explanation ? 'Neuron Details:' : 'Forward Pass Steps:'}
            </h3>
            <pre className="text-xs text-gray-600 whitespace-pre-wrap">
              {explanation || forwardPassSteps.join('\n')}
            </pre>
          </div>
        </div>
        <div className="text-sm text-gray-600 mt-2">
          Click on neurons to see their details. Adjust layer sizes and activation functions, then input values and run forward pass.
        </div>
      </div>
    </div>
  );
}

function ClusteringDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [points, setPoints] = useState<Point[]>([]);
  const [centroids, setCentroids] = useState<Centroid[]>([]);
  const [k, setK] = useState(3);
  const [isRunning, setIsRunning] = useState(false);
  const [colors] = useState(['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899']);
  const [step, setStep] = useState<string>("");
  const [iteration, setIteration] = useState<number>(0);
  const [calculations, setCalculations] = useState<string[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 600;
    canvas.height = 400;

    // Add click handler for adding points
    const handleClick = (e: MouseEvent) => {
      if (isRunning) return;
      
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setPoints(prev => [...prev, { x, y }]);
    };

    canvas.addEventListener('click', handleClick);
    return () => canvas.removeEventListener('click', handleClick);
  }, [isRunning]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw points
    points.forEach((point) => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = point.cluster !== undefined ? colors[point.cluster] : '#64748b';
      ctx.fill();
    });

    // Draw centroids
    centroids.forEach((centroid) => {
      ctx.beginPath();
      ctx.arc(centroid.x, centroid.y, 8, 0, Math.PI * 2);
      ctx.fillStyle = centroid.color;
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.fill();
      ctx.stroke();
    });
  }, [points, centroids, colors]);

  const initializeCentroids = () => {
    if (points.length < k) return;
    
    const newCentroids: Centroid[] = [];
    const usedIndices = new Set<number>();
    
    for (let i = 0; i < k; i++) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * points.length);
      } while (usedIndices.has(randomIndex));
      
      usedIndices.add(randomIndex);
      newCentroids.push({
        x: points[randomIndex].x,
        y: points[randomIndex].y,
        color: colors[i]
      });
    }
    
    setCentroids(newCentroids);
  };

  const calculateDistance = (p1: Point, p2: Centroid) => {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const runKMeans = async () => {
    if (points.length < k) return;
    
    setIsRunning(true);
    setIteration(0);
    setCalculations([]);
    initializeCentroids();
    
    let iterations = 0;
    const maxIterations = 100;
    
    while (iterations < maxIterations) {
      setStep("Assigning points to nearest centroids...");
      setCalculations(prev => [...prev, `\nIteration ${iterations + 1}:`]);
      
      // Assign points to nearest centroid
      const newPoints = points.map(point => {
        let minDist = Infinity;
        let nearestCluster = 0;
        const distances = centroids.map((centroid, i) => {
          const dist = calculateDistance(point, centroid);
          if (dist < minDist) {
            minDist = dist;
            nearestCluster = i;
          }
          return `Distance to centroid ${i}: ${dist.toFixed(2)}`;
        });
        
        setCalculations(prev => [...prev, `Point (${point.x.toFixed(1)}, ${point.y.toFixed(1)}):`, ...distances, `Assigned to cluster ${nearestCluster}`]);
        
        return { ...point, cluster: nearestCluster };
      });
      
      setPoints(newPoints);
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setStep("Updating centroid positions...");
      // Update centroids
      const newCentroids = centroids.map((centroid, i) => {
        const clusterPoints = newPoints.filter(p => p.cluster === i);
        if (clusterPoints.length === 0) return centroid;
        
        const sumX = clusterPoints.reduce((sum, p) => sum + p.x, 0);
        const sumY = clusterPoints.reduce((sum, p) => sum + p.y, 0);
        const newX = sumX / clusterPoints.length;
        const newY = sumY / clusterPoints.length;
        
        setCalculations(prev => [...prev, 
          `\nCentroid ${i} update:`,
          `Old position: (${centroid.x.toFixed(1)}, ${centroid.y.toFixed(1)})`,
          `New position: (${newX.toFixed(1)}, ${newY.toFixed(1)})`,
          `Points in cluster: ${clusterPoints.length}`
        ]);
        
        return {
          x: newX,
          y: newY,
          color: centroid.color
        };
      });
      
      setCentroids(newCentroids);
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Check for convergence
      const hasConverged = newPoints.every((point, i) => 
        point.cluster === points[i].cluster
      );
      
      if (hasConverged) {
        setStep("Algorithm converged!");
        setCalculations(prev => [...prev, "\nAlgorithm converged - no more changes in cluster assignments"]);
        break;
      }
      
      iterations++;
      setIteration(iterations);
    }
    
    setIsRunning(false);
  };

  const handleReset = () => {
    setPoints([]);
    setCentroids([]);
    setIsRunning(false);
    setStep("");
    setIteration(0);
    setCalculations([]);
  };

  return (
    <div className="p-6 bg-white/80 rounded-xl shadow-lg w-full">
      <h2 className="text-xl font-bold mb-4 text-blue-700">K-Means Clustering</h2>
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-4 mb-4">
          <div className="flex flex-col items-center">
            <label className="text-sm text-gray-600">Number of Clusters (k)</label>
            <input
              type="number"
              min="2"
              max="6"
              value={k}
              onChange={(e) => setK(Math.max(2, Math.min(6, parseInt(e.target.value))))}
              className="w-20 px-2 py-1 border rounded"
              disabled={isRunning}
            />
          </div>
          <button
            onClick={runKMeans}
            disabled={isRunning || points.length < k}
            className={`px-4 py-2 rounded ${
              isRunning || points.length < k
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {isRunning ? 'Running...' : 'Run K-Means'}
          </button>
          <button
            onClick={handleReset}
            disabled={isRunning}
            className={`px-4 py-2 rounded ${
              isRunning
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-red-600 hover:bg-red-700 text-white'
            }`}
          >
            Reset
          </button>
        </div>
        <div className="flex gap-4 w-full">
          <div className="flex-1">
            <canvas
              ref={canvasRef}
              className="border border-gray-200 rounded-lg bg-white cursor-crosshair w-full"
            />
            {step && (
              <div className="mt-2 text-sm text-blue-600 font-medium">
                {step}
                {iteration > 0 && ` (Iteration ${iteration})`}
              </div>
            )}
          </div>
          <div className="w-80 h-[400px] overflow-y-auto bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Calculations:</h3>
            <pre className="text-xs text-gray-600 whitespace-pre-wrap">
              {calculations.join('\n')}
            </pre>
          </div>
        </div>
        <div className="text-sm text-gray-600 mt-2">
          Click on the canvas to add points. Set k and click Run K-Means to start clustering.
          Watch the calculations panel to see how the algorithm works step by step.
        </div>
      </div>
    </div>
  );
}

export default function Playground() {
  const [selected, setSelected] = useState<'nn' | 'clustering'>('nn');
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-yellow-50 via-purple-50 to-blue-50 p-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-2 drop-shadow-lg">AI Playground</h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">Experiment with interactive AI/ML concepts below!</p>
      </header>
      <nav className="flex gap-6 mb-8">
        <button onClick={() => setSelected('nn')} className={`px-6 py-2 rounded-full font-semibold shadow transition ${selected === 'nn' ? 'bg-purple-600 text-white' : 'bg-white text-purple-700 border border-purple-200'}`}>Neural Network</button>
        <button onClick={() => setSelected('clustering')} className={`px-6 py-2 rounded-full font-semibold shadow transition ${selected === 'clustering' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border border-blue-200'}`}>K-Means / K-Medoids</button>
      </nav>
      <main className="w-full max-w-2xl flex flex-col items-center">
        {selected === 'nn' ? <NeuralNetworkDemo /> : <ClusteringDemo />}
      </main>
    </div>
  );
}