const form = document.querySelector("#search-form > form");
const input: HTMLInputElement | null = document.querySelector("#input-localizacao");

const sectionTempoInfos = document.querySelector("#tempo-info");

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!input || !sectionTempoInfos) return;

  const localizacao = input.value;

  if (localizacao.length < 3) {
    alert("O local precisa ter ao menos 3 letras.");
  }

  try {
    const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=a2c620c6a88cee1ea6a85c9c04532d71&lang=pt_br&units=metric`);
    const dados = await resposta.json();

    const infos = {
      temperatura: Math.round(dados.main.temp),
      local: dados.name,
      icone: dados.weather[0].icon,
    };

    sectionTempoInfos.innerHTML = `          
    <img src="https://openweathermap.org/img/wn/${infos.icone}@2x.png" class="bg-primary rounded-full                material-symbols-outlined text-yellow-400 text-8xl" />
    <p class="text-[#111618] dark:text-white text-lg font-normal leading-normal">${infos.local}</p>
    <p class="text-[#111618] dark:text-white text-2xl font-bold leading-normal">${infos.temperatura}°C</p>`;
  } catch (err) {
    console.log("Deu um erro na obtenção dos dados da API");
  }
});
