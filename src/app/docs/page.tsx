// pages/codedog.js
import Link from 'next/link';

const CodeDog = () => {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-5xl font-bold mb-4">Documentation</h1>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">Installation</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li className="mb-2">Press <kbd className="kbd text-blue-400">F1</kbd> or <kbd className="kbd text-blue-400">⌘ + Shift + P</kbd> and type <code className="code">install</code>. Pick <strong>Extensions: Install Extension</strong>.</li>
        <li className="mb-2">Type <code className="code">glyph</code> and hit <kbd className="kbd text-blue-400">enter</kbd>.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">Usage</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li className="mb-2">To store a project in glyph</li>
        <blockquote className="pl-4 border-l-4 border-gray-400 mb-4">
          <p className="mb-2">Press <kbd className="kbd text-blue-400">F1</kbd> or <kbd className="kbd text-blue-400">⌘ + Shift + P</kbd> and type <code className="code">glyph: Store this Directory</code>, then press <kbd className="kbd text-blue-400">enter</kbd> or just press <kbd className="kbd text-blue-400">Ctrl+shift+.</kbd> for updating glyph.</p>
        </blockquote>
        <li className="mb-2">To Pull any Snippet</li>
        <blockquote className="pl-4 border-l-4 border-gray-400 mb-4">
          <p className="mb-2">Press <kbd className="kbd text-blue-400">F1</kbd> or <kbd className="kbd text-blue-400">⌘ + Shift + P</kbd> then type <code className="code">glyph: Fetch Snippet</code>,then enter the task and press <kbd className="kbd text-blue-400">enter</kbd> or just press <kbd className="kbd text-blue-400">Ctrl+shift+m</kbd> for getting snippet.</p>
        </blockquote>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">Uninstalling</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li className="mb-2">Click the Extensions sidebar item in VS Code.</li>
        <li className="mb-2">Type <code className="code">glyph</code> and hit <kbd className="kbd text-blue-400">enter</kbd>.</li>
        <li className="mb-2">Click the settings icon next to WakaTime, then click Uninstall.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">Contributing</h2>
      <p className="mb-4">Uh oh ! Gives us some time, We are going to make it open-source :)</p>
      <p className="mb-4">Made with ❤️ by the <Link href="https://twitter.com/Divyan__shhh" className="text-blue-500 hover:underline">Interactive Neutrino</Link>.</p>
    </div>
  );
};

export default CodeDog;
