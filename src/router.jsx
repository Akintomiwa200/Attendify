import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/mainlayout/MainLayout";
import Home from "./pages/home/Home";
import Notfound from "./pages/notfound/Notfound";
import DashboardLayout from './layout/dashboardlayout/DashboardLayout'
import TeacherLayout from './layout/teacherlayout/TeacherLayout'
import Login from './pages/login/Login'
import UserLayout from './layout/userlayout/Userlayout';
import Dashboard from "./pages/teacher/dashbboard/Dashboard";
import Attendance from "./pages/teacher/attendance/Attendance"
import Report from "./pages/teacher/reports/Report"
import Student from "./pages/teacher/student/Student"
import AttendanceToAdmin from './pages/admin/attendance/AttendanceToAdmin'
import AdminDasboard from "./pages/admin/dashboard/AdminDasboard"
import AdminReport from "./pages/admin/report/AdminReport";
import AdminStudent from "./pages/admin/student/AdminStudent";
import AdminTeacher from "./pages/admin/teacher/AdminTeacher";
import Absent from './pages/admin/absent/Absent'
import Subject from "./pages/admin/subject/Subject"
import SignUp from "./pages/signup/SignUp"
import AddTeacher from "./pages/admin/teacher/AddTeacher";
import AddSubject from "./pages/admin/subject/AddSubject";
import AddStudent from "./pages/admin/student/AddStudent";
import AddStudentByTeacher from "./pages/teacher/student/AddStudentByTeacher";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <Notfound />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      },

    ],
  },

  {
    path: '/student',
    element: <UserLayout />,
    children: [
      {
        index: true,
      }
    ]
  },
  {
    path: '/admin',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <AttendanceToAdmin />
      },
      {
        path: '/admin/dashboard',
        element: <AdminDasboard />
      },
      {
        path: '/admin/report',
        element: <AdminReport />
      },
      {
        path: '/admin/student',
        element: <AdminStudent />
      },
      {
        path: '/admin/subject',
        element: <Subject />
      },
      {
        path: '/admin/teacher',
        element: <AdminTeacher />
      },
      {
        path: '/admin/addteacher',
        element: <AddTeacher />
      },
      {
        path: '/admin/addsubject',
        element: <AddSubject />
      },
      {
        path: '/admin/addstudent',
        element: <AddStudent />
      },
      {
        path: "/admin/absent",
        element: <Absent />
      }
    ]
  },
  {
    path: '/teacher',
    element: <TeacherLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: '/teacher/attendance',
        element: <Attendance />,
      },
      {
        path: '/teacher/report',
        element: <Report />,
      },
      {
        path: '/teacher/student',
        element: <Student />,
      },
      {
        path: '/teacher/addstudent',
        element: <AddStudentByTeacher />
      }

    ]
  }
]);

export default router;
