function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          欢迎使用 React Dome
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          这是一个开箱即用的 React + TypeScript + Tailwind CSS V4 脚手架项目
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h2 className="text-xl font-semibold text-blue-900 mb-2">快速开始</h2>
            <p className="text-blue-700">
              直接编辑 <code className="px-2 py-1 bg-blue-100 rounded">src/App.tsx</code> 文件即可开始开发
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h2 className="text-xl font-semibold text-green-900 mb-2">技术栈</h2>
            <ul className="list-disc list-inside text-green-700 space-y-1">
              <li>React 18</li>
              <li>TypeScript</li>
              <li>Vite</li>
              <li>Tailwind CSS V4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
