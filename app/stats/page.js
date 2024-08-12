import { getmanufsstats } from "../_lib/data-service";
import { Statpage } from "./stats";

export default async function Page() {
  let manufdata = await getmanufsstats();

  return (
    <>
      <h1 className="hover:text-yellow-900 text-yellow-400 text-center mb-2">
        Top 10 manufacturers with the highest variety of pharmaceuticals
      </h1>
      <Statpage manuf_data={manufdata} />
    </>
  );
}
