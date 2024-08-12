import { gettotalmanufs } from "../_lib/data-service";

export async function Getmedmanufscounts() {
    let mcount = await gettotalmanufs();
    return <><span className="text-yellow-100 font-bold">{mcount}</span></>;
}