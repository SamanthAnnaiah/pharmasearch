import { auth } from "./auth";
import { supabase } from "./supabase";

export async function getmainmeds() {
  let { data: pharmacaps, error } = await supabase
    .from("pharmacaps")
    .select("*")
    .in("med_id", ["2", "4", "120"]);
  // For testing
  // await new Promise((res) => setTimeout(res, 1000));
  if (error) {
    console.error("getmainmeds", error);
  }
  return pharmacaps;
}

export async function getparticularmeds(mid) {
  let { data: pharmacaps, error } = await supabase
    .from("pharmacaps")
    .select("*")
    .eq("med_id", mid);
  if (error) {
    console.error("getparticularmeds", error);
  }
  return pharmacaps;
}

export async function getmedids() {
  let { data: pharmacaps, error } = await supabase
    .from("pharmacaps")
    .select("med_id")
    .gte("med_id", 1);
  if (error) {
    console.error("getmedids", error);
  }
  return pharmacaps;
}

export async function gettotalmeds() {
  const { data, count, error } = await supabase
    .from("pharmacaps")
    .select("*", { count: "exact" });
  if (error) {
    console.error("gettotalmeds", error);
  }
  return count;
}

export async function gettotalmanufs() {
  const { data, error } = await supabase.rpc("get_manufs_numbers");
  if (error) {
    console.error("gettotalmeds", error);
  }
  return data[0].manuf_num;
}

export async function getuserid(email) {
  if (email) {
    let { data: users, error } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .limit(1)
      .single();
    if (error) {
      if (error.code === "PGRST116") {
        return 0;
      } else {
        console.error("At getuserid", error);
      }
    }
    return users.id;
  } else {
    return 0;
  }
}

export async function getinfo() {
  let { data: infodata, error } = await supabase
    .from("info")
    .select("info_data")
    .eq("info_id", ["1"]);
  if (error) {
    console.error("getinfo", error);
  }
  return infodata.at(0).info_data;
}

export async function putuser(name, email, image) {
  let userid = getuserid(email);
  console.warn("putuser", userid);
  const { data, error } = await supabase
    .from("users")
    .insert([{ full_name: name, email: email, image_url: image }])
    .select();
  if (error) {
    console.error("putuser", error);
  }
  return data;
}

export async function updateprofile(userid, name, email, phone, passport) {
  const { data, error } = await supabase
    .from("users")
    .update({ phone: phone, passport: passport })
    .eq("id", userid)
    .select();
  if (error) {
    console.error("updateprofile", error);
  }
  return data;
}

export async function getmanufacturers() {
  const { data, error } = await supabase.rpc("get_medicine_numbers");
  if (error) {
    console.error("At getmanufacturer", error);
  }
  return data;
}

export async function getbgcolors() {
  let {
    data: ccodedata,
    count,
    error,
  } = await supabase
    .from("tailwindbgcolors")
    .select("ccode", { count: "exact" });
  if (error) {
    console.error("At getbgcolors", error);
  }
  let coldata = { ccodedata, count };
  return coldata;
}

export async function getlikemedsSymptoms(stype) {
  let { data: pharmacaps, error } = await supabase
    .from("pharmacaps")
    .select("*")
    .textSearch("med_uses", `${stype}`, {
      type: "websearch",
      config: "english",
    });
  if (error) {
    console.error("At getbgcolors", error);
  }
  return pharmacaps;
}

export async function getlikemedsMednames(stype) {
  let { data: pharmacaps, error } = await supabase
    .from("pharmacaps")
    .select("*")
    .textSearch("med_name", `${stype}`, {
      type: "websearch",
      config: "english",
    });
  if (error) {
    console.error("At getbgcolors", error);
  }
  return pharmacaps;
}

export async function getcollection() {
  let session = await auth();
  let userid = session.user.userid;
  const { data, error } = await supabase.rpc("get_profiles", {
    user_id_param: userid,
  });
  if (error) {
    console.log("At getcollection", error);
    throw new Error("getcollection error");
  }
  return data;
}

export async function getmanufsstats() {
  const { data, error } = await supabase.rpc("get_total_manufs");
  if (error) {
    console.log("At getmanufstats", error);
    throw new Error("getmanufstats error");
  }
  return data;
}
