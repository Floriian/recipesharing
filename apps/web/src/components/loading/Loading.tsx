import { SymbolIcon } from "@radix-ui/react-icons";
export function Loading() {
  return (
    <div className="border border-secondary rounded-sm flex-justify-center p-2 text-secondary flex-col">
      <div className="animate-spin">
        <SymbolIcon />
      </div>
      <p>Loading...</p>
    </div>
  );
}
