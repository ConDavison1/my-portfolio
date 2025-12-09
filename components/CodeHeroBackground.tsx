import React, { useEffect, useState } from 'react';

const SNIPPETS = [
  `// Initializing Go Server...
func main() {
    r := gin.Default()
    r.GET("/api/v1/health", func(c *gin.Context) {
        c.JSON(200, gin.H{
            "status": "active",
            "uptime": time.Since(startTime),
        })
    })
    r.Run(":8080")
}`,
  `# Configuring Docker Container
FROM golang:1.21-alpine
WORKDIR /app
COPY go.mod ./
RUN go mod download
COPY . .
RUN go build -o main .
EXPOSE 8080
CMD ["./main"]`,
  `// C# .NET Core Middleware
public async Task InvokeAsync(HttpContext context)
{
    var sw = Stopwatch.StartNew();
    await _next(context);
    sw.Stop();
    
    _logger.LogInformation(
        "Request {method} {url} => {statusCode} in {elapsed}ms",
        context.Request.Method,
        context.Request.Path,
        context.Response.StatusCode,
        sw.ElapsedMilliseconds
    );
}`
];

const CodeHeroBackground: React.FC = () => {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const snippet = SNIPPETS[currentSnippet];

    if (isTyping) {
      if (displayedText.length < snippet.length) {
        // Typing
        timeout = setTimeout(() => {
          setDisplayedText(snippet.slice(0, displayedText.length + 1));
        }, 30 + Math.random() * 30); // Random typing speed
      } else {
        // Finished typing, wait before deleting
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 3000);
      }
    } else {
      // Deleting
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 10); // Fast delete
      } else {
        // Finished deleting, next snippet
        setCurrentSnippet((prev) => (prev + 1) % SNIPPETS.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, currentSnippet]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center opacity-50 md:opacity-30">
      <div className="w-full max-w-4xl mx-auto transform -rotate-3 scale-110">
        <pre className="font-mono text-accent text-sm md:text-base leading-relaxed p-8 whitespace-pre-wrap shadow-2xl drop-shadow-[0_0_10px_rgba(16,185,129,0.2)]">
          {displayedText}
          <span className="animate-pulse inline-block w-2 h-4 bg-accent ml-1 align-middle shadow-[0_0_10px_#10b981]"></span>
        </pre>
      </div>
      
      {/* Overlay gradient to fade out edges */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-bg-dark"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-transparent to-bg-dark"></div>
    </div>
  );
};

export default CodeHeroBackground;