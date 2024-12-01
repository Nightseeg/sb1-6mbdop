import { Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loading from './components/Loading';
import ProtectedRoute from './components/ProtectedRoute';
import { ROUTES } from './lib/constants/routes';

const Home = lazy(() => import('./pages/Home'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Pricing = lazy(() => import('./pages/Pricing'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

export default function AppRoutes() {
  const location = useLocation();

  return (
    <Suspense fallback={<Loading />}>
      <Routes location={location} key={location.pathname}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SOLUTIONS} element={<Solutions />} />
        <Route path={ROUTES.PRICING} element={<Pricing />} />
        <Route path={ROUTES.FAQ} element={<FAQ />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route
          path={`${ROUTES.DASHBOARD}/*`}
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Suspense>
  );
}