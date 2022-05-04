export default function Button({ children }) {
  return (
    <button
      type="button"
      disabled="disabled"
    >
      {children}
    </button>
  );
}
