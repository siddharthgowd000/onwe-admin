import Image from "next/image";
import UserDashboard from "./users/page";
import ClubsDashboard from "./clubs/page";
import EventsDashboard from "./events/page";
import MagazineDashboard from "./magazines/page";


export default function Home() {
  return (
    <main>
     {/* <UserDashboard /> */}
     {/* <ClubsDashboard/> */}
     {/* <EventsDashboard /> */}
     <MagazineDashboard />
    </main>
  );
}
