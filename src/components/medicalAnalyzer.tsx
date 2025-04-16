// File: components/MedicalAnalyzer.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { Upload, FileText, AlertCircle } from 'lucide-react';
import { useToast } from '@/components/ui/toast';

export default function MedicalAnalyzer() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type === 'application/pdf' || selectedFile.type.startsWith('image/')) {
        setFile(selectedFile);
        setError(null);
      } else {
        setError('Please upload a PDF or image file');
        toast({
          title: 'Invalid file type',
          description: 'Please upload a PDF or image file',
          variant: 'destructive',
        });
      }
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      if (droppedFile.type === 'application/pdf' || droppedFile.type.startsWith('image/')) {
        setFile(droppedFile);
        setError(null);
      } else {
        setError('Please upload a PDF or image file');
        toast({
          title: 'Invalid file type',
          description: 'Please upload a PDF or image file',
          variant: 'destructive',
        });
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const uploadFile = async () => {
    if (!file) return;

    setIsUploading(true);
    setAnalysis(null);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/analyze-report', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to analyze report');
      }

      const data = await response.json();
      setAnalysis(data.analysis);
      toast({
        title: 'Analysis Complete',
        description: 'Your medical report has been analyzed successfully.',
      });
    } catch (err) {
      console.error(err);
      setError('Failed to analyze the report. Please try again.');
      toast({
        title: 'Analysis Failed',
        description: 'There was an error analyzing your report.',
        variant: 'destructive',
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <section id="medical-analyzer" className="py-12 md:py-24 lg:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl mb-6">
            Medical Report Analyzer
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our AI-powered medical report analyzer helps you understand complex medical terminology and provides actionable insights.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <span className="text-lg">✔️ Accurate AI Analysis</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-lg">✔️ Actionable Insights</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-lg">✔️ Simplified Medical Terms</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-lg">✔️ Private & Secure</span>
            </li>
          </ul>
          {!file && (
            <Button className="mt-8" onClick={() => document.getElementById('fileInput')?.click()}>
              Try Medical Analyzer
            </Button>
          )}
        </div>
        <div className="bg-muted rounded-lg p-6">
          {!analysis ? (
            <div
              className="border-2 border-dashed border-muted-foreground/25 rounded-lg h-[400px] flex items-center justify-center"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {isUploading ? (
                <div className="text-center">
                  <Spinner className="h-8 w-8 mb-4 mx-auto" />
                  <h3 className="text-2xl font-bold">Analyzing Report</h3>
                  <p className="text-muted-foreground">Please wait while our AI analyzes your medical report...</p>
                </div>
              ) : (
                <div className="text-center p-6">
                  <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    accept="application/pdf,image/*"
                    onChange={handleFileChange}
                  />
                  {file ? (
                    <>
                      <FileText className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h3 className="text-2xl font-bold">{file.name}</h3>
                      <p className="text-muted-foreground mb-6">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                      <Button onClick={uploadFile}>Analyze Report</Button>
                      <Button variant="outline" className="ml-2" onClick={() => setFile(null)}>
                        Choose Different File
                      </Button>
                    </>
                  ) : (
                    <>
                      <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                      <h3 className="text-2xl font-bold">Upload Your Report</h3>
                      <p className="text-muted-foreground">Drag and drop or click to upload your medical report.</p>
                      <Button className="mt-6" onClick={() => document.getElementById('fileInput')?.click()}>
                        Upload Report
                      </Button>
                      {error && (
                        <div className="mt-4 text-destructive flex items-center gap-2">
                          <AlertCircle className="h-4 w-4" />
                          <span>{error}</span>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-lg h-[400px] overflow-y-auto">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Report Analysis</h3>
                <div className="prose">
                  <div dangerouslySetInnerHTML={{ __html: analysis }} />
                </div>
                <Button className="mt-6" onClick={() => {
                  setAnalysis(null);
                  setFile(null);
                }}>
                  Analyze Another Report
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}