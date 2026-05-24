import "./style.css"


export const Paginacion = ({
  info,
  actualPage,
  setPage,
}: {
  info: info;
  actualPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="paginador">
      {info.prev && <h1 onClick={(e) => setPage(actualPage - 1)}>{"<"}</h1>}
      <h2>{actualPage}</h2>
      {info.next && <h1 onClick={() => setPage(actualPage + 1)}>{">"}</h1>}
    </div>
  );
};
