import "./compra.css"
type Params = {
  children: React.ReactNode;
};

const LayoutCompra = ({ children }: Params) => {
  return (
    <div className="fondoCompra">
      <h2>Aqui se compra</h2>
      {children}
    </div>
  );
};

export default LayoutCompra;
