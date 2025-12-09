import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Minus, Square } from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES } from '../constants';

const Terminal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{type: 'input' | 'output', content: string}>>([
    { type: 'output', content: 'Welcome to ConnorOS v1.0.0' },
    { type: 'output', content: 'Type "help" to see available commands.' }
  ]);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let output = '';

    switch (cleanCmd) {
      case 'help':
        output = 'Available commands:\n  about     - Display summary\n  skills    - List technical skills\n  contact   - Show contact info\n  clear     - Clear terminal\n  exit      - Close terminal';
        break;
      case 'about':
        output = PERSONAL_INFO.summary;
        break;
      case 'skills':
        output = SKILL_CATEGORIES.map(cat => `[${cat.category}]\n  ${cat.skills.join(', ')}`).join('\n\n');
        break;
      case 'contact':
        output = `Email: ${PERSONAL_INFO.email}\nGitHub: ${PERSONAL_INFO.github}\nLinkedIn: ${PERSONAL_INFO.linkedin}`;
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'exit':
        setIsOpen(false);
        return;
      case 'sudo':
        output = 'Permission denied: you are not Connor.';
        break;
      case '':
        return;
      default:
        output = `Command not found: ${cleanCmd}. Type "help" for a list of commands.`;
    }

    setHistory(prev => [
      ...prev, 
      { type: 'input', content: cmd },
      { type: 'output', content: output }
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-bg-dark border border-accent/20 text-accent p-4 rounded-full shadow-lg hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:bg-accent/10 transition-all hover:scale-110 group"
        aria-label="Open Terminal"
      >
        <TerminalIcon className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-bg-card px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
          Launch Terminal
        </span>
      </button>
    );
  }

  if (isMinimized) {
    return (
      <button 
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-6 right-6 z-50 bg-bg-card border border-white/10 text-text-secondary px-4 py-3 rounded-t-lg shadow-lg flex items-center gap-2 hover:text-white min-w-[200px]"
      >
        <TerminalIcon className="w-4 h-4" />
        <span className="text-sm font-mono">connor@portfolio:~</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[600px] h-[400px] bg-bg-dark/95 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl flex flex-col font-mono text-sm overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
      {/* Title Bar */}
      <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/5 handle cursor-move">
        <div className="flex items-center gap-2 text-text-secondary">
          <TerminalIcon className="w-4 h-4" />
          <span>connor@portfolio:~</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setIsMinimized(true)} className="p-1 hover:bg-white/10 rounded text-text-secondary hover:text-white">
            <Minus className="w-3 h-3" />
          </button>
          <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-red-500/20 rounded text-text-secondary hover:text-red-400">
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        className="flex-1 p-4 overflow-y-auto custom-scrollbar"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((entry, idx) => (
          <div key={idx} className="mb-2">
            {entry.type === 'input' ? (
              <div className="flex gap-2 text-text-secondary">
                <span className="text-accent">➜</span>
                <span className="text-accent">~</span>
                <span>{entry.content}</span>
              </div>
            ) : (
              <div className="text-gray-300 whitespace-pre-wrap ml-4">{entry.content}</div>
            )}
          </div>
        ))}
        
        <form onSubmit={handleSubmit} className="flex gap-2 text-text-secondary">
          <span className="text-accent">➜</span>
          <span className="text-accent">~</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-white border-none p-0 focus:ring-0"
            autoFocus
            spellCheck={false}
          />
        </form>
        <div ref={endRef} />
      </div>
    </div>
  );
};

export default Terminal;