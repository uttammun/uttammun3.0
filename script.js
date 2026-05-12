const committees = [
  {
    name: "UNGA",
    agenda:
      "Addressing the UN funding crisis arising from the United States' withdrawal from multilateral bodies.",
  },
  {
    name: "UNHRC",
    label: "UNHRC (Single/Double Delegation)",
    agenda:
      "Deliberation on the Human Rights situation of Uyghurs and other minorities in Xinjiang, in light of allegations of mass detention, surveillance, forced labour, and cultural suppression.",
  },
  {
    name: "UNSC",
    agenda:
      "Deliberation on the growing non-proliferation threat posed by the DPRK, with special emphasis on its advancing ICBM programme and strategic military alignments.",
  },
  {
    name: "IPCC",
    agenda:
      "Deliberation on the Effectiveness of the 2028 Global Stocktake in Ensuring Accountability Under the Paris Agreement in Light of IPCC AR7 Findings.",
  },
  {
    name: "AIPPM",
    agenda:
      "Deliberation on the ongoing Manipur crisis, with special emphasis on ethnic conflict, constitutional responsibility, and rehabilitation.",
  },
  {
    name: "UNCSW",
    agenda:
      "Deliberation on the UN Women-UNFPA Merger: Institutional Survival or Mandate Betrayal.",
  },
  {
    name: "IP",
    label: "International Press",
    agenda:
      "We are seeking talented Journalists, Photojournalists, Videographers, and Caricaturists.",
  },
];

const editionTwoPhotos = [
  { src: "./assets/uttam-mun-2-457.jpg" },
  { src: "./assets/uttam-mun-2-458.jpg" },
  { src: "./assets/uttam-mun-2-459.jpg" },
  { src: "./assets/uttam-mun-2-456.jpg" },
  { src: "./assets/uttam-mun-2-455.jpg" },
  { src: "./assets/uttam-mun-2-454.jpg" },
  { src: "./assets/uttam-mun-2-453.jpg" },
  { src: "./assets/uttam-mun-2-452.jpg" },
  { src: "./assets/uttam-mun-2-451.jpg" },
  { src: "./assets/uttam-mun-2-450.jpg" },
  { src: "./assets/uttam-mun-2-449.jpg" },
  { src: "./assets/uttam-mun-2-448.jpg" },
  { src: "./assets/uttam-mun-2-436.jpg" },
  { src: "./assets/uttam-mun-2-435.jpg" },
  { src: "./assets/uttam-mun-2-433.jpg" },
  { src: "./assets/uttam-mun-2-432.jpg" },
  { src: "./assets/uttam-mun-2-431.jpg" },
  { src: "./assets/uttam-mun-2-430.jpg" },
  { src: "./assets/uttam-mun-2-429.jpg" },
  { src: "./assets/uttam-mun-2-428.jpg" },
  { src: "./assets/uttam-mun-2-427.jpg" },
  { src: "./assets/uttam-mun-2-426.jpg" },
  { src: "./assets/uttam-mun-2-425.jpg" },
  { src: "./assets/uttam-mun-2-424.jpg" },
  { src: "./assets/uttam-mun-2-423.jpg" },
  { src: "./assets/uttam-mun-2-422.jpg" },
  { src: "./assets/uttam-mun-2-421.jpg" },
  { src: "./assets/uttam-mun-2-420.jpg" },
  { src: "./assets/uttam-mun-2-419.jpg" },
  { src: "./assets/uttam-mun-2-418.jpg" },
];

const editionOnePhotos = [
  { src: "./assets/uttam-mun-1-01.png" },
  { src: "./assets/uttam-mun-1-02.png" },
  { src: "./assets/uttam-mun-1-03.png" },
  { src: "./assets/uttam-mun-1-04.png" },
  { src: "./assets/uttam-mun-1-05.png" },
  { src: "./assets/uttam-mun-1-06.png" },
  { src: "./assets/uttam-mun-1-07.png" },
  { src: "./assets/uttam-mun-1-08.png" },
  { src: "./assets/uttam-mun-1-09.png" },
  { src: "./assets/uttam-mun-1-10.png" },
  { src: "./assets/uttam-mun-1-11.png" },
  { src: "./assets/uttam-mun-1-12.png" },
];

const committeeGrid = document.querySelector("#committee-grid");
const editionOneGallery = document.querySelector("#edition-one-gallery");
const editionTwoGallery = document.querySelector("#edition-two-gallery");

committeeGrid.innerHTML = committees
  .map(
    (committee) => `
      <article class="committee-card">
        <div class="card-body">
          <h3>${committee.label || committee.name}</h3>
          <p>${committee.agenda}</p>
        </div>
      </article>
    `,
  )
  .join("");

editionOneGallery.innerHTML = editionOnePhotos
  .map(
    (photo) => `
      <figure class="edition-photo">
        <img src="${photo.src}" alt="Uttam MUN 1.0 album photo" loading="lazy" />
      </figure>
    `,
  )
  .join("");

editionTwoGallery.innerHTML = editionTwoPhotos
  .map(
    (photo) => `
      <figure class="edition-photo">
        <img src="${photo.src}" alt="Uttam MUN 2.0 album photo" loading="lazy" />
      </figure>
    `,
  )
  .join("");

const targetDate = new Date("2026-08-07T08:00:00+05:30").getTime();
const timerNodes = {
  days: document.querySelector("#days"),
  hours: document.querySelector("#hours"),
  minutes: document.querySelector("#minutes"),
  seconds: document.querySelector("#seconds"),
};

function pad(value) {
  return String(value).padStart(2, "0");
}

function updateCountdown() {
  const remaining = Math.max(targetDate - Date.now(), 0);
  const seconds = Math.floor(remaining / 1000);
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const leftoverSeconds = seconds % 60;

  timerNodes.days.textContent = days;
  timerNodes.hours.textContent = pad(hours);
  timerNodes.minutes.textContent = pad(minutes);
  timerNodes.seconds.textContent = pad(leftoverSeconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);
