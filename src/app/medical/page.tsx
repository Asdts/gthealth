/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, FileText, AlertCircle } from "lucide-react";
import { useToast } from "@/components/ui/toast";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MedicalAnalyzer() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [analysis, setAnalysis] = useState<any>(null);
  const [previousReports, setPreviousReports] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState("upload");
  const { toast } = useToast();

  // Simulate fetching previous reports on component mount
  useState(() => {
    fetchPreviousReports();
  });

  const fetchPreviousReports = async () => {
    try {
      // Replace with actual API call
      const response = await fetch("/api/reports");
      if (response.ok) {
        const data = await response.json();
        setPreviousReports(data.reports || []);
      }
    } catch (error) {
      console.error("Error fetching previous reports:", error);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      // Validate file type (PDF or image)
      if (
        selectedFile.type === "application/pdf" ||
        selectedFile.type.startsWith("image/")
      ) {
        setFile(selectedFile);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or image file.",
          variant: "destructive",
        });
      }
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) {
      if (
        droppedFile.type === "application/pdf" ||
        droppedFile.type.startsWith("image/")
      ) {
        setFile(droppedFile);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or image file.",
          variant: "destructive",
        });
      }
    }
  };

  const analyzeReport = async () => {
    if (!file) return;

    setLoading(true);
    setProgress(0);
    
    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(progressInterval);
          return 95;
        }
        return prev + 5;
      });
    }, 300);

    try {
      // Create form data
      const formData = new FormData();
      formData.append("file", file);
      formData.append("fileName", file.name);
      formData.append("fileType", file.type);

      // Replace with actual API endpoint
      const response = await fetch("/api/analyze-report", {
        method: "POST",
        body: formData,
      });

      clearInterval(progressInterval);
      setProgress(100);

      if (response.ok) {
        const result = await response.json();
        setAnalysis(result);
        toast({
          title: "Analysis complete",
          description: "Your medical report has been analyzed successfully.",
        });
        
        // Refresh previous reports list
        fetchPreviousReports();
      } else {
        throw new Error("Failed to analyze report");
      }
    } catch (error) {
      toast({
        title: "Analysis failed",
        description: "There was an error analyzing your report. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      clearInterval(progressInterval);
      setProgress(0);
    }
  };

  const viewPreviousReport = async (reportId: string) => {
    try {
      // Replace with actual API call
      const response = await fetch(`/api/reports/${reportId}`);
      if (response.ok) {
        const data = await response.json();
        setAnalysis(data);
        setActiveTab("results");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load the report details.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="medical-analyzer" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
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
                <span className="text-lg">✔️ Secure Storage</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-lg">✔️ Historical Tracking</span>
              </li>
            </ul>
          </div>
          
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="upload">Upload New</TabsTrigger>
                  <TabsTrigger value="previous">Previous Reports</TabsTrigger>
                </TabsList>
                
                <TabsContent value="upload" className="mt-6">
                  {!analysis ? (
                    <div
                      className="border-2 border-dashed border-muted-foreground/25 rounded-lg h-[400px] flex flex-col items-center justify-center p-6"
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                    >
                      {file ? (
                        <div className="text-center">
                          <FileText className="h-16 w-16 mx-auto mb-4 text-primary" />
                          <h3 className="text-xl font-bold">{file.name}</h3>
                          <p className="text-muted-foreground mb-6">
                            {(file.size / 1024 / 1024).toFixed(2)} MB • {file.type}
                          </p>
                          {loading ? (
                            <div className="w-full">
                              <Progress value={progress} className="mb-2" />
                              <p className="text-sm text-center text-muted-foreground">
                                Analyzing your report...
                              </p>
                            </div>
                          ) : (
                            <div className="flex gap-4 justify-center">
                              <Button
                                variant="outline"
                                onClick={() => setFile(null)}
                              >
                                Remove
                              </Button>
                              <Button onClick={analyzeReport}>Analyze Now</Button>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="text-center">
                          <Upload className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                          <h3 className="text-2xl font-bold">Upload Your Report</h3>
                          <p className="text-muted-foreground mb-6">
                            Drag and drop or click to upload your medical report
                          </p>
                          <input
                            type="file"
                            id="report-upload"
                            className="hidden"
                            accept="application/pdf,image/*"
                            onChange={handleFileChange}
                          />
                          <label htmlFor="report-upload">
                            <span>
                              <Button>Upload Report</Button>
                            </span>
                          </label>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="h-[400px] overflow-y-auto p-4">
                      <h3 className="text-2xl font-bold mb-4">Report Analysis</h3>
                      
                      {/* Basic summary */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-2">Summary</h4>
                        <p>{analysis.summary || "No summary available"}</p>
                      </div>
                      
                      {/* Key findings */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-2">Key Findings</h4>
                        <ul className="list-disc pl-6 space-y-2">
                          {analysis.findings?.map((finding: string, idx: number) => (
                            <li key={idx}>{finding}</li>
                          )) || <li>No findings available</li>}
                        </ul>
                      </div>
                      
                      {/* Recommendations */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-2">Recommendations</h4>
                        <ul className="list-disc pl-6 space-y-2">
                          {analysis.recommendations?.map((rec: string, idx: number) => (
                            <li key={idx}>{rec}</li>
                          )) || <li>No recommendations available</li>}
                        </ul>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => setAnalysis(null)}
                      >
                        Upload Another Report
                      </Button>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="previous" className="mt-6">
                  <div className="h-[400px] overflow-y-auto">
                    {previousReports.length > 0 ? (
                      <div className="space-y-4">
                        {previousReports.map((report) => (
                          <Card key={report.id} className="cursor-pointer hover:bg-muted/50" onClick={() => viewPreviousReport(report.id)}>
                            <CardContent className="p-4">
                              <div className="flex justify-between items-center">
                                <div>
                                  <h4 className="font-medium">{report.name || "Unnamed Report"}</h4>
                                  <p className="text-sm text-muted-foreground">
                                    {new Date(report.createdAt).toLocaleDateString()}
                                  </p>
                                </div>
                                <FileText className="h-5 w-5 text-muted-foreground" />
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-center">
                        <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
                        <h3 className="text-xl font-medium">No Previous Reports</h3>
                        <p className="text-muted-foreground mb-6">
                          Upload your first report to get started
                        </p>
                        <Button onClick={() => setActiveTab("upload")}>
                          Upload Now
                        </Button>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}