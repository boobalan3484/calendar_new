import DayCalendar from "@/component/DayCalendar";
import Header from "@/component/Header";
// import Main from "@/layout/Main";
import '@/style/CalendarSection.css'

export const metadata = {
  title: "Makkal Calendar | Tamil Daily Calendar",
  // description: "Creote | Business Landing Page",
};

export default function Home() {
  return (
    <div>
      <Header />
      <main className={`d-flex h-100 justify-content-center align-items-center my-4 `}>
        <div className='container-xl'>
          <DayCalendar />
        </div>
      </main>
    </div>
  );
};
