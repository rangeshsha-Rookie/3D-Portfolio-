import { useState, useRef } from "react";
import { Upload, Loader2, Sparkles, X, BrainCircuit } from "lucide-react";
import { GoogleGenAI, ThinkingLevel } from "@google/genai";
import ReactMarkdown from "react-markdown";

const AIAnalyzer = () => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async () => {
    if (!image) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const base64Data = image.split(',')[1];
      const mimeType = image.split(';')[0].split(':')[1];

      const response = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: {
          parts: [
            {
              inlineData: {
                data: base64Data,
                mimeType: mimeType,
              },
            },
            {
              text: "Analyze this image in detail. What do you see? Provide a comprehensive breakdown.",
            },
          ],
        },
        config: {
          thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH }
        }
      });

      setResult(response.text || "No analysis generated.");
    } catch (error) {
      console.error("Error analyzing image:", error);
      setResult("Failed to analyze image. Please check console for details.");
    } finally {
      setLoading(false);
    }
  };

  const clearImage = () => {
    setImage(null);
    setResult(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="w-full h-[500px] bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-[0_0_30px_rgba(0,240,255,0.1)] relative group">
      {/* Header */}
      <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
        <div className="flex items-center gap-2">
          <BrainCircuit className="text-[#00f0ff] w-5 h-5" />
          <h3 className="text-white font-mono font-semibold text-sm tracking-wider">VISION_ANALYSIS_NODE</h3>
        </div>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col gap-4 overflow-y-auto custom-scrollbar">
        {!image ? (
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="flex-1 border-2 border-dashed border-white/20 rounded-xl flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-[#00f0ff]/50 hover:bg-[#00f0ff]/5 transition-all duration-300 group/upload"
          >
            <div className="w-16 h-16 rounded-full bg-[#151030] flex items-center justify-center group-hover/upload:scale-110 transition-transform duration-300 shadow-lg">
              <Upload className="w-8 h-8 text-[#00f0ff]" />
            </div>
            <div className="text-center">
              <p className="text-white font-medium">Upload an image</p>
              <p className="text-secondary text-sm mt-1">Click or drag and drop</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 h-full">
            <div className="relative w-full h-48 rounded-xl overflow-hidden border border-white/10 shrink-0">
              <img src={image} alt="Upload preview" className="w-full h-full object-cover" />
              <button 
                onClick={clearImage}
                className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-red-500/80 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {!result && !loading && (
              <button
                onClick={analyzeImage}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#915EFF] to-[#00f0ff] text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(0,240,255,0.3)] shrink-0"
              >
                <Sparkles className="w-5 h-5" />
                Analyze with Gemini 3.1 Pro
              </button>
            )}

            {loading && (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 py-8">
                <Loader2 className="w-10 h-10 text-[#00f0ff] animate-spin" />
                <p className="text-[#00f0ff] font-mono text-sm animate-pulse text-center">
                  Processing visual data...<br/>
                  <span className="text-xs text-secondary">High thinking enabled</span>
                </p>
              </div>
            )}

            {result && (
              <div className="flex-1 bg-black/40 rounded-xl p-4 border border-white/5 overflow-y-auto custom-scrollbar">
                <div className="markdown-body text-sm text-white/90 leading-relaxed">
                  <ReactMarkdown>{result}</ReactMarkdown>
                </div>
              </div>
            )}
          </div>
        )}
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleImageUpload} 
          accept="image/*" 
          className="hidden" 
        />
      </div>
    </div>
  );
};

export default AIAnalyzer;
