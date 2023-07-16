import { SymbolIcon } from "@radix-ui/react-icons";
export function Loading() {
  return (
    <div className="border border-secondary rounded-sm flex justify-center p-4 flex-col">
      <SymbolIcon className="animate-spin w-16 h-16" />
      <p>Loading...</p>
    </div>
  );
}
