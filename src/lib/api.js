import { supabase } from "../config";

const headers = {
  "apikey": supabase.key,
  "Authorization": `Bearer ${supabase.key}`,
  "Content-Type": "application/json",
};

export async function saveRsvp(entry) {
  const r = await fetch(`${supabase.url}/rest/v1/rsvps`, {
    method: "POST",
    headers: { ...headers, "Prefer": "return=minimal" },
    body: JSON.stringify({
      name: entry.name || "",
      email: entry.email || "",
      phone: entry.phone || "",
      guests: parseInt(entry.guests || "1"),
      attending_ceremony: !!entry.attendingCeremony,
      attending_reception: !!entry.attendingReception,
      message: entry.message || "",
    }),
  });
  if (!r.ok) {
    const err = await r.text();
    throw new Error(err);
  }
}

export async function loadRsvps() {
  const r = await fetch(`${supabase.url}/rest/v1/rsvps?select=*&order=created_at.desc`, { headers });
  if (!r.ok) throw new Error(`Load failed: ${r.status}`);
  const data = await r.json();
  return data.map(row => ({
    id: row.id,
    name: row.name || "",
    email: row.email || "",
    phone: row.phone || "",
    guests: String(row.guests || 1),
    attendingCeremony: row.attending_ceremony,
    attendingReception: row.attending_reception,
    message: row.message || "",
    submittedAt: row.created_at || "",
  }));
}
