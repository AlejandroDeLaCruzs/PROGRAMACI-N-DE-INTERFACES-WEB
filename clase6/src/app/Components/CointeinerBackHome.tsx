"use client"

export const CointnerBackHome = ({
  children,
  setMostrar
}: {
  children: React.ReactNode;
  setMostrar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div onClick={(e) =>{ setMostrar(false); e.stopPropagation()}}>
      <div className="data">
        {children}
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet necessitatibus unde expedita ipsum, et placeat laborum doloribus ea assumenda recusandae facere eligendi magni quibusdam velit! Quisquam rem ex voluptates reprehenderit!</p>
      </div>
    </div>
  );
};
