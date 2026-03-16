import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Minus } from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES } from '../constants';

const Terminal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{type: 'input' | 'output', content: string}>>([
    { type: 'output', content: 'Welcome to ConnorOS v2.0.0' },
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
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 p-4 rounded-2xl bg-bg-card/80 backdrop-blur-xl border border-white/[0.06] text-accent hover:bg-bg-card hover:border-accent/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 group"
        aria-label="Open Terminal"
      >
        <TerminalIcon className="w-5 h-5" />
        <span className="absolute right-full mr-3 bg-bg-card/90 backdrop-blur-xl px-3 py-1.5 rounded-lg text-xs text-text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/[0.06] pointer-events-none">
          Launch Terminal
        </span>
      </button>
    );
  }

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-bg-card/90 backdrop-blur-xl border border-white/[0.06] text-text-secondary px-4 py-3 rounded-xl shadow-lg flex items-center gap-2 hover:text-text-primary min-w-[200px] transition-colors"
      >
        <TerminalIcon className="w-4 h-4 text-accent" />
        <span className="text-sm font-mono">connor@portfolio:~</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 md:left-auto md:bottom-6 md:right-6 z-50 w-full md:w-[600px] h-[50vh] md:h-[400px] bg-bg-primary/95 backdrop-blur-2xl border-t md:border border-white/[0.06] md:rounded-2xl shadow-2xl flex flex-col font-mono text-sm overflow-hidden"
      style={{ animation: 'slideUp 0.3s cubic-bezier(0.23, 1, 0.32, 1)' }}
    >
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Title Bar */}
      <div className="bg-white/[0.03] px-4 py-3 flex items-center justify-between border-b border-white/[0.04]">
        <div className="flex items-center gap-2 text-text-muted">
          <TerminalIcon className="w-4 h-4 text-accent" />
          <span className="text-xs">connor@portfolio:~</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setIsMinimized(true)} className="p-1.5 hover:bg-white/[0.06] rounded-lg text-text-muted hover:text-text-secondary transition-colors">
            <Minus className="w-3.5 h-3.5" />
          </button>
          <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-red-500/10 rounded-lg text-text-muted hover:text-red-400 transition-colors">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Content */}
      <div
        className="flex-1 p-4 overflow-y-auto"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((entry, idx) => (
          <div key={idx} className="mb-2">
            {entry.type === 'input' ? (
              <div className="flex gap-2 text-text-muted text-xs md:text-sm">
                <span className="text-accent">$</span>
                <span className="text-text-secondary">{entry.content}</span>
              </div>
            ) : (
              <div className="text-text-secondary/80 whitespace-pre-wrap ml-4 text-xs md:text-sm">{entry.content}</div>
            )}
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex gap-2 text-text-muted">
          <span className="text-accent">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-text-primary border-none p-0 focus:ring-0 text-base md:text-sm caret-accent"
            autoFocus
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
          />
        </form>
        <div ref={endRef} />
      </div>
    </div>
  );
};

export default Terminal;
