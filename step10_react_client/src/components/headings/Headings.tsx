export const H1 = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-6xl font-bold text-blue-700">{children}</h1>;
};

export const H2 = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-4xl font-bold text-blue-500">{children}</h2>;
};

export const H3 = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-2xl font-bold text-blue-700">{children}</h3>;
};

export const H4 = ({ children }: { children: React.ReactNode }) => {
  return <h4 className="text-xl font-bold text-blue-500">{children}</h4>;
};

export const H5 = ({ children }: { children: React.ReactNode }) => {
  return <h5 className="text-lg font-bold text-blue-700">{children}</h5>;
};

export const H6 = ({ children }: { children: React.ReactNode }) => {
  return <h6 className="font-bold text-blue-500">{children}</h6>;
};

export const P = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-gray-600">{children}</p>;
};
