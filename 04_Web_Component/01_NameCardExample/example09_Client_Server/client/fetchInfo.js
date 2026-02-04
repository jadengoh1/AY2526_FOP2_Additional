
export async function fetchContact() {

  const respone = await fetch(`http://127.0.0.1:8081/contact`);
  const contacts = await respone.json();

  return contacts;
}