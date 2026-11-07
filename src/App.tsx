import { useState } from 'react';
import { MessageSquare, FolderKanban, Terminal, Bot, Send } from 'lucide-react';

export default function App() {
  const [tab, setTab] = useState<'chat'|'workspace'|'terminal'>('chat');
  const [input, setInput] = useState('');

  const tabClass = (t: string) => {
    const base = 'flex flex-col items-center justify-center w-16 h-14 rounded-full transition-all ';
    return base + (tab === t ? 'bg-primary text-on-primary' : 'text-outline hover:bg-bg');
  };

  return (
    <div className="flex flex-col h-screen bg-bg text-text">
      <header className="h-16 flex items-center px-4 bg-bg sticky top-0 z-10 border-b border-surface/50">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3"><Bot size={18} className="text-primary" /></div>
        <h1 className="text-lg font-medium">Cuckoo Android</h1>
      </header>
      <main className="flex-1 overflow-hidden relative">
        {tab === 'chat' && (
          <div className="flex flex-col h-full">
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="flex gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0"><Bot size={16} className="text-primary" /></div>
                <div className="bg-surface p-3 rounded-2xl rounded-bl-sm text-sm max-w-[80%]">你好，我是 Cuckoo Agent。</div>
              </div>
            </div>
            <div className="p-4 pb-safe">
              <div className="flex items-center bg-surface rounded-full p-1 shadow-lg border border-surface">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="给 Agent 发消息..." className="flex-1 bg-transparent px-4 py-2 text-sm outline-none" />
                <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary active:scale-95 transition-transform"><Send size={16} /></button>
              </div>
            </div>
          </div>
        )}
        {tab === 'workspace' && <div className="flex h-full items-center justify-center text-outline flex-col gap-4"><FolderKanban size={48} className="opacity-50" /><p>代码工作区 (预留)</p></div>}
        {tab === 'terminal' && <div className="bg-black h-full p-4 font-mono text-sm text-[#4AF626]"><p>$ 欢迎使用 Cuckoo Android 终端</p><p className="animate-pulse">_</p></div>}
      </main>
      <nav className="h-20 bg-surface rounded-t-3xl flex justify-around items-center px-2 pb-safe sticky bottom-0 z-20 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        <button onClick={() => setTab('chat')} className={tabClass('chat')}><MessageSquare size={24} className="mb-1" /><span className="text-[10px] font-medium">对话</span></button>
        <button onClick={() => setTab('workspace')} className={tabClass('workspace')}><FolderKanban size={24} className="mb-1" /><span className="text-[10px] font-medium">工作区</span></button>
        <button onClick={() => setTab('terminal')} className={tabClass('terminal')}><Terminal size={24} className="mb-1" /><span className="text-[10px] font-medium">终端</span></button>
      </nav>
    </div>
  );
}