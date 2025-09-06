interface ConsoleHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const ConsoleHeader = ({ children, className = "" }: ConsoleHeaderProps) => {
  return (
    <h2 className={`font-orbitron text-2xl md:text-3xl font-bold text-cyber-teal mb-8 ${className}`}>
      <span className="text-cyber-purple">{">"}_</span> {children}
    </h2>
  );
};

export default ConsoleHeader;