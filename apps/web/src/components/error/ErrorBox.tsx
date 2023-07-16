export function ErrorBox() {
  return (
    <div className="border-red-600 bg-red-400 p-2 rounded-md">
      <p>
        <span className="text-red-300">!</span>
        <span className="font-bold">Error</span>
      </p>
      <p>An error happened. See console for more information.</p>
    </div>
  );
}
