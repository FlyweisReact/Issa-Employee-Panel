/** @format */

import { Routes, Route } from "react-router-dom";
import { ReactNotifications } from "react-notifications-component";
import Login from "./components/forms/Login";
import { RegisterPage } from "./components/forms/RegisterPage";
import Assigned_Patient from "./components/pages/Assigned_Patient/Assigned_Patient";
import Profile from "./components/pages/Profile/Profile";
import Personal from "./Pages/EmploymentInformation/Peronal_Information/Personal";
import OfferLetter from "./Pages/EmploymentInformation/OfferLetter/OfferLetter";
import Appendix from "./Pages/EmploymentInformation/Appendix/Appendix";
import Forms2023 from "./Pages/EmploymentInformation/2023Forms/2023Forms";
import ReferenceCheck from "./Pages/EmploymentInformation/ReferenceCheck/ReferenceCheck";
import LRC1031 from "./Pages/EmploymentInformation/LRC-1031/LRC-1031";
import APS from "./Pages/EmploymentInformation/APS/APS";
import JobDescription from "./Pages/EmploymentInformation/JobDescription/JobDescription";
import FW4Form from "./Pages/EmploymentInformation/FW-4/FW-4";
import Termination from "./components/pages/Employment/pages/Termination/Termination";
import I9Form from "./Pages/EmploymentInformation/I-9/I9Form";
import FW9 from "./Pages/EmploymentInformation/FW9/FW9";
import GroupNotes from "./components/EmployeeInformation/pages/GroupNotes/GroupNotes";
import TherapyNotes from "./components/EmployeeInformation/pages/TherapyNotes/TherapyNotes";
import Traning from "./components/EmployeeInformation/Traning/Traning";
import DashboardPage4 from "./Pages/Employment Application/OtherInformation";
import DashboardPage5 from "./components/EmployeeInformation/DashboardPage5";
import TherapyNotes1 from "./components/EmployeeInformation/pages/TherapyNotes/TherapyNotes1";
import VisitorLog from "./components/EmployeeInformation/pages/TherapyNotes/VisitorLog/VisitorLog";
import StaffSchedule from "./components/EmployeeInformation/pages/TherapyNotes/StaffSchedule/StaffSchedule";
import MilageLog from "./components/EmployeeInformation/pages/TherapyNotes/MilageLog/MilageLog";
import NotesLibrary from "./components/EmployeeInformation/pages/NotesLibrary/NotesLibrary";
import OnSite from "./components/EmployeeInformation/Traning/OnSite";
import EmployeeIn from "./components/EmployeeInformation/Traning/EmployeeIn";
import Skills from "./components/EmployeeInformation/Traning/Skills";
import TimeOfRequest from "./components/EmployeeInformation/pages/TimeOfRequest/TimeOfRequest";
import Vitals from "./components/EmployeeInformation/pages/Vitals/Vitals";
import Medications from "./components/EmployeeInformation/pages/Medications/Medications";
import Reconciliations from "./components/EmployeeInformation/pages/Medications/Reconsilations";
import MedicationCount from "./components/EmployeeInformation/pages/Medications/MedicationCount";
import InformedConsent from "./components/EmployeeInformation/pages/Medications/InformedConsent";
import PRNform from "./components/EmployeeInformation/pages/Medications/PRNform";
import PatientTracking from "./components/EmployeeInformation/pages/PatientTracking/PatientTracking";
import PatientChart from "./Pages/PatientChart/PatientMenu/PatientChart";
import Discharge from "./Pages/PatientChart/Discharge/Discharge";
import Activities from "./components/EmployeeInformation/pages/PatientChart/Activites";
import Financial from "./components/EmployeeInformation/pages/PatientChart/Fiencial/Fiencial";
import Staffing from "./components/EmployeeInformation/pages/PatientChart/Fiencial/Staffing/Staffing";
import Authorization from "./components/EmployeeInformation/pages/PatientChart/Fiencial/Authorization";
import Incident from "./components/EmployeeInformation/pages/PatientChart/Incident";
import ContactChart from "./components/EmployeeInformation/pages/PatientChart/ContactChart";
import Upload from "./components/EmployeeInformation/pages/PatientChart/Upload";
import EmployeePerformance from "./components/EmployeeInformation/pages/EmployeePerformance/EmployeePerformance";
import EmployeeTracking from "./components/EmployeeInformation/pages/EmployeeTracking/EmployeeTracking";
import Setting from "./components/EmployeeInformation/pages/Setting/Setting";
import TimeSheet from "./components/EmployeeInformation/pages/TimeSheet/TimeSheet";
import EmployeeSheet from "./components/EmployeeInformation/pages/TimeSheet/EmployeeSheet";
import All_Appointments from "./components/pages/All_Appointments/All_Appointments";
import BookAppointment from "./components/pages/All_Appointments/Book_Appointment";
import MARS from "./components/EmployeeInformation/pages/Medications/MARS";
import PatientList from "./components/pages/PatientList/PatientList";
import BookAppointmentPage from "./components/pages/PatientList/BookAppointment/BookAppointment";
import Intake from "./components/pages/PatientList/BookAppointment/Intake";
import InitialAssasement from "./components/pages/PatientList/BookAppointment/InitialAssesment";
import NursingAssessment from "./components/pages/PatientList/BookAppointment/NursingAssesment";
import TreatmentPlan from "./components/pages/PatientList/BookAppointment/TreatmentPlan";
import FaceSheet from "./components/pages/PatientList/BookAppointment/FaceSheet";
import Discharge2 from "./components/EmployeeInformation/pages/PatientChart/Discharge2";
import Activities2 from "./components/EmployeeInformation/pages/PatientChart/Activites2";
import Financial2 from "./components/EmployeeInformation/pages/PatientChart/Fiencial/Fiencial2";
import Staffing2 from "./components/EmployeeInformation/pages/PatientChart/Fiencial/Staffing/Staffing2";
import Authorization2 from "./components/EmployeeInformation/pages/PatientChart/Fiencial/Authorization2";
import Incident2 from "./components/EmployeeInformation/pages/PatientChart/Incident2";
import ContactChart2 from "./components/EmployeeInformation/pages/PatientChart/ContactChart2";
import VisitorLog2 from "./components/EmployeeInformation/pages/TherapyNotes/VisitorLog/VisitorLog2";
import MilageLog2 from "./components/EmployeeInformation/pages/TherapyNotes/MilageLog/MilageLog2";
import Vitals2 from "./components/EmployeeInformation/pages/Vitals/Vitals2";
import OnSite2 from "./components/EmployeeInformation/Traning/OnSite2";
import Skills2 from "./components/EmployeeInformation/Traning/skills2";
import EmployeeIn2 from "./components/EmployeeInformation/Traning/EmployeeIn2";
import Reconciliations2 from "./components/EmployeeInformation/pages/Medications/Reconsilations2";
import MedicautionCount2 from "./components/EmployeeInformation/pages/Medications/MedicautionCount2";
import InformedConsent2 from "./components/EmployeeInformation/pages/Medications/InformedConsent2";
import MARS2 from "./components/EmployeeInformation/pages/Medications/MARS2";
import PRNform2 from "./components/EmployeeInformation/pages/Medications/PRNform2";
import EditProgressNote from "./components/EmployeeInformation/pages/PatientChart/ProgressNote/EditProgressNote";
import EditAdl from "./components/EmployeeInformation/pages/PatientChart/ADL/EditAdl";
import EditFTR from "./components/EmployeeInformation/pages/PatientChart/Fiencial/EditFTR";
import UpdateStaffingNote from "./components/EmployeeInformation/pages/PatientChart/Fiencial/Staffing/UpdateStaffingNote";
import UpdateAuth from "./components/EmployeeInformation/pages/PatientChart/Fiencial/UpdateAuth";
import CreateIncidentReport2 from "./components/EmployeeInformation/pages/PatientChart/IncidentReport/CreateIncidentReport2";
import UpdateIncidentReport from "./components/EmployeeInformation/pages/PatientChart/IncidentReport/UpdateIncidentReport";
import UpdateContantNote from "./components/EmployeeInformation/pages/PatientChart/ContactNote/UpdateContantNote";
import UpdateDischarge from "./components/EmployeeInformation/pages/PatientChart/Discharge/UpdateDischarge";
import UpdatePrn from "./components/EmployeeInformation/pages/Medications/PRNLOG/UpdatePrn";
import UpdateInform from "./components/EmployeeInformation/pages/Medications/INFORMEDCONSENT/UpdateInform";
import UpdateCount from "./components/EmployeeInformation/pages/Medications/Count/UpdateCount";
import ViewCount from "./components/EmployeeInformation/pages/Medications/Count/ViewCount";
import UpdateRecociliation from "./components/EmployeeInformation/pages/Medications/RECONCILIATION/UpdateRecociliation";
import ViewRecociliation from "./components/EmployeeInformation/pages/Medications/RECONCILIATION/ViewRecociliation";
import ViewStaff from "./components/EmployeeInformation/pages/PatientChart/Fiencial/Staffing/ViewStaff";
import ViewInform from "./components/EmployeeInformation/pages/Medications/INFORMEDCONSENT/ViewInform";
import ViewPrn from "./components/EmployeeInformation/pages/Medications/PRNLOG/ViewPrn";
import Employment from "./Pages/EmploymentInformation/EmplymentMenu/Employment";
import ProgressNote2 from "./Pages/PatientChart/Progress/ProgressNote2";
import ProgressNote from "./Pages/PatientChart/Progress/ProgressNote";
import PersonalInfo from "./Pages/EmploymentInformation/Peronal_Information/PersonalInfo";
import ViewInfo from "./Pages/EmploymentInformation/Peronal_Information/ViewInfo";
import AllAps from "./Pages/EmploymentInformation/APS/AllAps";
import EditAPS from "./Pages/EmploymentInformation/APS/EditAPS";
import Dashboard from "./Pages/Dashboard/Dashboard";
import SearchPage from "./Pages/Search/SearchPage";
import BasicInformation from "./Pages/Employment Application/BasicInformation";
import EducationalBackground from "./Pages/Employment Application/EducationalBackground";
import EmploymentHistory from "./Pages/Employment Application/EmploymentHistory";

function App() {
  return (
    <>
      <ReactNotifications />
      <Routes>
        {/* Admin Panel */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employment/" element={<Employment />} />
        <Route path="/assigned-patient/" element={<Assigned_Patient />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/patient-list/" element={<PatientList />} />
        <Route
          path="/patient-list/book-appointment"
          element={<BookAppointmentPage />}
        />
        <Route path="/patient-list/intake" element={<Intake />} />
        <Route
          path="/patient-list/initial-assessment"
          element={<InitialAssasement />}
        />
        <Route
          path="/patient-list/nursing-assessment"
          element={<NursingAssessment />}
        />
        <Route
          path="/patient-list/treatment-plan"
          element={<TreatmentPlan />}
        />
        <Route path="/patient-list/face-sheet" element={<FaceSheet />} />

        <Route path="/offer-letter-form" element={<OfferLetter />} />
        <Route path="/appendix" element={<Appendix />} />
        <Route path="/forms-2023" element={<Forms2023 />} />
        <Route path="/reference-check" element={<ReferenceCheck />} />
        <Route path="/lrc-1031a" element={<LRC1031 />} />
        <Route path="/aps-consent-form" element={<APS />} />
        <Route path="/job-description" element={<JobDescription />} />
        <Route path="/fw4" element={<FW4Form />} />
        <Route path="/termination" element={<Termination />} />
        <Route path="/i-9" element={<I9Form />} />
        <Route path="/fw9" element={<FW9 />} />
        {/* Employee */}
        <Route path="/employee/group-notes" element={<GroupNotes />} />
        <Route path="/employee/therapy-notes" element={<TherapyNotes />} />
        <Route path="/employee/training" element={<Traning />} />
        <Route path="/employee/dashboard/page-4" element={<DashboardPage4 />} />
        <Route path="/employee/dashboard/page-5" element={<DashboardPage5 />} />
        <Route path="/employee/therapy-notes/1" element={<TherapyNotes1 />} />
        <Route
          path="/employee/therapy-notes/visitor-log"
          element={<VisitorLog />}
        />
        <Route
          path="/employee/therapy-notes/visitor-log2"
          element={<VisitorLog2 />}
        />
        <Route
          path="/employee/therapy-notes/staff-schedule"
          element={<StaffSchedule />}
        />
        <Route
          path="/employee/therapy-notes/milage-log"
          element={<MilageLog />}
        />
        <Route
          path="/employee/therapy-notes/milage-log2"
          element={<MilageLog2 />}
        />
        <Route path="/employee/notes-library" element={<NotesLibrary />} />
        <Route path="/employee/training/on-site" element={<OnSite />} />
        <Route path="/employee/training/on-site2" element={<OnSite2 />} />
        <Route path="/employee/training/employee-in" element={<EmployeeIn />} />
        <Route
          path="/employee/training/employee-in2"
          element={<EmployeeIn2 />}
        />
        <Route path="/employee/training/skills" element={<Skills />} />
        <Route path="/employee/training/skills2" element={<Skills2 />} />
        <Route path="/employee/time-of-request" element={<TimeOfRequest />} />
        <Route path="/employee/vitals" element={<Vitals />} />
        <Route path="/employee/vitals/add" element={<Vitals2 />} />
        <Route path="/employee/medications" element={<Medications />} />
        <Route
          path="/employee/medications/reconciliations"
          element={<Reconciliations />}
        />
        <Route
          path="/employee/medications/reconciliations2"
          element={<Reconciliations2 />}
        />
        <Route
          path="/employee/medications/medication-count"
          element={<MedicationCount />}
        />
        <Route
          path="/employee/medications/medication-count2"
          element={<MedicautionCount2 />}
        />
        <Route path="/employee/medications/mars" element={<MARS />} />
        <Route path="/employee/medications/mars2" element={<MARS2 />} />
        <Route
          path="/employee/medications/informed-consent"
          element={<InformedConsent />}
        />
        <Route
          path="/employee/medications/informed-consent2"
          element={<InformedConsent2 />}
        />
        <Route path="/employee/medications/prn-form" element={<PRNform />} />
        <Route path="/employee/medications/prn-form2" element={<PRNform2 />} />
        <Route
          path="/employee/patient-tracking"
          element={<PatientTracking />}
        />

        <Route
          path="/employee/patient-chart/discharge"
          element={<Discharge />}
        />
        <Route
          path="/employee/patient-chart/discharge2"
          element={<Discharge2 />}
        />
        <Route
          path="/employee/patient-chart/activities"
          element={<Activities />}
        />
        <Route
          path="/employee/patient-chart/activities2"
          element={<Activities2 />}
        />
        <Route
          path="/employee/patient-chart/financial"
          element={<Financial />}
        />
        <Route
          path="/employee/patient-chart/financial2"
          element={<Financial2 />}
        />
        <Route path="/employee/patient-chart/staffing" element={<Staffing />} />
        <Route
          path="/employee/patient-chart/staffing2"
          element={<Staffing2 />}
        />
        <Route
          path="/employee/patient-chart/authorization"
          element={<Authorization />}
        />
        <Route
          path="/employee/patient-chart/authorization2"
          element={<Authorization2 />}
        />
        <Route path="/employee/patient-chart/incident" element={<Incident />} />
        <Route
          path="/employee/patient-chart/incident2"
          element={<Incident2 />}
        />
        <Route
          path="/employee/patient-chart/contact-chart"
          element={<ContactChart />}
        />
        <Route
          path="/employee/patient-chart/contact-chart2"
          element={<ContactChart2 />}
        />
        <Route path="/employee/patient-chart/upload" element={<Upload />} />
        <Route
          path="/employee/employee-performance"
          element={<EmployeePerformance />}
        />
        <Route
          path="/employee/employee-tracking"
          element={<EmployeeTracking />}
        />
        <Route path="/employee/time-sheet" element={<TimeSheet />} />
        <Route path="/employee/employee-schedule" element={<EmployeeSheet />} />
        <Route path="/employee/settings" element={<Setting />} />
        <Route path="/all-appointments" element={<All_Appointments />} />
        <Route path="/book-appointment" element={<BookAppointment />} />

        {/* New Route  */}
        <Route path="/progree-note/:id" element={<EditProgressNote />} />
        <Route path="/adl/:id" element={<EditAdl />} />
        <Route path="/editFTR/:id" element={<EditFTR />} />
        <Route path="/updateStaffNote/:id" element={<UpdateStaffingNote />} />
        <Route path="/updateAuth/:id" element={<UpdateAuth />} />
        <Route
          path="/creat-incident-report-2/:id"
          element={<CreateIncidentReport2 />}
        />
        <Route path="/update-incident/:id" element={<UpdateIncidentReport />} />
        <Route
          path="/update-contact-note/:id"
          element={<UpdateContantNote />}
        />
        <Route path="/update-discharge/:id" element={<UpdateDischarge />} />

        <Route path="/update-prn/:id" element={<UpdatePrn />} />

        <Route path="/update-informed/:id" element={<UpdateInform />} />

        <Route path="/update-count/:id" element={<UpdateCount />} />
        <Route path="/view-count/:id" element={<ViewCount />} />

        <Route
          path="/update-reconciliation/:id"
          element={<UpdateRecociliation />}
        />
        <Route
          path="/view-reconciliation/:id"
          element={<ViewRecociliation />}
        />

        <Route path="/view-staff/:id" element={<ViewStaff />} />
        <Route path="/view-inform/:id" element={<ViewInform />} />
        <Route path="/view-prn/:id" element={<ViewPrn />} />
        {/* --- */}
        <Route path="/Personal-Information" element={<Personal />} />

        <Route path="/employee/patient-chart" element={<PatientChart />} />
        <Route
          path="/employee/patient-chart/progress"
          element={<ProgressNote />}
        />
        <Route path="/create-progress-note" element={<ProgressNote2 />} />

        <Route path="/employee-information" element={<PersonalInfo />} />
        <Route path="/view-employee-information" element={<ViewInfo />} />
        <Route path="/all-aps" element={<AllAps />} />
        <Route path="/edit-aps/:id" element={<EditAPS />} />
        <Route path="/search-list/:id" element={<SearchPage />} />

        <Route path="/basic-information" element={<BasicInformation />} />
        <Route
          path="/educational-background"
          element={<EducationalBackground />}
        />
         <Route path="/employment-history" element={<EmploymentHistory />} />
       

        {/* Not Found */}

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
