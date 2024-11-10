'use server';
export async function getRooms() {
  const response = await fetch(`${process.env.SERVER_URL}/rooms`);
  const data = await response.json();
  return data;
}
