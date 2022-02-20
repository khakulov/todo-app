import { boolean } from "yargs";

export async function checkLogin() {
  const response = await fetch("/api/_session/");
  const responseJSON = await response.json();
  return responseJSON;
}

export async function login(email?: string, password?: string) {
  const form = new FormData();
  form.set("email", email ?? process.env.REACT_APP_INOPAI_EMAIL ?? "");
  form.set("password", password ?? process.env.REACT_APP_INOPAI_PASSWORD ?? "");

  const response = await fetch("/api/_session/", {
    method: "post",
    body: form,
  });

  const responseJSON = await response.json();
  return responseJSON;
}

export async function logout() {
  const response = await fetch("/api/_session/", { method: "delete" });
  const responseJSON = await response.json();
  return responseJSON;
}

export async function groupList() {
  const params = new URLSearchParams({
    app: process.env.REACT_APP_INOPAI_TODO_APP_ID ?? "1",
  });
  const response = await fetch(`/api/group/?${params}`);
  const responseJSON = await response.json();
  return responseJSON;
}

export async function groupSingle(id: number) {
  const response = await fetch(`/api/group/${id}/`);
  const responseJSON = await response.json();
  return responseJSON;
}

export async function entrySearch(
  groupId?: boolean,
  queryString?: string,
  archived?: boolean,
  sort?: string
) {
  const response = await fetch("/api/search/", {
    method: "post",
    body: JSON.stringify({
      q: queryString ?? "*",
      field_query: {
        group: groupId ?? Number(process.env.REACT_APP_INOPAI_GROUP_ID) ?? 1,
        io_type: Number(process.env.REACT_APP_INOPAI_TODO_APP_ID) ?? 1,
      },
      exclude_permissions: true,
      limit: 1000,
      sort,
    }),
  });
  const responseJSON = await response.json();
  return responseJSON.hits.hits.map((h: any) => h._source);
}

export async function entryCreate(
  title: string,
  position?: number,
  groupId?: number
) {
  const response = await fetch("/api/io/", {
    method: "post",
    body: JSON.stringify({
      group: groupId ?? Number(process.env.REACT_APP_INOPAI_GROUP_ID) ?? 1,
      io_type: Number(process.env.REACT_APP_INOPAI_TODO_APP_ID) ?? 1,
      properties: { title, position },
    }),
  });
  const responseJSON = await response.json();
  return responseJSON.io;
}

export async function entryUpdate(
  entryId: number,
  title: string,
  done?: boolean,
  position?: number,
  archived?: boolean
) {
  const response = await fetch(`/api/io/${entryId}/`, {
    method: "PATCH",
    body: JSON.stringify({
      properties: { title, position, done, archived },
    }),
  });
  const responseJSON = await response.json();
  return responseJSON.io;
}

export async function entryDelete(entryId: number) {
  const response = await fetch(`/api/io/${entryId}`, {
    method: "delete",
  });
  const responseJSON = await response.json();
  return responseJSON.ok;
}
