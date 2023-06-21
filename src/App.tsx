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
    <main className="flex justify-center items-center h-100vh">
      <div className="bg-white">
        <div className="flex mb-35px">
          <div>
            <h6 className="uppercase tracking-widest text-[#FF5757]">
              El próximo feriado, {nextHoliday.motivo}
            </h6>
            <input
              className="w-150px p-10px mt-10px mr-20px rounded-lg border-[0.5px] border-solid border-[#DBDBDB] tracking-[0.125rem] caret-[#854dff] focus:border-solid focus:border-0.5px focus:border-[#854dff]" //outline none missed - focus and border fix pls
              placeholder="DD"
              type="text"
            />
            <p className="italic text-xs font-normal text-[#FF5757] my-1  mx-0">
              {rtf.format(dayDiff, "days")}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
