export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">Loading...</h2>
        <p className="text-gray-600 mt-2">Please wait while we prepare your Prudential Takaful experience.</p>
      </div>
    </div>
  )
}