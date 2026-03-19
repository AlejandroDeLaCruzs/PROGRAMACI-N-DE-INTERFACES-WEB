
"use client"

export const CointnerBackHome = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="mainCointener">
      <div className="data">
        {children}
        <h1>hola</h1>
      </div>
    </div>
  );
};
