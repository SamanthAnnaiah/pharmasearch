"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import {
  getlikemeds,
  getlikemedsMednames,
  getlikemedsSymptoms,
  updateprofile,
} from "./data-service";
import { supabase } from "./supabase";

export async function updateProfile(formData) {
  let session = await auth();
  if (!session) {
    throw new Error("User not logged in");
  }
  let name = formData.get("fullname");
  let email = formData.get("email");
  let phone = formData.get("phone");
  let passport = formData.get("passport");

  let data = updateprofile(session.user.userid, name, email, phone, passport);
  if (!data) {
    throw new Error("Update failed");
  }
  revalidatePath("/profile");
}

export async function getuser() {
  let session = await auth();
  if (!session) {
    throw new Error("User not logged in");
  }
  let userid = session.user.userid;

  let { data: users, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", userid);
  if (error) {
    console.log("at getuser", error);
    throw new Error("error while reading user data");
  }
  return users;
}

export async function getsearch(FormData) {
  let searchtype = FormData.get("searchtype");
  let search = FormData.get("search");
  switch (searchtype) {
    case "symptoms":
      break;
    case "medname":
      break;
    default:
      break;
  }
}

export async function processsearch(search, searchtype) {
  console.log(`The entered details are ${search} and ${searchtype}`);
  let output = "";
  switch (searchtype) {
    case "symptoms":
      console.warn("symptoms");
      output = await getlikemedsSymptoms(search);
      break;
    case "medname":
      console.warn("medname");
      output = await getlikemedsMednames(search);
      break;
    default:
      break;
  }
  return output;
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/" });
}

export async function signOutAction() {
  await signOut("google", { redirectTo: "/signout", redirect: true });
}

export async function putcollection(mdata) {
  let session = await auth();
  if (!session) {
    throw new Error("User not logged in");
  }
  const { data, error } = await supabase
    .from("pharmacollection")
    .insert([{ user_id: session.user.userid, med_id: mdata.med_id }])
    .select();
  if (error) {
    console.log(error);
    if (!error.code === "23505") {
      throw new Error("Error while inserting");
    } else {
      return "noinsert";
    }
  } else {
    return "insert";
  }
}
