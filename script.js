const btnRandom = document.getElementById("btn-random");
const imgRandom = document.getElementById("div-user-card");
const pname = document.getElementById("p-name");
const gender = document.getElementById("span-gender-icon");

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  alert(resp.data.results[0].picture.large);
  imgRandom.src = resp.data.results[0].picture.large;
  pname = resp.data.results[0].name.first;
  if (resp.data.results[0].gender == male) gender = "👨";
  if (resp.data.results[0].gender == female) gender = "👩";
}

btnRandom.onclick = async () => {
  callApi();
};
