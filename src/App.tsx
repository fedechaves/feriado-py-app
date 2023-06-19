const HOLIDAYS = [
  {
    date: new Date("2023-01-01"),
    motivo: "Año Nuevo",
  },
  {
    date: new Date("2023-03-01"),
    motivo: "Día de los Héroes",
  },
  {
    date: new Date("2023-05-01"),
    motivo: "Día del Trabajador",
  },
  {
    date: new Date("2023-05-15"),
    motivo: "Día de la Independencia Nacional",
  },
  {
    date: new Date("2023-06-12"),
    motivo: "Paz del Chaco",
  },
  {
    date: new Date("2023-08-15"),
    motivo: "Fundación de Asunción",
  },
  {
    date: new Date("2023-09-29"),
    motivo: "Batalla de Boquerón",
  },
  {
    date: new Date("2023-12-08"),
    motivo: "Virgen de Ca’acupé",
  },
  {
    date: new Date("2023-12-25"),
    motivo: "Navidad",
  },
];

const today = new Date();
const nextHoliday = HOLIDAYS.find((holiday) => holiday.date > today) || {
  ...HOLIDAYS[0],
  date: new Date(
    HOLIDAYS[0].date.getFullYear() + 1,
    HOLIDAYS[0].date.getMonth(),
    HOLIDAYS[0].date.getDate() + 1,
  ),
};

const msDiff = nextHoliday.date.getTime() - today.getTime();
const dayDiff = Math.round(msDiff / 86400000);

const rtf = new Intl.RelativeTimeFormat("es-PY", {numeric: "auto"});

function App() {
  return (
    <main className="flex justify-center items-center ">
      <div className="box-border h-2/3 w-2/3 p-4 border-4">
        <div className="div">
          <div className="">
            <h6 className="text-red-400">
              El próximo feriado, {nextHoliday.motivo}, será {rtf.format(dayDiff, "days")}
            </h6>
            <input type="text" />
            <p>empty</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
