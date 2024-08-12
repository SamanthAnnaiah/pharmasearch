export function Notifshow({ mes }) {
  return (
    <>
      <div className="absolute bottom-2  bg-red-100 text-red-950 text-center rounded-md p-1">
        {mes}
      </div>
    </>
  );
}
