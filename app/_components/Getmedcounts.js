import { gettotalmeds } from "../_lib/data-service";

export async function Getmedcounts() {
    let mcount = await gettotalmeds();
    return <><span className="text-yellow-100 font-bold">{mcount}</span></>;
}