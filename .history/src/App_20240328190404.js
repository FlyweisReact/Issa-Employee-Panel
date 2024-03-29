/** @format */

import { Routes, Route } from "react-router-dom";
import { ReactNotifications } from "react-notifications-component";
import Assigned_Patient from "./Pages/Assigned_Patient/Assigned_Patient";
import Profile from "./Pages/Profile/Profile";
import Personal from "./Pages/EmploymentInformation/Peronal_Information/Personal";
import OfferLetter from "./Pages/EmploymentInformation/OfferLetter/OfferLetter";
import Appendix from "./Pages/EmploymentInformation/Appendix/Appendix";
import Forms2023 from "./Pages/EmploymentInformation/2023Forms/2023Forms";
import ReferenceCheck from "./Pages/EmploymentInformation/ReferenceCheck/ReferenceCheck";
import LRC1031 from "./Pages/EmploymentInformation/LRC-1031/LRC-1031";
import APS from "./Pages/EmploymentInformation/APS/APS";
import JobDescription from "./Pages/EmploymentInformation/JobDescription/JobDescription";
import FW4Form from "./Pages/EmploymentInformation/FW-4/FW-4";
import I9Form from "./Pages/EmploymentInformation/I-9/I9Form";
import FW9 from "./Pages/EmploymentInformation/FW9/FW9";
import GroupNotes from "./Pages/Group Notes/GroupNotes";
import Traning from "./Pages/Training/Traning";
import OnSite from "./Pages/Training/OnSite/OnSite";
import Skills from "./Pages/Training/SkillTraining/Skills";
import TimeOfRequest from "./Pages/Time Off Request/TimeOfRequest";
import Medications from "./Pages/Medication/Medications";
import MedicationCount from "./Pages/Medication/Count/MedicationCount";
import InformedConsent from "./Pages/Medication/InformedConsent/InformedConsent";
import PRNform from "./Pages/Medication/MedicationLog/PRNform";
import PatientTracking from "./Pages/Patient Tacking/PatientTracking";
import PatientChart from "./Pages/PatientChart/PatientMenu/PatientChart";
import Discharge from "./Pages/PatientChart/Discharge/Discharge";
import Upload from "./Pages/PatientChart/UploadDocument/Upload";
import EmployeePerformance from "./Pages/Employee Performance/EmployeePerformance";
import EmployeeTracking from "./Pages/Employee Tracking/EmployeeTracking";
import Setting from "./Pages/Setting/Setting";
import TimeSheet from "./Pages/Time Sheet/TimeSheet";
import PatientList from "./Pages/Patients/PatientList";
import Vitals2 from "./Pages/PatientVitals/Vitals2";
import OnSite2 from "./Pages/Training/OnSite/OnSite2";
import Skills2 from "./Pages/Training/SkillTraining/skills2";
import Reconciliations2 from "./Pages/Medication/Reconciliation/Reconsilations2";
import MedicautionCount2 from "./Pages/Medication/Count/MedicautionCount2";
import InformedConsent2 from "./Pages/Medication/InformedConsent/InformedConsent2";
import PRNform2 from "./Pages/Medication/MedicationLog/PRNform2";
import EditProgressNote from "./Pages/PatientChart/Progress/EditProgressNote";
import UpdateIncidentReport from "./Pages/PatientChart/IncidentReport/UpdateIncidentReport";
import UpdateDischarge from "./Pages/PatientChart/Discharge/UpdateDischarge";
import UpdatePrn from "./Pages/Medication/MedicationLog/UpdatePrn";
import UpdateInform from "./Pages/Medication/InformedConsent/UpdateInform";
import UpdateCount from "./Pages/Medication/Count/UpdateCount";
import ViewCount from "./Pages/Medication/Count/ViewCount";
import ViewInform from "./Pages/Medication/InformedConsent/ViewInform";
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
import OtherInformation from "./Pages/Employment Application/OtherInformation";
import Acknowledgement from "./Pages/Employment Application/Acknowledgement";
import Vitals from "./Pages/PatientVitals/Vitals";
import EditOnSite from "./Pages/Training/OnSite/EditOnSite";
import ServiceLog from "./Pages/Training/ServiceLog/ServiceLog";
import CreateServiceLog from "./Pages/Training/ServiceLog/CreateServiceLog";
import EditServiceLog from "./Pages/Training/ServiceLog/EditServiceLog";
import NotFound from "./Pages/404/NotFound";
import BookAppointment from "./Pages/Patients/BookAppointment";
import ViewSite from "./Pages/Training/OnSite/ViewSite";
import ViewServiceLog from "./Pages/Training/ServiceLog/ViewServiceLog";
import EditSkill from "./Pages/Training/SkillTraining/EditSkill";
import ViewSkills from "./Pages/Training/SkillTraining/ViewSkills";
import GetTimeOfRequest from "./Pages/Time Off Request/GetTimeOfRequest";
import ViewTimeOfRequest from "./Pages/Time Off Request/ViewTimeOfRequest";
import Schedule from "./Pages/Time Sheet/Schedule";
import ViewAps from "./Pages/EmploymentInformation/APS/ViewAps";
import CreateDischarge from "./Pages/PatientChart/Discharge/CreateDischarge";
import ViewDischarge from "./Pages/PatientChart/Discharge/ViewDischarge";
import DTF from "./Pages/PatientChart/Activities/DTF";
import CreateDTF from "./Pages/PatientChart/Activities/CreateDTF";
import UpdateDTF from "./Pages/PatientChart/Activities/UpdateDTF";
import ViewDTF from "./Pages/PatientChart/Activities/ViewDTF";
import FinancialRecord from "./Pages/PatientChart/FinancialRecord/FinancialRecord";
import CreateRecord from "./Pages/PatientChart/FinancialRecord/CreateRecord";
import EditFinancialRecord from "./Pages/PatientChart/FinancialRecord/EditFinancialRecord";
import ViewFinancialRecord from "./Pages/PatientChart/FinancialRecord/ViewFinancialRecord";
import StaffNotes from "./Pages/PatientChart/StaffNote/StaffNotes";
import CreateStaffNote from "./Pages/PatientChart/StaffNote/CreateStaffNote";
import UpdateStaffNote from "./Pages/PatientChart/StaffNote/UpdateStaffNote";
import ViewStaffNote from "./Pages/PatientChart/StaffNote/ViewStaffNote";
import IncidentReport from "./Pages/PatientChart/IncidentReport/IncidentReport";
import CreateIncident from "./Pages/PatientChart/IncidentReport/CreateIncident";
import ContactNote from "./Pages/PatientChart/ContactNote/ContactNote";
import CreateContactNote from "./Pages/PatientChart/ContactNote/CreateContactNote";
import UpdateContactNote from "./Pages/PatientChart/ContactNote/UpdateContactNote";
import ViewContactNote from "./Pages/PatientChart/ContactNote/ViewContactNote";
import ViewIncidentReport from "./Pages/PatientChart/IncidentReport/ViewIncidentReport";
import Authorization from "./Pages/PatientChart/Authorization/Authorization";
import CreateAuthorization from "./Pages/PatientChart/Authorization/CreateAuthorization";
import UpdateAuthorization from "./Pages/PatientChart/Authorization/UpdateAuthorization";
import ViewAuthorization from "./Pages/PatientChart/Authorization/ViewAuthorization";
import TherapyNote from "./Pages/TherapyNotes/TherapyNote";
import CreateTherapyNote from "./Pages/TherapyNotes/CreateTherapyNote";
import MilegaLog from "./Pages/TherapyNotes/MilegaLog/MilegaLog";
import CreateMilegaLog from "./Pages/TherapyNotes/MilegaLog/CreateMilegaLog";
import UpdateMilegaLog from "./Pages/TherapyNotes/MilegaLog/UpdateMilegaLog";
import ViewMilega from "./Pages/TherapyNotes/MilegaLog/ViewMilega";
import Manaul from "./Pages/TherapyNotes/Manual/Manaul";
import Mars from "./Pages/Medication/Mars/Mars";
import CreateMars from "./Pages/Medication/Mars/CreateMars";
import Reconciliation from "./Pages/Medication/Reconciliation/Reconciliation";
import MentalStatus from "./Pages/MentalStatus/MentalStatus";
import UpdateRecociliation from "./Pages/Medication/Reconciliation/UpdateRecociliation";
import ViewRecociliation from "./Pages/Medication/Reconciliation/ViewRecociliation";
import ViewPrn from "./Pages/Medication/MedicationLog/ViewPrn";
import ScheduleGroup from "./Pages/Time Sheet/ScheduleGroup";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
      <ReactNotifications />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employment/" element={<Employment />} />
        <Route path="/assigned-patient" element={<Assigned_Patient />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/offer-letter-form" element={<OfferLetter />} />
        <Route path="/appendix" element={<Appendix />} />
        <Route path="/forms-2023" element={<Forms2023 />} />
        <Route path="/reference-check" element={<ReferenceCheck />} />
        <Route path="/lrc-1031a" element={<LRC1031 />} />
        <Route path="/aps-consent-form" element={<APS />} />
        <Route path="/job-description" element={<JobDescription />} />
        <Route path="/fw4" element={<FW4Form />} />
        <Route path="/i-9" element={<I9Form />} />
        <Route path="/fw9" element={<FW9 />} />
        {/* Employee */}

        <Route path="/employee/patient-chart/upload" element={<Upload />} />

        <Route path="/employee/settings" element={<Setting />} />

        {/* New Route  */}
        <Route path="/progree-note/:id" element={<EditProgressNote />} />
        <Route path="/update-incident/:id" element={<UpdateIncidentReport />} />
        <Route path="/update-count/:id" element={<UpdateCount />} />
        <Route path="/view-count/:id" element={<ViewCount />} />
        <Route path="/view-inform/:id" element={<ViewInform />} />
        <Route path="/Personal-Information" element={<Personal />} />
        <Route
          path="/employee/patient-chart/progress"
          element={<ProgressNote />}
        />
        <Route path="/create-progress-note" element={<ProgressNote2 />} />

        <Route path="/employee-information" element={<PersonalInfo />} />
        <Route path="/view-employee-information" element={<ViewInfo />} />
        <Route path="/all-aps" element={<AllAps />} />
        <Route path="/edit-aps/:id" element={<EditAPS />} />
        <Route path="/view-aps/:id" element={<ViewAps />} />
        <Route path="/search-list/:id" element={<SearchPage />} />

        <Route path="/basic-information" element={<BasicInformation />} />
        <Route
          path="/educational-background"
          element={<EducationalBackground />}
        />
        <Route path="/employment-history" element={<EmploymentHistory />} />
        <Route path="/other-information" element={<OtherInformation />} />
        <Route path="/acknowledgement" element={<Acknowledgement />} />
        <Route path="/group-notes" element={<GroupNotes />} />
        <Route path="/employee/training" element={<Traning />} />

        <Route path="/employee-tracking" element={<EmployeeTracking />} />
        <Route path="/employee/patient-chart" element={<PatientChart />} />
        <Route path="/vitals" element={<Vitals />} />
        <Route path="/create-vital" element={<Vitals2 />} />
        <Route path="/patient-tracking" element={<PatientTracking />} />
        <Route path="/medications" element={<Medications />} />
        <Route path="/on-site" element={<OnSite />} />
        <Route path="/create-on-site-facility" element={<OnSite2 />} />
        <Route path="/edit-on-site/:id" element={<EditOnSite />} />
        <Route path="/view-site/:id" element={<ViewSite />} />
        <Route path="/service-log" element={<ServiceLog />} />
        <Route path="/create-service-log" element={<CreateServiceLog />} />
        <Route path="/edit-service-log/:id" element={<EditServiceLog />} />
        <Route path="/view-service-log/:id" element={<ViewServiceLog />} />
        <Route path="/patient-list" element={<PatientList />} />
        <Route path="/book-appointment/:id" element={<BookAppointment />} />
        <Route path="/skills-knowledge-training" element={<Skills />} />
        <Route path="/create-skill-training" element={<Skills2 />} />
        <Route path="/edit-skill-training/:id" element={<EditSkill />} />
        <Route path="/view-site-training/:id" element={<ViewSkills />} />
        <Route path="/create-time-of-request" element={<TimeOfRequest />} />
        <Route path="/get-time-of-request" element={<GetTimeOfRequest />} />
        <Route path="/view-time-of-request" element={<ViewTimeOfRequest />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/time-sheet" element={<TimeSheet />} />
        <Route path="/employee-performance" element={<EmployeePerformance />} />
        <Route path="/create-discharge-summary" element={<CreateDischarge />} />
        <Route path="/discharge-summary" element={<Discharge />} />
        <Route path="/update-discharge/:id" element={<UpdateDischarge />} />
        <Route path="/view-discharge/:id" element={<ViewDischarge />} />
        <Route path="/DTF" element={<DTF />} />
        <Route path="/create-dtf" element={<CreateDTF />} />
        <Route path="/update-dtf/:id" element={<UpdateDTF />} />
        <Route path="/view-dtf/:id" element={<ViewDTF />} />
        <Route path="/financial-record" element={<FinancialRecord />} />
        <Route path="/create-record" element={<CreateRecord />} />
        <Route path="/edit-record/:id" element={<EditFinancialRecord />} />
        <Route path="/view-record/:id" element={<ViewFinancialRecord />} />
        <Route path="/staff-note" element={<StaffNotes />} />
        <Route path="/create-staff-note" element={<CreateStaffNote />} />
        <Route path="/update-staff-note/:id" element={<UpdateStaffNote />} />
        <Route path="/view-staff-note/:id" element={<ViewStaffNote />} />
        <Route path="/incident-report" element={<IncidentReport />} />
        <Route path="/create-incident-report" element={<CreateIncident />} />
        <Route
          path="/view-incident-report/:id"
          element={<ViewIncidentReport />}
        />
        <Route path="/contact-note" element={<ContactNote />} />
        <Route path="/create-contact-note" element={<CreateContactNote />} />
        <Route
          path="/update-contact-note/:id"
          element={<UpdateContactNote />}
        />
        <Route path="/view-contact-note/:id" element={<ViewContactNote />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/create-authorization" element={<CreateAuthorization />} />
        <Route
          path="/update-authorization/:id"
          element={<UpdateAuthorization />}
        />
        <Route path="/view-authorization/:id" element={<ViewAuthorization />} />
        <Route path="/therapy-notes" element={<TherapyNote />} />
        <Route path="/create-therapy-note" element={<CreateTherapyNote />} />
        <Route path="/milega-log" element={<MilegaLog />} />
        <Route path="/create-milega-log" element={<CreateMilegaLog />} />
        <Route path="/update-milega-log/:id" element={<UpdateMilegaLog />} />
        <Route path="/view-milega-log/:id" element={<ViewMilega />} />
        <Route path="/manual-theraphy" element={<Manaul />} />
        <Route path="/mars" element={<Mars />} />
        <Route path="/create-mars" element={<CreateMars />} />
        <Route path="/reconciliation" element={<Reconciliation />} />
        <Route path="/create-reconciliation" element={<Reconciliations2 />} />
        <Route
          path="/update-reconciliation/:id"
          element={<UpdateRecociliation />}
        />
        <Route
          path="/view-reconciliation/:id"
          element={<ViewRecociliation />}
        />
        <Route
          path="/employee/medications/medication-count"
          element={<MedicationCount />}
        />
        <Route
          path="/create-medication-count"
          element={<MedicautionCount2 />}
        />
        {/* Informed Consent  */}
        <Route
          path="/employee/medications/informed-consent"
          element={<InformedConsent />}
        />
        <Route path="/create-informed-consent" element={<InformedConsent2 />} />
        <Route path="/update-informed/:id" element={<UpdateInform />} />

        {/* PRN Medication Log */}
        <Route path="/employee/medications/prn-form" element={<PRNform />} />
        <Route path="/create-prn-log" element={<PRNform2 />} />
        <Route path="/view-prn/:id" element={<ViewPrn />} />
        <Route path="/update-prn/:id" element={<UpdatePrn />} />
        <Route path="/scheduleGroup" element={<ScheduleGroup />} />

        <Route path="/mental-status" element={<MentalStatus />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
